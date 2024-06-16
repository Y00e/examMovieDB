import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function LogoutForm() {
    const navigate = useNavigate();

    
  const handleLogout = () => {
    axios.post('http://localhost:8080/api/auth/logout')
      .then(() => {
        sessionStorage.removeItem('user');
        navigate('/');
      });
    
  };

  return (
    <div className="logout-btn">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutForm;
