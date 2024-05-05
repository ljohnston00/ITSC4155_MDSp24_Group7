import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import { useStockData } from '../useStockData';
import { useNavigate } from 'react-router-dom';
import Paths from '../services/path.service';

  const StockCard = ({ ticker, timeSpan, startDate, endDate }) => {
    const nav = useNavigate();
    const { priceSeries, volumeSeries, priceOptions, volumeOptions, error } = useStockData(ticker, timeSpan, startDate, endDate);
    
    useEffect(() => {
      if (error && error.message === 'Unauthorized') {
        nav(Paths.LOGIN);
      }
    }, [error, nav]);

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