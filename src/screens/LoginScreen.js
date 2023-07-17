import React, { useState } from 'react'
import './LoginScreen.css'
import logo from "../image/net.png";
import SignUpScreen from './SignUpScreen'
// import cover_photo from '../image/netflixCover.jpg';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);


  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
            <img 
            className='loginScreen_logo'
            src={logo} 
            alt=''/>
            <button className='loginScreen_button' onClick={() => setSignIn(true)}>
                Sign In
            </button>
            <div className='loginScreen_gradient'></div>
        </div>

        <div className='loginScreen_body'>
            { signIn ? (
                <SignUpScreen/>
            ) : (
            <>
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>

            <div className='loginScreen_input'>
                <form>
                    <input type='email'
                    placeholder='Email address'
                    />
                    <button onClick={() => setSignIn(true)} className='login_getstarted'>Get Started {">"}</button>
                </form>
            </div>
            </>
            )}
        </div>
    </div>
  )
}

export default LoginScreen
