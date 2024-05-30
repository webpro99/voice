import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Model } from 'survey-core'; // Importing Model from survey-core
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { Grid, Box } from "@mui/material";
import LOGO from "../components/Assets/Images/LOGO.png";
import RightNavBar from "../components/ResuableComponent/RightNavbar";
import SearchBar from "../components/ResuableComponent/SearchBar";

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
                const parsedSurveyData = JSON.parse(data.survey_data); // Parse the JSON string
                console.log(parsedSurveyData);
                setSurveyData(parsedSurveyData);
            } catch (error) {
                console.error('Error fetching survey:', error);
            }
        };

        fetchSurveyData();
    }, [id]);

    if (!surveyData) {
        return <div>Loading...</div>;
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
          // height: "100vh",
      }}
      container
  >
      <Grid item lg={2} md={2} sm={2} xs={2}>
          <RightNavBar />
      </Grid>
      <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
          { <Grid item lg={12} md={12} xs={12} xm={12}>
          <SearchBar />

          </Grid>  }
      <Survey model={new Model(surveyData)} />

      </Grid>
  </Grid>    );
};

export default SurveyDisplay;
