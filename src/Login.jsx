import React, { useState } from 'react';
import Cookies from 'js-cookie';


function Index(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);


    const createAccount = async () => {
      console.log('Creating account...');
  // First, sign up to obtain the authAccountId
    const signUpResponse = await fetch('localhost:5000/auth/signup', {
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
  }
  
  const signinHandler = async () => {
    try {
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
      Cookies.set("Authorization", (await signInResponse.json()).access_token);
    } catch (err) {
      console.log(err);
    }

    setEmail("");
    setPassword("");
  };

  return(
  <div className="section">
    <div className="container">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
            <label htmlFor="reg-log"></label>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Log In</h4>
                      <div className="form-group">
                        <input type="email" name="logemail" value={email} className="form-style" placeholder="Your Email" id="logemail" onChange={e => setEmail(e.target.value)} ></input>
                        <i className="input-icon uil uil-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input type="password" name="logpass" password={password} className="form-style" placeholder="Your Password" id="logpass" onChange={e => setPassword(e.target.value)}></input>
                        <i className="input-icon uil uil-lock-alt"></i>
                      </div>
                      <a onClick={signinHandler} className="btn mt-4" >submit</a>
                      <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Sign Up</h4>
        <form onSubmit={createAccount}>
        {error && <div>{error}</div>}
          <div className="form-group">
              <input type="text" className="form-style" placeholder="Your First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
              <i className="input-icon uil uil-user"></i>
          </div>
          <div className="form-group mt-2">
              <input type="text" className="form-style" placeholder="Your Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
              <i className="input-icon uil uil-user"></i>
          </div>
          <div className="form-group mt-2">
              <input type="text" className="form-style" placeholder="Your Username" value={username} onChange={e => setUsername(e.target.value)} />
              <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
              <input type="email" className="form-style" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
              <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
              <input type="password" className="form-style" placeholder="Your Password" value={password} onChange={e => setPassword(e.target.value)} />
              <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <button className="btn mt-4">submit</button>
          </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Index;