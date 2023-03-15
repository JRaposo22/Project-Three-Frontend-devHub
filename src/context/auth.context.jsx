import { useState, useEffect, createContext } from 'react';
import { auth } from "../firebase";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthWrapper(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // functions and methods

  const authenticateUser = async () => {
    // check for a token
    const storedToken = localStorage.getItem('authToken');
   

    // if token exists
    if (storedToken) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/verify`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        // here we know that the response is okay so we can update the states
        setLoggedIn(true);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
         setLoggedIn(false);
        setUser(null);
        setLoading(false);
      }
    } else {
      setLoggedIn(false);
      setUser(null);
      setLoading(false);
    }
  };


  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    auth.signOut();
    navigate('/');
  }



  useEffect(() => {
    authenticateUser();
  }, [])

  return (
    <AuthContext.Provider value={{ loggedIn, user, loading, authenticateUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
