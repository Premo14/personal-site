const tld = process.env.VITE_APP_ENV === 'prod' ? ".com" : ".dev";
const BACKEND_URL = `http://api.premsanity${tld}`;

console.log("BACKEND_URL:", BACKEND_URL);
export { BACKEND_URL };
