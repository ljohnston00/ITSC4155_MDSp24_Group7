import Cookies from 'js-cookie';

export const fetchMarketNews = async () => {
  try {
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

    if (!response.ok) {
      const error = new Error('Failed to fetch market news');
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
