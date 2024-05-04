import Cookies from 'js-cookie';
import { ApiError } from "../error.service";
import Paths from "../path.service";

const signinHandler = async (email, password) => {
    try{
    const signInResponse = await fetch(`${Paths.API_BASE}/auth/signin`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "email": email,
        "password": password
        })
    });

    if(!signInResponse.ok){
        throw new Error('Invalid email or password');
    }
    const signInData = await signInResponse.json();
    Cookies.set("Authorization", signInData.access_token);
    localStorage.setItem('isLoggedIn', 'true');
    return true;
  } catch (err) {
    console.log(err);
        if(err.response.status === 401) {
            return ApiError.UNAUTHORIZED;
        }
        return null;
  }
};

export default signinHandler;