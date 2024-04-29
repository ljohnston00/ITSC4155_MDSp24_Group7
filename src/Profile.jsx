import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    profilePicture: 'https://example.com/profile-picture.jpg'
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <img src={user.profilePicture} alt="Profile" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Bio: {user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
