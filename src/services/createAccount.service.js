import Cookies from 'js-cookie';

const createAccount = async (firstName, lastName, username, email, password) => {
  console.log('Creating account...');
  const signUpResponse = await fetch('http://localhost:5000/auth/signup', {
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

  if (signUpResponse.ok) {
    const signUpData = await signUpResponse.json();
    Cookies.set("Authorization", signUpData.access_token);
  } else {
    console.log('Sign up failed');
  }
}

export default createAccount;