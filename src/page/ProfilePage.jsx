import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import withAuth from '../component/RestrictedPage';
import loadUser from '../services/auth/account.service'; 

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const userData = await loadUser();
  //       setUser(userData);
  //     } catch (error) {
  //       console.error('Error fetching user:', error);
  //       setError(error.message);
  //     }
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
      }
    }

    fetchUserData();
  }, []);


  // useEffect(() => {
  //   fetchProfiles();
  // }, []);

  // const fetchProfiles = async () => {
  //   try {
  //     const response = await fetch('/profile/showall');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch profiles');
  //     }
  //     const data = await response.json();
  //     setProfiles(data);
  //   } catch (error) {
  //     console.error('Error fetching profiles:', error);
  //     setError(error.message);
  //   }
  // };

  return (
    <div className='profile-wrapper'>
      <h1>Profile Page</h1>
      {error && (
        <div className='prof-error'>
          <p>Error: {error}</p>
        </div>
      )}
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            <p>Name: {profile.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withAuth(Profile);
//export default Profile;
