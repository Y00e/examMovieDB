import React from 'react'
import '../components/SignInform'
import logo from '../assets/logo.png';
import '../styles/pageStylse/loginPage.css'
import SignInForm from '../components/SignInform';

type LoginPageProps = {
  setIsLoggedIn : (isLoggedIn: boolean) => void;
}

function LoginPage({setIsLoggedIn}: LoginPageProps) {

  
  return (
    <>
      <div className="login-page">
      <img src={ logo } alt="Logo" />
      <SignInForm setIsLoggedIn={setIsLoggedIn} />
      </div>
    </>
  )
}

export default LoginPage;
