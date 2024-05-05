import Cookies from 'js-cookie';
import Paths from '../path.service';

  export const fetchLearningSeriesData = async (seriesId) => {
    try {
    const token = Cookies.get('Authorization');
    
    const seriesResponse = await fetch(`${Paths.API_BASE}/contentmanagement/series`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ learningSeriesId: seriesId })
    });
  
    if (!seriesResponse.ok) {
      const error = new Error('Failed to fetch learning series data');
      error.status = seriesReponse.status;
      throw error;
    }
  
    const seriesData = await seriesResponse.json();

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
  
    const data = {
      ...seriesData,
      parts: partsData
    };
    return data;
  } catch(err){
    throw err;
  }
  };
  
  
  export const fetchAllLearningSeriesData = async () => {
    try {
      const token = Cookies.get('Authorization');
      const response = await fetch(`${Paths.API_BASE}/contentmanagement/home`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        const error = new Error('Failed to fetch all learning series data');
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
