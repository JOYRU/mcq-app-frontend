// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { jwtDecode } from 'jwt-decode';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
        
//         if (token) {
//             const decodedUser = jwtDecode(token);
//             setUser(decodedUser);
//         }
//     }, []);

//     const login = (token) => {
//         localStorage.setItem('token', token);
//         setUser(jwtDecode(token));
//     };

//     const logout = () => {
//         localStorage.removeItem('token');
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

// import React, { createContext, useState, useEffect, useContext } from 'react';
// import {jwtDecode} from 'jwt-decode';

// export  const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true); // Add a loading state

//     useEffect(() => {
//         const token = localStorage.getItem('token');
        
//         if (token) {
//             try {
//                 const decodedUser = jwtDecode(token);
//                 setUser(decodedUser);
//             } catch (err) {
//                 console.error('Invalid token:', err); // Handle token decode error
//                 setUser(null);
//             }
//         } else {
//             setUser(null); // No token, so no user
//         }

//         setLoading(false); // Set loading to false after token check
//     }, []); // This runs once when the component mounts

//     const login = (token) => {
//         localStorage.setItem('token', token);
//         setUser(jwtDecode(token));
//     };

//     const logout = () => {
//         localStorage.removeItem('token');
//         setUser(null);
//     };

//     if (loading) {
//         return <div>Loading...</div>; // or any loading indicator
//     }

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useState, useEffect, useContext } from 'react';
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // This effect runs only once after the first render
        const token = localStorage.getItem('token');
        
        if (token) {
            try {
                const decodedUser = jwtDecode(token);  // Decode JWT token
                setUser(decodedUser); // Set the decoded user
            } catch (err) {
                console.error('Error decoding token', err);
                setUser(null); // In case of invalid token, set user to null
            }
        } else {
            setUser(null);  // No token, set user to null
        }

        // Once the effect finishes, set loading to false
        setLoading(false);
    }, []);  // Only run on component mount (equivalent to `componentDidMount`)

    // Login function
    const login = (token) => {
        localStorage.setItem('token', token);  // Save token in localStorage
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);  // Update user state immediately after login
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);  // Clear user state on logout
    };

    // Return the context provider with user and loading state
    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}  {/* Render children only after loading is false */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);


