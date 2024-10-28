let tld: string

if (process.env.VITE_APP_ENV == 'prod') {
  tld = ".com"
} else {
  tld = ".dev"
}

const BACKEND_URL = "https://api.premsanity" + tld

console.log("BACKEND_URL:", BACKEND_URL);

export { BACKEND_URL };
