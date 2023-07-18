import React, {useRef} from 'react';
import {auth} from '../firebase';
import './SignUpScreen.css';

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authuser) => {
      console.log(authuser);
    }).catch(error => {
      alert(error.message);
    });
  } 
  const signIn =(e) =>{
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authuser) => {
      console.log(authuser);
    }).catch(error => {
      alert(error.message);
    });
  }


  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email'/>
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <span className='signUp_gray'>New to Netflix?<span className='signUp_link' onClick={register}> Sign up now.</span></span>
        <span className='signUp_privacyLine'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href='https://policies.google.com/privacy'> Learn more.</a></span>

      </form>
    </div>
  )
}

export default SignUpScreen
