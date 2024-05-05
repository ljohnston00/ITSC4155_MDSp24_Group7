import Cookies from 'js-cookie';
import Paths from '../path.service';

export const verifySubscription = async (nav) => {
  try {
    const token = Cookies.get('Authorization');
    const response = await fetch(`${Paths.API_BASE}/payment/verify-subscription`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if(response.status === 401 || response.status === 403){
      nav(Paths.LOGIN);
      return false;
    } 

    const data = await response.json();
    return data.message === 'Active subscription confirmed';
  } catch(err) {
    console.log(err);
    throw err;
  }
};
