import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { fetchMarketNews } from '../services/newsService/news.service';
import NewsCard from '../component/NewsCard';
import withAuth from '../component/RestrictedPage';
import { useNavigate } from 'react-router-dom';
import Paths from '../services/path.service';

function News() {
  const [newsData, setNewsData] = useState([]);
  const [unauthorized, setUnauthorized] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    fetchMarketNews()
      .then(data => setNewsData(data))
      .catch(error => {
        if (error.message === 'Unauthorized') {
          setUnauthorized(true);
        }
      });
  }, []);

  useEffect(() => {
    if (unauthorized) {
      nav(Paths.LOGIN);
    }
  }, [unauthorized, nav]);

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

export default withAuth(News);
