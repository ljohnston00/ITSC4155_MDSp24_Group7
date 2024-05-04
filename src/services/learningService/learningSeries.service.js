import Cookies from 'js-cookie';
import Paths from '../path.service';
// import image1 from '../../assets/stockMarketNY.jpg';
// import image2 from '../../assets/dayTrading.jpg';
// import image3 from '../../assets/commodities.jpg';
// import image4 from '../../assets/stockPriceGraph.jpg';
// import image5 from '../../assets/pennyStockGraphs.jpg';
// import image6 from '../../assets/longTermInvestments.jpg';
// import image7 from '../../assets/investingImage.jpg';
// import image8 from '../../assets/forexImage.jpg';
// import image9 from '../../assets/whatShouldIBuyImage.jpg';
// 
/*
const mockData = [
  {
    id: '1',
    title: 'What is a Market?',
    author: 'No one',
    thumbnail: image1, 
    parts: [
      { title: '1.0 - What is a Market', content: 'There is where the content for what a market will eventually be. This gives an idea what it will look like eventually.' },
      { title: '2.0 - What is a Market', content: 'Content for part 2...' },
      { title: '3.0 - What is a Market', content: 'Content for part 3...' },
    ],
  },
  {
    id: '2',
    title: 'What is Day Trading?',
    author: 'Some one',
    thumbnail: image2,
    parts: [
      { title: 'Part 1', content: 'Content for part 1...' },
      { title: 'Part 2', content: 'Content for part 2...' },
    ],
  },
  {
    id: '3',
    title: 'What are Commodities?',
    author: 'Another one',
    thumbnail: image3,
    parts: [
      { title: 'Part 1', content: 'Content for part 1...' },
      { title: 'Part 2', content: 'Content for part 2...' },
    ],
  },
  {
    id: '4',
    title: 'What is Stock Price Graph?',
    author: 'Again author',
    thumbnail: image4,
    parts: [
      { title: 'Part 1', content: 'Content for part 1...' },
      { title: 'Part 2', content: 'Content for part 2...' },
    ],
  },
  {
    id: '5',
    title: 'What are Penny Stocks?',
    author: 'Again another author',
    thumbnail: image5,
    parts: [
      { title: 'Part 1', content: 'Content for part 1...' },
      { title: 'Part 2', content: 'Content for part 2...' },
    ],
  },
  {
    id: '6',
    title: 'What is Long Term Investing?',
    author: 'Again another another author',
    thumbnail: image6,
    parts: [
      { title: 'Part 1', content: 'Content for part 1...' },
      { title: 'Part 2', content: 'Content for part 2...' },
    ],
  },
  {
    id: '7',
    title: 'What is Investing',
    author: 'Yet again another author',
    thumbnail: image7,
    parts: [
      { title: 'Part 1', content: 'Content for part 1...' },
      { title: 'Part 2', content: 'Content for part 2...' },
    ],
  },
  {
    id: '8',
    title: 'What is Forex?',
    author: 'Another Author?',
    thumbnail: image8,
    parts: [
      { title: 'Part 1', content: 'Content for part 1...' },
      { title: 'Part 2', content: 'Content for part 2...' },
    ],
  },
  {
    id: '9',
    title: 'What Should I Invest In?',
    author: 'Again author yes',
    thumbnail: image9,
    parts: [
      { title: 'Part 1', content: 'Content for part 1...' },
      { title: 'Part 2', content: 'Content for part 2...' },
    ],
  },
];

export const fetchLearningSeriesData = async (seriesId) => {
  const data = mockData.find(series => series.id === seriesId);
  return data;
};

export const fetchAllLearningSeriesData = async () => {
    return mockData;
  };*/


  export const fetchLearningSeriesData = async (seriesId) => {
    const token = Cookies.get('Authorization');
    
    // Fetch the series data
    const seriesResponse = await fetch(`${Paths.API_BASE}/contentmanagement/series`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ learningSeriesId: seriesId })
    });
  
    if (!seriesResponse.ok) {
      console.log('Failed to fetch learning series data');
      return null;
    }
  
    const seriesData = await seriesResponse.json();
  
    // Fetch the parts for the series
    const partsResponse = await fetch(`${Paths.API_BASE}/contentmanagement/pages/byseries`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ learningSeriesId: seriesId })
    });
  
    if (!partsResponse.ok) {
      console.log('Failed to fetch parts for the series');
      return null;
    }
  
    const partsData = await partsResponse.json();
  
    // Combine the series data and the parts data into one object
    const data = {
      ...seriesData,
      parts: partsData
    };
    return data;
  };
  
  
  export const fetchAllLearningSeriesData = async () => {
    const token = Cookies.get('Authorization');
    const response = await fetch(`${Paths.API_BASE}/contentmanagement/home`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log('Failed to fetch all learning series data');
      return null;
    }
  };
