import { useState, useEffect } from 'react';
import { useFinancialData } from './services/liveMarkets/financials.service';

export const useBalanceSheetChartData = (ticker) => {
  const financialData = useFinancialData(ticker);
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (!Array.isArray(financialData) || financialData.length === 0) {
      return;
    }

    // Prepare your data for the chart
    const assetsData = financialData.map(record => ({
      x: `${record.year} Q${record.quarter}`,
      y: record.balanceSheet.assets
    }));

    const liabilitiesData = financialData.map(record => ({
      x: `${record.year} Q${record.quarter}`,
      y: record.balanceSheet.liabilities
    }));

    const equityData = financialData.map(record => ({
      x: `${record.year} Q${record.quarter}`,
      y: record.balanceSheet.equity
    }));

    setSeries([
      {
        name: "Assets",
        data: assetsData
      },
      {
        name: "Liabilities",
        data: liabilitiesData
      },
      {
        name: "Equity",
        data: equityData
      }
    ]);

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
            formatter: function (value) {  // Add this formatter function
              if (value >= 1e9) {
                return (value / 1e9).toFixed(2) + 'B';
              } else if (value >= 1e6) {
                return (value / 1e6).toFixed(2) + 'M';
              } else if (value >= 1e3) {
                return (value / 1e3).toFixed(2) + 'K';
              } else {
                return value.toFixed(2);
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
