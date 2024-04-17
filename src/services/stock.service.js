import Cookies from 'js-cookie';

export const fetchStockData = async (ticker, timeSpan, startDate, endDate) => {
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
      return data;
    } else {
        console.log('Failed to fetch stock data');
    return [];
  }
};