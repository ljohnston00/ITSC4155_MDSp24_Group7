import { useState, useEffect} from 'react';
import { useFinancialData } from './services/liveMarkets/financials.service';


export const useFinancialChartData = (ticker) => {
    const financialData = useFinancialData(ticker);
    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState({});
  
    useEffect(() => {
      if (!Array.isArray(financialData) || financialData.length === 0) {
        return;
      }
  
      const chartData = financialData.map(record => ({
        x: `${record.year} Q${record.quarter}`,
        y: record.netCashFlow
      }));
  
      setSeries([{
        name: "Net Cash Flow",
        data: chartData
      }]);
  
      setOptions({
        chart: {
          type: 'line'
        },
        xaxis: {
          type: 'categories',
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
            formatter: function (value) {
                const absValue = Math.abs(value);
                const sign = value < 0 ? '-' : '';
                if (absValue >= 1e9) {
                  return sign + (absValue / 1e9).toFixed(2) + 'B';
                } else if (absValue >= 1e6) {
                  return sign + (absValue / 1e6).toFixed(2) + 'M';
                } else if (absValue >= 1e3) {
                  return sign + (absValue / 1e3).toFixed(2) + 'K';
                } else {
                  return sign + absValue.toFixed(2);
                }
              }
              
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
    }, [financialData]);
  
    return { series, options };
  };
  