import React from 'react'
import SignInForm from '../components/SignInForm';
import logo from '../assets/logo.png';
import useSessionStore from '../stores/session-store';
import HomePage from './HomePage';

type loginPageProps = {
  apiKey : string; 

}

function LoginPage({apiKey}: loginPageProps ) {
  const { isLoggedIn } = useSessionStore();

  
  return (
    <>
      <img src={ logo } alt="Logo" />
      {isLoggedIn ? (
        <HomePage apiKey={ apiKey }/>
      ) : (
        <SignInForm />
      )}
    </>
  )
}

export default LoginPage;
