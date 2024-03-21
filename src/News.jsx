import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { fetchMarketNews } from './services/news.service';
import NewsCard from './NewsCard';

function News() {
    const [newsData, setNewsData] = useState([]);
  
    

    useEffect(() => {
      fetchMarketNews().then(data => setNewsData(data));
    }, []);
  
    return (
      <div className='newsPage'>
        <h1 className='newsPageTitle'>Market News</h1>
        <Row>
        {newsData.map((news, index) => (
          <Col sm={12} md={6} lg={4} key={index}>
            <NewsCard news={news} />
          </Col>
        ))}
      </Row>
      </div>
    );
  }
  
  export default News;