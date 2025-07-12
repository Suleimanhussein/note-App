import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001"
    : import.meta.env.VITE_API_URL; // Read from .env in Vercel

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;

// import axios from "axios";

// const bBASE_URL=import.meta.env.MODE==='development' ? "http://localhost:5001" :"note"
// const api = axios.create({
//     baseURL: "http://localhost:5001",
// });

// export default api;
