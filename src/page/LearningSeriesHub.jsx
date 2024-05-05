import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LearningSeriesCard from '../component/LearningSeriesCard';
import { fetchAllLearningSeriesData } from '../services/learningService/learningSeries.service'; 
import withAuth from '../component/RestrictedPage';
import { useNavigate } from 'react-router-dom';

const LearningSeriesHub = () => {
  const [seriesList, setSeriesList] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetchAllLearningSeriesData(nav).then(data => setSeriesList(data)); 
  }, []);

  return (
    <Container className='learningHub'>
      <h1 className='learningTitle'>Learning Series Hub</h1>
      <Row>
        {seriesList.map((series, index) => (
          <Col sm={12} md={6} lg={4} key={index}>
            <LearningSeriesCard series={series} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default withAuth(LearningSeriesHub);