import Cookies from 'js-cookie';

export const fetchMarketNews = async () => {
  const token = Cookies.get('Authorization');
  const response = await fetch("https://moneymarket.up.railway.app/news/market-news", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
        language: 'en', 
      country: 'us', 
      limit: 10, 
      publishedAfterDate: '2024-03-01', 
      tickers: ['AAPL', 'GOOG'] 
    })
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log('Failed to fetch market news');
    return [];
  }
};