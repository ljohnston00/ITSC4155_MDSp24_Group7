import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import { fetchLearningSeriesData } from '../services/learningService/learningSeries.service';
import withAuth from '../component/RestrictedPage';
import { useNavigate } from 'react-router-dom';

const LearningSeries = () => {
  const { seriesId } = useParams();
  const [series, setSeries] = useState(null);
  const [currentPart, setCurrentPart] = useState(0); 
  const [sidebarOpen, setSidebarOpen] = useState(true); 
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLearningSeriesData(seriesId, nav);
      setSeries(data);
    };

    fetchData();
  }, [seriesId, nav]);

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
        {sidebarOpen && series.parts && series.parts.length > 0 && (
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
          <h2>{series.parts && series.parts[currentPart] ? series.parts[currentPart].title : series.title}</h2>
          <hr></hr>
          <Image className='seriesImage' variant="top" src={series.coverArtId} />
          <hr></hr>
          <p>{series.parts && series.parts[currentPart] ? series.parts[currentPart].description : 'There is no content for this series yet.'}</p>

          {series.parts && series.parts.length > 0 && (
            <div className='d-flex justify-content-between'>
              <Button className='seriesPreviousBtn' onClick={handlePrevious} disabled={currentPart === 0}>Previous</Button>
              <Button className='seriesNextBtn' onClick={handleNext} disabled={currentPart === series.parts.length - 1}>Next</Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default withAuth(LearningSeries);
