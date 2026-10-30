// Tiny fetch-based client (replaces axios, which added ~35 KB to every page's JS).
// Keeps the axios shape the forms rely on: resolves { data, status }, and on non-2xx
// rejects with an Error carrying err.response = { data, status }.
const baseURL = import.meta.env.VITE_API_URL || "https://remax.errorr990551.workers.dev/api";

const request = async (method, url, body) => {
  const res = await fetch(`${baseURL}${url}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await res.text();
  let data = text;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    // non-JSON response body: keep it as text
  }

  if (!res.ok) {
    const err = new Error(`Request failed with status code ${res.status}`);
    err.response = { data, status: res.status };
    throw err;
  }
  return { data, status: res.status };
};

const api = {
  get: (url) => request("GET", url),
  post: (url, body) => request("POST", url, body),
};

export default api;
