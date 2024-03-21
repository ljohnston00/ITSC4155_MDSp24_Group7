import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import Cookies from 'js-cookie';
import { fetchStockData } from './services/stock.service';
import { useStockData } from './useStockData';

const StockCard = ( { timeSpan, startDate, endDate }) => {

  const [ticker, setTicker] = useState('');
  const { series, options } = useStockData(ticker, timeSpan, startDate, endDate);

return (
  <Card className='stockCard'>
    <Card.Body>
      <Form.Control type="text" placeholder="Enter ticker" value={ticker} onChange={e => setTicker(e.target.value)}
      />
      <Card.Title>{ticker.toLocaleUpperCase()}</Card.Title>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </Card.Body>
  </Card>
);
};
  
  export default StockCard;