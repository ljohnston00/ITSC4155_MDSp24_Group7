// useStockData.js
import { useState, useEffect } from 'react';
import { fetchStockData } from './services/stock.service';

export const useStockData = (ticker, timeSpan, startDate, endDate) => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (!ticker) {
      return;
    }
    fetchStockData(ticker, timeSpan, startDate, endDate)
      .then(data => {
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
      })
      .catch((error) => {
        console.log('Failed to fetch stock data', error);
      });
  }, [ticker, timeSpan, startDate, endDate]);

  return { series, options };
};
