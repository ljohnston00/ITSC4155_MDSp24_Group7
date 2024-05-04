import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LearningSeriesCard = ({ series }) => {
  return (
    <Card className='learningSeriesCard'>
      <Link to={`/series/${series._id}`}>
        <Card.Img className='image' variant="top" src={series.coverArtId} />
        <Card.Body>
            <Card.Title className='title'>{series.title}</Card.Title>
            <hr></hr>
            <Card.Text className='author'>By: {series.authorName}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default LearningSeriesCard;