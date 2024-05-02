import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { fetchMarketNews } from '../services/news.service';
import NewsCard from './NewsCard';

function News() {
    const [newsData, setNewsData] = useState([]);
  
    

    useEffect(() => {
      fetchMarketNews().then(data => setNewsData(data));
    }, []);
  
    return (
      <Container className='newsPage d-flex justify-content-center'>
        <h1 className='newsPageTitle'>Market News</h1>
        <Row className=''>
          {newsData.map((news, index) => (
            <Col sm={12} md={6} lg={4} key={index}>
              <NewsCard news={news} />
            </Col>
        ))}
      </Row>
      </Container>
    );
  }
  
  export default News;