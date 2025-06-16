// config.js
const dev = {
  API_URL: "http://127.0.0.1:8000",
};

const prod = {
  API_URL: "https://lightsalmon-otter-774319.hostingersite.com",
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
