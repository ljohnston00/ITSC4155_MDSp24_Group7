import Cookies from 'js-cookie';
import Paths from "../path.service";

const createAccount = async (firstName, lastName, username, email, password) => {
  try {
    const signUpResponse = await fetch(`${Paths.API_BASE}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password
      })
    });

    if (!signUpResponse.ok) {
      const error = new Error('Sign up failed');
      error.status = signUpResponse.status;
      throw error;
    }

    const signUpData = await signUpResponse.json();
    Cookies.set("Authorization", signUpData.access_token);
  } catch(err) {
    console.log(err);
    throw err;
  }
}

export default createAccount;
