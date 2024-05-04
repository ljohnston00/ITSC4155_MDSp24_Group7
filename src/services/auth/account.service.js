import Paths from '../path.service';
import { ApiError } from '../error.service';

const loadUser = async (cookie) => {
    try {
        const response = await fetch(`${Paths.API_BASE}/user`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${cookie}` },
        });
        
        if(response.status === 401){
            return ApiError.UNAUTHORIZED;
        }

        if (!response.ok) {
            if (response.status === 401) {
                return ApiError.UNAUTHORIZED;
            }
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
        return null;
    }
}

export default loadUser;
