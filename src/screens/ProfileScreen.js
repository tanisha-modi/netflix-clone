import React from 'react'
import './ProfileScreen.css'
import { useSelector } from "react-redux";
import Nav from "../Nav";
import { selectUser } from "../features/userSlice";
import avatar from '../image/netflix-avatar.jpg';
import { auth } from "../firebase";

function ProfileScreen() {
  const user  = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
          <h1>Edit Profile</h1>
          <div className='profileScreen_info'>
            <img src={avatar} alt=''/>
            <div className='profileScreen_details'>
              <h2>{user.email}</h2>
              <div className='profileScreen_plans'>
                <h3>Plans (Current Plan: premium)</h3>
                <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen
