import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const { login, loginUser } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Teacher');

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(username, password, role);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 >Welcome!</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
            </select>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
