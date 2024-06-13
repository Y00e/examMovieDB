import React from 'react';
import UserType from '../models/userType';
import useSessionStore from '../stores/session-store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function LogoutForm() {
    const { logout } = useSessionStore();
    const navigate = useNavigate();

    
  const handleLogout = () => {
    axios.post('http://localhost:8080/api/auth/logout')
      .then(() => {
        logout();
        navigate('/');
      });
    
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutForm;
