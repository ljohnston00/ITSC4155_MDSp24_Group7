import React, { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { Runtime, Inspector } from '@observablehq/runtime';
import Notebook from './Notebook';
const StockCard = ({ stock }) => {
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current) {
      new Runtime().module(Notebook, Inspector.into(cardRef.current));
    }
  }, []);

  return (
    <Card style={{ width: '18rem' }} className='stockCard'>
      <Card.Body>
        <Card.Title>{"stock.name"}</Card.Title>
        <Notebook></Notebook>
      </Card.Body>
    </Card>
  );
};
  
  export default StockCard;