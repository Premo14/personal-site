const PROTOCOL = String(process.env.VITE_APP_PROTOCOL);
const BASE_URI = String(process.env.VITE_APP_BASE_URI);

const BASE_URL = `${PROTOCOL}://${BASE_URI}`;

console.log("BASE_URL:", BASE_URL);

export { BASE_URL };
