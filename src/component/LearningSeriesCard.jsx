import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LearningSeriesCard = ({ series }) => {
    
  return (
    <Card className='learningSeriesCard'>
      <Link to={`/series/${series.id}`}>
        <Card.Img className='image' variant="top" src={series.thumbnail} />
        <Card.Body>
            <Card.Title className='title'>{series.title}</Card.Title>
            <hr></hr>
            <Card.Text className='author'>By: {series.author}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default LearningSeriesCard;