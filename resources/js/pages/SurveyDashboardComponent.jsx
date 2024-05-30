import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Model } from 'survey-core';
import { VisualizationPanel } from 'survey-analytics';
import 'survey-analytics/survey.analytics.css';
import { LayeredDarkPanelless } from 'survey-core/themes/layered-dark-panelless';
import { Grid, Box, Tabs, Tab, CircularProgress } from '@mui/material';
import LOGO from "../components/Assets/Images/LOGO.png";
import RightNavBar from "../components/ResuableComponent/RightNavbar";
import SearchBar from "../components/ResuableComponent/SearchBar";
import '../components/Assets/CSS/SurveyDashboard.css'; // Import custom CSS

const SurveyDashboardComponent = () => {
  const { surveyId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [tabsInfo, setTabsInfo] = useState([]);
  const vizPanelContainer = useRef(null);

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const surveyResponse = await fetch(`/api/survey/${surveyId}`);
        if (!surveyResponse.ok) throw new Error('Failed to fetch survey data');
        const surveyData = await surveyResponse.json();
        const surveyModel = new Model(JSON.parse(surveyData.survey_data));
        surveyModel.applyTheme(LayeredDarkPanelless); // Apply the theme

        const responsesResponse = await fetch(`/api/survey-responses/${surveyId}`);
        if (!responsesResponse.ok) throw new Error('Failed to fetch survey responses');
        const responsesData = await responsesResponse.json();

        const parsedResponses = responsesData.map(response => JSON.parse(response.response_data));

        const allQuestions = surveyModel.getAllQuestions();

        const tabs = allQuestions.map(question => ({
          name: question.title || question.name,
          questions: [question.name],
          vizPanel: null
        }));

        tabs.unshift({
          name: 'All Questions',
          questions: allQuestions.map(q => q.name),
          vizPanel: null
        });

        tabs.forEach(tab => {
          const questions = allQuestions.filter(q => tab.questions.includes(q.name));
          tab.vizPanel = new VisualizationPanel(questions, parsedResponses);
        });

        setTabsInfo(tabs);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching survey data or responses:', error);
      }
    };

    fetchSurveyData();
  }, [surveyId]);

  const renderContainer = (index) => {
    const el = vizPanelContainer.current;
    if (el && tabsInfo.length > 0) {
      el.innerHTML = '';
      tabsInfo[index].vizPanel.render(el);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      renderContainer(tabIndex);
    }
  }, [isLoaded, tabIndex, tabsInfo]);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  if (!isLoaded) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid
      style={{
        background: "black",
        margin: "0px",
        padding: "0px",
        overflow: "hidden",
        boxSizing: "border-box",
        fontFamily: "Inter",
        color: "white"
      }}
      container
    >
      <Grid item lg={2} md={2} sm={2} xs={2}>
        <RightNavBar />
      </Grid>
      <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
        <Grid item lg={12} md={12} xs={12}>
          <SearchBar />
        </Grid>
        <Box
          sx={{
            padding: 3,
            backgroundColor: 'black',
            color: 'white',
            minHeight: '100vh',
          }}
        >
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="survey tabs"
            sx={{ marginBottom: 3 }}
          >
            {tabsInfo.map((tab, index) => (
              <Tab
                key={`tab_${index}`}
                label={tab.name}
                sx={{ color: 'white' }}
              />
            ))}
          </Tabs>
          <div ref={vizPanelContainer} className="viz-panel-container" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SurveyDashboardComponent;
