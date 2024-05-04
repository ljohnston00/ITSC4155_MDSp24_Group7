import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col } from 'react-bootstrap';
import withAuth from '../component/RestrictedPage';

function Settings() {
/*
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const handleProfileUpdate = () => {
  };
*/

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Edit Profile</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea className="form-control" id="bio" rows="3" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="profilePicture">Profile Picture</label>
                  <input type="text" className="form-control" id="profilePicture" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Settings);