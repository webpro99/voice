import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { Grid, Box } from "@mui/material";
import LOGO from "../components/Assets/Images/LOGO.png";
import RightNavBar from "../components/ResuableComponent/RightNavbar";
import SearchBar from "../components/ResuableComponent/SearchBar";
import 'survey-core/defaultV2.min.css';
import { LayeredDarkPanelless } from 'survey-core/themes/layered-dark-panelless';
import '../components/Assets/CSS/SurveyTaker.css';
const SurveyDisplay = () => {
  const { id } = useParams();
  const [surveyData, setSurveyData] = useState(null);

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const response = await fetch(`/api/survey/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch survey data');
        }
        const data = await response.json();
        const parsedSurveyData = JSON.parse(data.survey_data);
        console.log(parsedSurveyData);
        setSurveyData(parsedSurveyData);
      } catch (error) {
        console.error('Error fetching survey:', error);
      }
    };

    fetchSurveyData();
  }, [id]);

  const onComplete = async (survey) => {
    try {
      const response = await fetch(`/api/survey/${id}/response`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ responses: JSON.stringify(survey.data) }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Thank you for completing the survey!');
      } else {
        throw new Error('Failed to save survey responses');
      }
    } catch (error) {
      console.error('Error submitting survey responses:', error);
      alert('There was an error submitting your responses. Please try again.');
    }
  };

  if (!surveyData) {
    return <div>Loading...</div>;
  }

  const surveyModel = new Model(surveyData);
  surveyModel.applyTheme(LayeredDarkPanelless);

  surveyModel.onComplete.add(onComplete);
  return (
    <Grid
    style={{
        background: "black",
        margin: "0px",
        padding: "0px",
        overflow: "hidden",
        boxSizing: "border-box",
        fontFamily: "Inter",
        // height: "100vh",
    }}
    container
>
    <Grid item lg={2} md={2} sm={2} xs={2}>
       
    </Grid>
    <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
        { <Grid item lg={12} md={12} xs={12} xm={12}>
      

        </Grid>  }
        <Survey model={surveyModel} /> 

    </Grid>
</Grid>    );
 };

export default SurveyDisplay;
