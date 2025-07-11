import axios from "axios";

const bBASE_URL=import.meta.env.MODE==='development' ? "http://localhost:5001" :"note"
const api = axios.create({
    baseURL: "http://localhost:5001",
});


export default api;