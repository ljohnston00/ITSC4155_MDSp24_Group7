import Paths from '../path.service';
import { ApiError } from '../error.service';

const loadUser = async (cookie) => {
    try {
      const response = await fetch(`${Paths.API_BASE}/user`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${cookie}` },
      });
  
      if (!response.ok) {
        const error = new Error('Network response was not ok');
        error.status = response.status;
        throw error;
      }
  
      const data = await response.json();
      return data;
    } catch(err) {
      console.log(err);
      throw err;
    }
  }

export default loadUser;
  
