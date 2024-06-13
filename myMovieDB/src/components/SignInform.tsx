import React, {FormEvent, useState} from 'react'
import useSessionStore from '../stores/session-store';
import useUserStore from '../stores/user-store';
import UserType from '../models/userType';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const { login, isLoggedIn, logout } = useSessionStore();
  const { addUser } = useUserStore();
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
      addUser(newUser);
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
      console.log('Login user:', response.data);
      login(user);
      navigate('/home');
    });
    
  };
  

  
  
  return (
    
    <>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
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
      <h3>Signup</h3>
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