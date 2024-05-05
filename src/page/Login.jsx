import React, { useState } from 'react';
import signinHandler from '../services/auth/signin.service';
import createAccount from '../services/auth/createAccount.service';
import { useAuth } from '../providers/authprovider';
import { useNavigate } from 'react-router-dom';
import Paths from '../services/path.service';




function Index(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const { setAuth } = useAuth();
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const success = await signinHandler(email, password);
      if (success) {
        setAuth(true); 
        setLoginError(''); 
        nav(Paths.DASHBOARD);
        window.scrollTo(0, 0);
      } else {
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      setLoginError('An error occurred during login');
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault(); 
    try {
      await createAccount(firstName, lastName, username, email, password);
      await handleLogin();
      nav(Paths.DASHBOARD);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Failed to create account:", error);
      setLoginError(error.message || 'Failed to sign up');
    }
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
                      <a onClick={handleLogin} className="btn mt-4" >submit</a>
                      {loginError && <p>{loginError}</p>}
                      <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Sign Up</h4>
        <form onSubmit={handleSignUp}>
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