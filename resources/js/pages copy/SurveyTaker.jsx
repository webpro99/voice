import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';

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
  surveyModel.onComplete.add(onComplete);

  return <Survey model={surveyModel} />;
};

export default SurveyDisplay;
