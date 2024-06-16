import React, {FormEvent, useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type SignInFormPorps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

function SignInForm({setIsLoggedIn}: SignInFormPorps) {
  
  const navigate = useNavigate();
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');


  

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {username: signupUsername, password: signupPassword };
    console.log('Adding newUser:', newUser);
    axios.post(`http://localhost:8080/api/auth/register`, newUser)
      .then(response => {
      console.log(response.data);
      setSignupUsername('');
      setSignupPassword('');
      
    }).catch((error) => {
      console.error('Registration error:', error);
     
    });

  };


  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {username: loginUsername, password: loginPassword};
    axios.post(`http://localhost:8080/api/auth/login`, user)
      .then(response => {
        console.log('Login response:', response.data);
        sessionStorage.setItem('user', JSON.stringify(response.data));
        setIsLoggedIn(true);
        navigate('/home');
      })
      .catch(error => {
        console.error('Login error:', error);
      });
  };


  
  return (
    
    <>
      <form onSubmit={handleLogin}>
        <h3 className="login">Login</h3>
      <input 
        type="text" 
        name="username" 
        value={loginUsername} 
        onChange={(e) => setLoginUsername(e.target.value)}
        placeholder='username'
       
      />
      <input 
        type="text" 
        name="password" 
        value={loginPassword} 
        onChange={(e) => setLoginPassword(e.target.value)}
        placeholder='password'
        
      />
      <button type="submit">Login</button>
      </form>

      <form onSubmit={handleSignup}>
      <h3 className="signup">Signup</h3>
      <input 
        type="text" 
        name="username" 
        value={signupUsername}
        onChange={(e) => setSignupUsername(e.target.value)}
        placeholder='username' 
         
      />
      <input 
        type="text" 
        name="password" 
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
        placeholder='password' 
         
      />
      <button type="submit">Signup</button>
    </form>
    </>
  )
}

export default SignInForm;