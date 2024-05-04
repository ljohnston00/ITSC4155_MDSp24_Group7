import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import { useStockData } from '../useStockData';

  const StockCard = ({ ticker, timeSpan, startDate, endDate }) => {
    const { priceSeries, volumeSeries, priceOptions, volumeOptions } = useStockData(ticker, timeSpan, startDate, endDate);
    
    return (
      
      <Card className='stockCard'>
      <Card.Body>
      <p>Stock Price Graph</p>
      <hr></hr>
      <ReactApexChart options={priceOptions} series={priceSeries} type="line" height={236}/>
      <p>Volume Graph</p>
      <hr></hr>
      <ReactApexChart options={volumeOptions} series={volumeSeries} type="line" height={236}/>
      </Card.Body>
          </Card>
      );
    };

    export default StockCard;