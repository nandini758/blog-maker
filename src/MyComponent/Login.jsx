import React from 'react'
import { Auth } from '../Firebase'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
  const navigate=useNavigate();
  const googleClick=async()=>{
    const provider=new GoogleAuthProvider();
    const result= await signInWithPopup(Auth, provider);
    // console.log(result);

    navigate('Blogs');
  }
  return (
    <>
    <div className='container'>
    
    </div>
    <div class="login-container" onClick={googleClick}>
    <button class="google-login-button">
      <img src='https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png'alt="Google Icon" class="google-icon"/>
      Login with Google
    </button>
  </div>
    </>
  )
}

export default Login

