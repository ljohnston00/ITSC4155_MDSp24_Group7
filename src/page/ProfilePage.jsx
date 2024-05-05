import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import withAuth from '../component/RestrictedPage';

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await fetch('/profile/showall');
      if (!response.ok) {
        throw new Error('Failed to fetch profiles');
      }
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            <p>Name: {profile.name}</p>
            {/* Display other profile fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
  /*
  const [profiles, setProfile] = useState([]);
  const [formData, setFormData] = useState({
    name: ''
  });

  useEffect(() => {
    fetchProfiles();
  })

  const fetchProfiles = async () => {
    try {
      const response = await fetch('/profile/showall');
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profiles:', error)
    }
  };
  */
  /*
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/profile/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log('Profile created:', response.data);
      fetchProfiles();
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };
  */
}

export default withAuth(Profile);
//export default Profile;
