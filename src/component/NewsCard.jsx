import React from 'react';
import { Card } from 'react-bootstrap';

function NewsCard({ news }) {
    return (
      <Card className='newsCard'>
        <a href={news.url}>
          <Card.Img className='image' variant="top" src={news.image_url} alt={news.title}/>
          <Card.Body>
            <Card.Title className='title'>{news.title}</Card.Title>
            <hr></hr>
            <Card.Text>{news.description}</Card.Text>
          </Card.Body>
        </a>
      </Card>
    );
}

export default NewsCard;