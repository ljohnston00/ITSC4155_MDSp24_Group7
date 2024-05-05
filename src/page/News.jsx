import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { fetchMarketNews } from '../services/newsService/news.service';
import NewsCard from '../component/NewsCard';
import withAuth from '../component/RestrictedPage';
import { useNavigate } from 'react-router-dom';

function News() {
    const [newsData, setNewsData] = useState([]);
    const nav = useNavigate();
    

    useEffect(() => {
      fetchMarketNews(nav).then(data => setNewsData(data));
    }, []);
  
    return (
      <div className='newsPageContainer'>
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
      </div>
    );
  }
  
  export default withAuth(News);