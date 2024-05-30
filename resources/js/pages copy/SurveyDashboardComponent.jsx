import React, { useEffect, useState, useRef } from 'react';
import { Model } from 'survey-core';
import { VisualizationPanel } from 'survey-analytics';
import 'survey-analytics/survey.analytics.css';
import { useParams } from 'react-router-dom';

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

        const responsesResponse = await fetch(`/api/survey-responses/${surveyId}`);
        if (!responsesResponse.ok) throw new Error('Failed to fetch survey responses');
        const responsesData = await responsesResponse.json();

        const allQuestions = surveyModel.getAllQuestions();
        const tabs = [
          { name: 'All Questions', questions: allQuestions.map(q => q.name) },
          // Add more tabs if necessary
        ];

        tabs.forEach(tab => {
          const questions = allQuestions.filter(q => tab.questions.includes(q.name));
          tab.vizPanel = new VisualizationPanel(questions, responsesData);
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

  if (!isLoaded) {
    return <div id="loadingIndicator">Loading...</div>;
  }

  return (
    <div>
      <div className="tabs">
        {tabsInfo.map((tab, index) => (
          <button
            key={`tab_${index}`}
            className={`tablinks${tabIndex === index ? ' active' : ''}`}
            onClick={() => setTabIndex(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tabcontent" ref={vizPanelContainer}></div>
    </div>
  );
};

export default SurveyDashboardComponent;
