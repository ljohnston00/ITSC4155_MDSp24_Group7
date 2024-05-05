import { useState, useEffect } from 'react';
import { fetchStockData } from './services/liveMarkets/stock.service';

export const useStockData = (ticker, timeSpan, startDate, endDate) => {
  const [priceSeries, setPriceSeries] = useState([]);
  const [volumeSeries, setVolumeSeries] = useState([]);
  const [priceOptions, setPriceOptions] = useState({});
  const [volumeOptions, setVolumeOptions] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ticker) {
      return;
    }
    fetchStockData(ticker, timeSpan, startDate, endDate)
      .then(data => {
        if (Array.isArray(data.results)) {
          setPriceSeries([{
            name: "Stock price",
            data: data.results.map(result => result.c) 
          }]);
          setVolumeSeries([{
            name: "Volume",
            data: data.results.map(result => result.v)
          }]);
        
          setPriceOptions({
            chart: {
              type: 'line'
            },
            colors: ['#FAF4D3'], 
            xaxis: {
              type: 'datetime',
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
            tooltip: {
              theme: 'dark'
            }
          });

          setVolumeOptions({
            chart: {
              type: 'line'
            },
            colors: ['#FAF4D3'], 
            xaxis: {
              type: 'datetime',
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
            tooltip: {
              theme: 'dark'
            }
          });
        } else {
          console.error('Unexpected response structure:', data);
        }
      })
      .catch((error) => {
        console.log('Failed to fetch stock data', error);
        setError(error);
      });
  }, [ticker, timeSpan, startDate, endDate]);

  return { priceSeries, volumeSeries, priceOptions, volumeOptions, error };
};
