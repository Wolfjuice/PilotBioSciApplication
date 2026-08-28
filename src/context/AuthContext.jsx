
// import React, { createContext, useState, useEffect } from 'react';
// import api from '../api';

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchMe() {
//     try {
//       setLoading(true);
//       const res = await api.get('/api/auth/me');
//       if (res && res.user) setUser(res.user);
//       else setUser(null);
//     } catch (err) {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchMe();
//   }, []);

//   async function login(username, password) {
//     const res = await api.post('/api/auth/login', { username, password });
//     if (res && res.user) setUser(res.user);

//     // Refresh user info but swallow any errors so login remains a success
//     // even if the immediate follow-up /me check fails transiently.
//     try {
//       await fetchMe();
//     } catch (err) {
//       // ignored intentionally
//     }

//     return res;
//   }

//   async function register(userOrUsername, passwordArg, emailArg) {
//     // support either register(username, password, email) or register({ username, password, email })
//     let username, password, email;
//     if (userOrUsername && typeof userOrUsername === 'object') {
//       ({ username, password, email } = userOrUsername);
//     } else {
//       username = userOrUsername;
//       password = passwordArg;
//       email = emailArg;
//     }

//     if (!username || !password) {
//       throw new Error('Missing username or password (client)');
//     }

//     const res = await api.post('/api/auth/register', { username, password, email });
//     if (res && res.user) {
//       setUser(res.user);
//     }
//     return res;
//   }

//   async function logout() {
//     await api.post('/api/auth/logout');
//     setUser(null);
//   }

//   return (
//     <AuthContext.Provider value={{ user, loading, login, register, logout, fetchMe }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null); // Full profile data

  async function fetchMe() {
    try {
      setLoading(true);
      const res = await api.get('/api/auth/me');
      if (res && res.user) setUser(res.user);
      else setUser(null);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  // NEW: Fetch full user profile
  async function fetchProfile() {
    try {
      if (!user) return;
      const res = await api.get('/api/users/profile');
      if (res && res.user) {
        setUserProfile(res.user);
      }
    } catch (err) {
      console.error('Failed to fetch profile:', err);
    }
  }

  useEffect(() => {
    fetchMe();
  }, []);

  // Fetch full profile when user is set
  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setUserProfile(null);
    }
  }, [user?.id]);

  async function login(username, password) {
    const res = await api.post('/api/auth/login', { username, password });
    if (res && res.user) setUser(res.user);

    try {
      await fetchMe();
    } catch (err) {
      // ignored intentionally
    }

    return res;
  }

  // UPDATED: Register accepts all new user fields
  async function register(userData) {
    // Support both object and positional arguments for backwards compatibility
    let registerData;
    if (typeof userData === 'object' && !Array.isArray(userData)) {
      registerData = userData;
    } else {
      // Old format: register(username, password, email)
      // For backwards compatibility, we'll require new fields
      throw new Error('Please provide user data as an object');
    }

    // Validate required fields
    const required = [
      'firstName', 'lastName', 'username', 'email', 'password',
      'piFirstName', 'piLastName', 'organization'
    ];
    for (const field of required) {
      if (!registerData[field]) {
        throw new Error(`${field} is required`);
      }
    }

    const res = await api.post('/api/auth/register', registerData);
    if (res && res.user) {
      setUser(res.user);
    }
    return res;
  }

  // NEW: Update user profile
  async function updateProfile(profileData) {
    const res = await api.put('/api/users/profile', profileData);
    if (res && res.user) {
      setUserProfile(res.user);
      // Also update the token data if name changed
      if (profileData.firstName || profileData.lastName) {
        setUser(prev => ({
          ...prev,
          firstName: profileData.firstName || prev.firstName,
          lastName: profileData.lastName || prev.lastName
        }));
      }
    }
    return res;
  }

  async function logout() {
    await api.post('/api/auth/logout');
    setUser(null);
    setUserProfile(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        login,
        register,
        logout,
        fetchMe,
        fetchProfile,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
