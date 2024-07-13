import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Login from './components/Login';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import AssignmentDetails from './components/AssignmentDetails';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    {/* <PrivateRoute path="/teacher" element={<TeacherDashboard />} />
                    <PrivateRoute path="/student" element={<StudentDashboard />} />
                    <PrivateRoute path="/assignment/:id" element={<AssignmentDetails />} /> */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { token } = React.useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};

export default App;
