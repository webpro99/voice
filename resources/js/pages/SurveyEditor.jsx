import React, { useState, useEffect } from 'react';
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react';
import { Grid, Box } from "@mui/material";
import 'survey-core/defaultV2.min.css';
import 'survey-creator-core/survey-creator-core.min.css';
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import '../components/Assets/CSS/dark-theme.css'; // Import custom CSS
import SearchBar from '../components/ResuableComponent/SearchBar';
import LOGO from "../components/Assets/Images/LOGO.png";
import RightNavBar from "../components/ResuableComponent/RightNavbar";

const SurveyEditor = () => {
  const [creator] = useState(() => new SurveyCreator());

  useEffect(() => {
    creator.saveSurveyFunc = (saveNo, callback) => {
      const options = {
        showLogicTab: true,
        showThemeTab: true
    };
    creator.activeTab = "theme";

      const surveyJson = creator.JSON;
      fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ survey: JSON.stringify(surveyJson) }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          callback(saveNo, true);
        } else {
          throw new Error('Save failed');
        }
      })
      .catch(error => {
        console.error('There was a problem with the save operation:', error);
        callback(saveNo, false);
      });
    };
  }, [creator]);

  return (
    <Grid
      style={{
        background: "black",
        margin: "0px",
        padding: "0px",
        overflow: "hidden",
        boxSizing: "border-box",
        fontFamily: "Inter",
      }}
      container
    >
      <Grid item lg={2} md={2} sm={2} xs={2}>
        <RightNavBar />
      </Grid>
      <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
        <Grid item lg={12} md={12} xs={12} xm={12}>
          <SearchBar />
        </Grid>
        <SurveyCreatorComponent creator={creator} />
      </Grid>
    </Grid>
  );
};

export default SurveyEditor;
