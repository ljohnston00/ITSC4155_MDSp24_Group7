import Cookies from 'js-cookie';
import React, { useState } from 'react';


const signinHandler = async (email, password) => {
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

   
  };

  export default signinHandler;