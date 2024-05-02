import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LearningSeriesCard from '../component/LearningSeriesCard';
import { fetchAllLearningSeriesData } from '../services/learningSeries.service'; 

const LearningSeriesHub = () => {
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    fetchAllLearningSeriesData().then(data => setSeriesList(data)); 
  }, []);

  return (
    <Container>
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

export default LearningSeriesHub;