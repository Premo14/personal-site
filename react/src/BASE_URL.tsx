const PROTOCOL = String(process.env.VITE_APP_PROTOCOL);
const BASE_URI = String(process.env.VITE_APP_BASE_URI);
const BACKEND_PORT = String(process.env.VITE_APP_BACKEND_PORT);

const BASE_URL = `${PROTOCOL}://${BASE_URI}:${BACKEND_PORT}/api`;

console.log("BASE_URL:", BASE_URL);

export { BASE_URL };
