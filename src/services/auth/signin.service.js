import Paths from "../path.service";
import Cookies from "js-cookie";

const signinHandler = async (email, password) => {
    try {
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
  
      if (!signInResponse.ok) {
        const error = new Error('Invalid email or password');
        error.status = signInResponse.status;
        throw error;
      }
  
      const signInData = await signInResponse.json();
      Cookies.set("Authorization", signInData.access_token);
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  

export default signinHandler;
