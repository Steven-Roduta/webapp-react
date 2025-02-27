import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000,
    headers: { "Access-Control-Origin": "*",}
    
});

export default instance;