import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import { fetchLearningSeriesData } from '../services/learningSeries.service';

const LearningSeries = () => {
  const { seriesId } = useParams();
  const [series, setSeries] = useState(null);
  const [currentPart, setCurrentPart] = useState(0); 
  const [sidebarOpen, setSidebarOpen] = useState(true); 

  useEffect(() => {
    fetchLearningSeriesData(seriesId).then(data => setSeries(data));
  }, [seriesId]);

  if (!series) return <div>Loading...</div>;

  const handleNext = () => {
    if (currentPart < series.parts.length - 1) {
      setCurrentPart(currentPart + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
    }
  };

  return (
    <Container>
      <h1 className='learningTitle'>{series.title}</h1>
      <Row className='series'>
        {sidebarOpen && (
          <Col md={4} className="seriesSidebar">
            <h2 className='sectionsTitle'>Sections</h2>
            <hr></hr>
            <ListGroup>
              {series.parts.map((part, index) => (
                <ListGroup.Item className='seriesParts' key={index} action onClick={() => setCurrentPart(index)}> 
                  {part.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        )}
        <Col md={8} className='seriesContent'>
          <h2>{series.parts[currentPart].title}</h2> 
          <hr></hr>
          <Image className='seriesImage' variant="top" src={series.thumbnail} />
          <hr></hr>
          <p>{series.parts[currentPart].content}</p> 
          <div className='d-flex justify-content-between'>
          <Button className='seriesPreviousBtn' onClick={handlePrevious} disabled={currentPart === 0}>Previous</Button>
          <Button className='seriesNextBtn' onClick={handleNext} disabled={currentPart === series.parts.length - 1}>Next</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LearningSeries;