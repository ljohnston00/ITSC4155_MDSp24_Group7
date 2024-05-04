import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import { useFinancialChartData } from '../useFinancialChartData';
import { useBalanceSheetChartData } from '../useBalanceSheetChartData';
import { useFinancialData } from '../services/liveMarkets/financials.service';
import BalanceSheetTable from './BalanceSheetTable';

const FinancialCard = ({ view, ticker, cookie }) => {
    const financialData = useFinancialData(ticker, cookie);
    const { series: cashflowSeries, options: cashflowOptions } = useFinancialChartData(ticker);
    const { series: balanceSheetSeries, options: balanceSheetOptions } = useBalanceSheetChartData(ticker);
  
    const series = view === 'balanceSheetChart' ? balanceSheetSeries : cashflowSeries;
    const options = view === 'balanceSheetChart' ? balanceSheetOptions : cashflowOptions;
  
    useEffect(() => { 
    }, [series, options]);
  
    return (
      <Card className='financialCard'>
        <Card.Body>
          {view === 'cashflow' && (
            <div>
              <p>Cash Flow Chart</p>
              <hr></hr>    
              <ReactApexChart options={options} series={series} type="line" height={565}/>
            </div>
          )}
          {view === 'balanceSheetTable' && (
            <div>  
              <p>Balance Sheet Table</p>
              <hr></hr>
              <BalanceSheetTable financialData={financialData} /> 
            </div>
          )}
          {view === 'balanceSheetChart' && (
            <div>
              <p>Balance Sheet Chart</p>
              <hr></hr> 
              <ReactApexChart options={options} series={series} type="line" height={565}/>
            </div>
          )}
        </Card.Body>
      </Card>
    );
  };
  
  export default FinancialCard;
