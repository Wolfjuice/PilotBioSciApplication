// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchMe();
  }, []);

  async function login(username, password) {
    const res = await api.post('/api/auth/login', { username, password });
    if (res && res.user) setUser(res.user);

    // Refresh user info but swallow any errors so login remains a success
    // even if the immediate follow-up /me check fails transiently.
    try {
      await fetchMe();
    } catch (err) {
      // ignored intentionally
    }

    return res;
  }

  async function register(userOrUsername, passwordArg, emailArg) {
    // support either register(username, password, email) or register({ username, password, email })
    let username, password, email;
    if (userOrUsername && typeof userOrUsername === 'object') {
      ({ username, password, email } = userOrUsername);
    } else {
      username = userOrUsername;
      password = passwordArg;
      email = emailArg;
    }

    if (!username || !password) {
      throw new Error('Missing username or password (client)');
    }

    const res = await api.post('/api/auth/register', { username, password, email });
    if (res && res.user) {
      setUser(res.user);
    }
    return res;
  }

  async function logout() {
    await api.post('/api/auth/logout');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, fetchMe }}>
      {children}
    </AuthContext.Provider>
  );
}
