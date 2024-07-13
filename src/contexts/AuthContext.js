import React, { createContext, useState } from 'react';

import { login } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const loginUser = (username, password, role) => {
        // API call to authenticate user
        // On success, setUser with user data
        login(username, password, role).then((response) => {
            setToken(response.data.token);
        });
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, loginUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
