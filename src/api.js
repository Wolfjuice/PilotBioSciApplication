// client/src/api.js
// Minimal fetch wrapper for API calls. Uses cookie credentials (httpOnly token cookie)

// In dev, set VITE_API_URL=http://localhost:4000
// In production (served by the Node server), you can omit it and use the same-origin /api routes.
const BASE = import.meta.env.VITE_API_URL || '/';

async function request(path, options = {}) {
  const url = BASE.endsWith('/') ? (BASE.slice(0, -1) + path) : (BASE + path);

  const res = await fetch(url, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : {};
  if (!res.ok) {
    const err = (data && data.error) || res.statusText;
    const error = new Error(err);
    error.status = res.status;
    error.body = data;
    throw error;
  }
  return data;
}
export const API_BASE_URL = BASE;
export default {
  get: (path) => request(path, { method: 'GET' }),
  post: (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: 'PUT', body: JSON.stringify(body) }),
  del: (path) => request(path, { method: 'DELETE' })
};
