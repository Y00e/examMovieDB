import React from 'react'
import SignInForm from '../components/SignInForm';
import logo from '../assets/logo.png';

function LoginPage() {
  return (
    <>
      <img src={ logo } alt="Logo" />
      <SignInForm/>
    </>
  )
}

export default LoginPage;
