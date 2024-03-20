import Cookies from 'js-cookie';

const signinHandler = async (email, password) => {
    try{
    const signInResponse = await fetch('http://localhost:5000/auth/signin', {
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
    return false;
  }
};

export default signinHandler;