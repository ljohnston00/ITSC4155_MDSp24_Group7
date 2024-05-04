import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import withAuth from '../component/RestrictedPage';

function Profile() {
  const user = {
    name: 'Name',
    email: 'email@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    profilePicture: 'https://example.com/profile-picture.jpg'
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card ">
            <img src={user.profilePicture} 
              alt="Profile" className="card-img-top rounded-circle mx-auto" 
              style={{width: '150px', height: '150px', border: '1px solid black'}}/>
            <div className="card-body text-center">
              <h5 className="card-title" style={{color: 'black'}}>{user.name}</h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Bio: {user.bio}</p>
              <div style={{height: '150px'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Profile);
