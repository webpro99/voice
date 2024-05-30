import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, IconButton, Button } from '@mui/material';
import LOGO from "../components/Assets/Images/LOGO.png";
import RightNavBar from "../components/ResuableComponent/RightNavbar";
import SearchBar from "../components/ResuableComponent/SearchBar";
import ClipboardIcon from "../components/Assets/Images/Clipboard.svg"; // Import the Clipboard icon

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await fetch('/api/surveys');
        if (!response.ok) throw new Error('Failed to fetch surveys');
        const data = await response.json();

        // Parse survey data to extract titles
        const parsedSurveys = data.map(survey => {
          const surveyData = JSON.parse(survey.survey_data);
          return {
            id: survey.id,
            title: surveyData.title || 'Untitled Survey',
            createdAt: survey.created_at,
          };
        });

        setSurveys(parsedSurveys);
        console.log(data);
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys();
  }, []);

  const handleCopyLink = (event, surveyId) => {
    event.preventDefault();
    const surveyLink = `${window.location.origin}/SurveyTaker/${surveyId}`;
    navigator.clipboard.writeText(surveyLink).then(() => {
      alert('Link copied to clipboard!');
    }).catch((error) => {
      console.error('Error copying link:', error);
      alert('Failed to copy link. Please try again.');
    });
  };
  

  return (
    <Grid
      container
      sx={{
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Inter',
        minHeight: '100vh',
      }}
    >
      <Grid item lg={2} md={2} sm={2} xs={2}>
        <RightNavBar />
      </Grid>
      <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
        <Box
          p={3}
        >
          <SearchBar />
          <Box mt={3}>
            <Typography variant="h4" gutterBottom>
              Survey List
            </Typography>
            <List>
              {surveys.map((survey, index) => (
                <React.Fragment key={survey.id}>
                  <ListItem
                    button
                    component={Link}
                    to={`/SurveyTaker/${survey.id}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: '1px solid #e2ff65',
                      borderRadius: '5px',
                      marginBottom: '10px',
                    }}
                  >
                    <ListItemText primary={survey.title} />
                    <ListItemText secondary={new Date(survey.createdAt).toLocaleString()} />
                    <Button
                      component={Link}
                      to={`/SurveyDashboardComponent/${survey.id}`}
                      variant="outlined"
                      sx={{
                        color: '#e2ff65',
                        borderColor: '#e2ff65',
                        borderRadius: '5px',
                      }}
                    >
                      See Results
                    </Button>
                    <IconButton edge="end" aria-label="copy" onClick={(event) => handleCopyLink(event, survey.id)}>
                      <img
                        src={ClipboardIcon}
                        alt="Copy"
                        sx={{ marginRight: '8px' }} // Add right margin here
                      />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SurveyList;
