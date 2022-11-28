import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../backend/firebase'
import './style.css'
import { useNavigate } from 'react-router-dom';

function Header(e) {
  const navigate = useNavigate();
  const navigateToHome = ()=>{
    navigate('/');
  }
  const onclick = () => {
    console.log('object')
    const provider = new GoogleAuthProvider(app);
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div className='header'>
      <div className='flex flex-row justify-center items-center '>
        <div className="btn mr-2">
          <button className='sign-in' onClick={navigateToHome}>Home</button>
        </div>
        <div className="logo">
          <span>Yout Title Here</span>
        </div>
      </div>
      <div className="btn">
        <button className='sign-in' onClick={onclick}>Sign In</button>
      </div>
    </div>
  )
}

export default Header
