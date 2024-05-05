import Cookies from 'js-cookie';
import Paths from "../path.service";

export const fetchStockData = async (ticker, timeSpan, startDate, endDate) => {
  try {
    const token = Cookies.get('Authorization');
    const limit = '100';
    const response = await fetch(`${Paths.API_BASE}/stockdata/ticker`, {
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

    if(response.status === 401){
      throw new Error('Unauthorized');
    } 

    if (!response.ok) {
      const error = new Error('Failed to fetch stock data');
      error.status = response.status;
      throw error;
    }

    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
    throw err;
  }
};
