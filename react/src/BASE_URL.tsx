const PROTOCOL = String(process.env.VITE_APP_PROTOCOL);
const BASE_URI = String(process.env.VITE_APP_BASE_URI);
const BACKEND_PORT = String(process.env.VITE_APP_BACKEND_PORT);

let BASE_URL: string;

if (String(process.env.REACT_ENV) === 'development') {
  BASE_URL = `${PROTOCOL}://${BASE_URI}:${BACKEND_PORT}/api`;
} else {
  BASE_URL = `${PROTOCOL}://98.83.131.132:${BACKEND_PORT}/api`;
}

export { BASE_URL };
