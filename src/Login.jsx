import React, { useState } from 'react';

/*
async function createAccount() {
  console.log('createAccount function called');

  const name = document.getElementById('logname').value;
  const username = document.getElementById('logusername').value;
  const email = document.getElementById('logemail').value;
  const password = document.getElementById('logpass').value;

  console.log('Form data:', { name, username, email, password });

  try {
      const response = await fetch('http://0.0.0.0:5000/user/create', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name,
              username,
              email,
              password
          })
      });

      const data = await response.json();
      console.log('Server response:', data);
  } catch (error) {
      console.error('Error:', error);
  }
}*/

function Index(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);


    const createAccount = async (event) => {
      event.preventDefault();
  
      console.log('Creating account...');

      try {
  
        const response = await fetch('http://localhost:5000/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWT_SECRET}`
          },
          body: JSON.stringify({
            firstName,
            lastName,
            username,
            email,
            password
          })
        });
      
      if (!response.ok) {
        throw new Error('There was a problem creating the account');
      }
  
      const data = await response.json();
      console.log('Server response:', data); 
      } catch (error){
        setError(error.message);
      }finally{
        setIsPending(false);
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
          <label for="reg-log"></label>
          <div className="card-3d-wrap mx-auto">
            <div className="card-3d-wrapper">
              <div className="card-front">
                <div className="center-wrap">
                  <div className="section text-center">
                    <h4 className="mb-4 pb-3">Log In</h4>
                    <div className="form-group">
                      <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" ></input>
                      <i className="input-icon uil uil-at"></i>
                    </div>
                    <div className="form-group mt-2">
                      <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" ></input>
                      <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <a href="#" className="btn mt-4" >submit</a>
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
            <input type="text" class="form-style" placeholder="Your Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
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