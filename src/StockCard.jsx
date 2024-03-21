import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import Cookies from 'js-cookie';

const StockCard = ( { timeSpan, startDate, endDate }) => {

  const [ticker, setTicker] = useState('');
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
      if (!ticker) {
        return;
      }

    const fetchStockData = async () => {

      const token = Cookies.get('Authorization');
      const limit = '100';
      const response = await fetch("http://localhost:5000/stockdata/ticker", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          "tickerName": ticker.toLocaleUpperCase(),
          "timeSpan": timeSpan, 
          "startDate": startDate, 
          "endDate": endDate, 
          "limit": limit
        })
      });

      if (response.ok) {
        const data = await response.json();

        
        if (Array.isArray(data.results)) {
          setSeries([{
            name: "Stock price",
            data: data.results.map(result => result.c) 
          }]);
      
        setOptions({
          chart: {
            type: 'line'
          },
          colors: ['#FAF4D3'],
          xaxis: {
            categories: data.results.map(result => new Date(result.t).toLocaleDateString()),
            labels: {
              style: {
                colors: '#FAF4D3',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: '#FAF4D3',
              },
            },
          },
          title: {
            style: {
              colors: '#FAF4D3',
            },
          },
        });
      } else {
        console.error('Unexpected response structure:', data);
      }
      } else {
        console.log('Failed to fetch stock data');
      }
    
    };
   
    fetchStockData();
  }, [ticker, timeSpan, startDate, endDate]);




  return (
    <Card style={{ width: '30rem' }} className='stockCard'>
      <Card.Body>
        <Form.Control
          type="text"
          placeholder="Enter ticker"
          value={ticker}
          onChange={e => setTicker(e.target.value)}
        />
        <Card.Title>{ticker.toLocaleUpperCase()}</Card.Title>
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </Card.Body>
    </Card>
  );
};
  
  export default StockCard;