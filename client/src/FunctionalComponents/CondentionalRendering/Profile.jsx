import React, { useEffect, useState } from 'react';
import Login from './Login';
import Signup from './Signup';

function Profile() {
  useEffect(()=>{
       console.log("Profile page")
  },[])
  let [status,setstatus] = useState("new");
  let [loginIn,setlogin] = useState(false);
  let [exist,setExist] = useState(true);
  let changeLogin = () => {
    setlogin(true);
  };
  return (
    <div>
      <div>{/*<h1>Welcome User</h1>*/}</div>
      {exist && <h1>Hai</h1>}
      {loginIn && <h1>Hello</h1>}
      {/* { || } */}
      {loginIn ?  (
       <div>
         <h1>Profile</h1>
       </div> 
      ) : exist ? (
        <Login value={changeLogin} /> 
      )  : (
      <Signup />
    )}

      {loginIn ? (
        <button onClick={() => setlogin(false)}>Logout</button> 
      ) : exist ? (
        <div>
            <p>
              if you are a new user? click
            </p>
            <button onMouseEnter={() => setExist(false)}>signup</button>
          </div> 
          ): (
          <div>
            <p>
              if you are a existing user? click
            </p>
            <button onClick={() => setExist(true)}>Login</button>
          </div>
      )}
      {/* <div>
        <h1>Login Page</h1>
    </div>
    <div>
        <h1>Signup</h1>
    </div> */}
    </div>
  )
}

export default Profile

//>signup page
//registration details
//signup button
//If existing user then click on login

//>login page
//login details
//login button
//if you are a new user then click on signup

//>profile
//profile