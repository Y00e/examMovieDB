import React from 'react'
import SignInForm from '../components/SignInForm';
import logo from '../assets/logo.png';
import '../styles/pageStylse/loginPage.css'

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
