import { useState, useEffect } from 'react';
import Paths from "../path.service";
import Cookies from 'js-cookie';

function financialCompare(a, b) {
    const aTime = a.year + parseFloat(a.quarter.charAt(1)) / 5;
    const bTime = b.year + parseFloat(b.quarter.charAt(1)) / 5;
    if (aTime < bTime) {
      return -1;
    }
    if (aTime > bTime) {
      return 1;
    }
    return 0;
}


export const useFinancialData = (ticker) => {
  const [financialData, setFinancialData] = useState([]);
  const cookie = Cookies.get('Authorization');

  useEffect(() => {
    if (!ticker) {
      return;
    }

    fetch(`${Paths.API_BASE}/stockdata/financials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie
      },
      body: JSON.stringify({
        tickerName: ticker
      })
    })
    .then(response => {
      if (!response.ok) {
        const error = new Error('Failed to fetch financial data');
        error.status = response.status;
        throw error;
      }
      return response.json();
    })
    .then(data => {
      if (Array.isArray(data.results)) {
        const financialRecords = data.results.map((result, i) => {
          return {
            index: i,
            ticker: result.tickers[0],
            year: result.fiscal_year,
            quarter: result.fiscal_period,
            netCashFlow: result.financials.cash_flow_statement ? result.financials.cash_flow_statement.net_cash_flow.value : 0,
            endDate: result.end_date,
            balanceSheet: {
              currentAssets: result.financials.balance_sheet.current_assets.value,
              currentLiabilities: result.financials.balance_sheet.current_liabilities.value,
              assets: result.financials.balance_sheet.assets.value,
              liabilities: result.financials.balance_sheet.liabilities.value,
              equity: result.financials.balance_sheet.equity.value
            }
          };
        });

        setFinancialData(financialRecords.sort(financialCompare));
      } else {
        console.error('Unexpected response structure:', data);
      }
    })
    .catch((error) => {
      console.log(error);
      throw error
    });
  }, [ticker]);

  return financialData;
};
