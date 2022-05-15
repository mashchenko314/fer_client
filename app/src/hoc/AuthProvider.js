import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('')

    const signin = async (loginData, cb) => {
        let response = await fetch(`http://127.0.0.1:8000/api/auth/token/login`,
        {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(loginData)
        })
        let data = await response.json();
        if (response.status === 400) {
          console.log(data)
          cb()
        }
        if (response.status === 200) {
            setToken(data.auth_token)
            setUser(loginData.username)
            navigate('/dashboard', { replace: true });
        }   
    }

    const signout = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, token, signin, signout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}