import React from 'react';
import { useFinancialData } from '../services/liveMarkets/financials.service';

const BalanceSheetTable = ({ financialData }) => {
    
    const formatValue = (value) => {
      if (value >= 1e9) {
        return (value / 1e9).toFixed(2) + 'B';
      } else if (value >= 1e6) {
        return (value / 1e6).toFixed(2) + 'M';
      } else if (value >= 1e3) {
        return (value / 1e3).toFixed(2) + 'K';
      } else {
        return value.toFixed(2);
      }
    };
  
    return (
      <table className='balanceSheetTable'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Quarter</th>
            <th>Assets</th>
            <th>Liabilities</th>
            <th>Equity</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(financialData) && financialData.length > 0 && financialData.map((record, index) => (
            <tr key={index}>
              <td>{record.year}</td>
              <td>{record.quarter}</td>
              <td>{formatValue(record.balanceSheet.assets)}</td>
              <td>{formatValue(record.balanceSheet.liabilities)}</td>
              <td>{formatValue(record.balanceSheet.equity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default BalanceSheetTable;
  