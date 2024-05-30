// SurveyEditor.js
import React, { useState, useEffect } from 'react';
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react';
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import 'survey-core/defaultV2.min.css';
import 'survey-creator-core/survey-creator-core.min.css';
import SearchBar from '../components/ResuableComponent/SearchBar';

const SurveyEditor = () => {
  const [creator] = useState(() => new SurveyCreator());
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    creator.saveSurveyFunc = (saveNo, callback) => {
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
    <Grid container>
      <Grid item lg={11} md={11} sm={11} xs={11} mx="auto">
        <SearchBar />
      </Grid>
      <Grid
        item
        lg={11}
        md={11}
        sm={11}
        xs={11}
        mx="auto"
        style={{
          background: medium ? "black" : "#161616",
          paddingTop: medium ? "0px" : "60px",
          paddingBottom: "160px",
          borderRadius: "20px",
          marginBottom: "50px",
        }}
      >
        <Box
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            fontSize: "28px",
          }}
        >
          Create Survey
        </Box>
        <Grid container>
          <Grid
            item
            lg={10}
            md={12}
            sm={12}
            xs={12}
            mx="auto"
            style={{
              padding: "20px",
              background: "#202020",
              borderRadius: "10px",
            }}
          >
            <SurveyCreatorComponent creator={creator} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SurveyEditor;
