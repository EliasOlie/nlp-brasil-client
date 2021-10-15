import axios from 'axios';
import "dotenv/config";


const API = axios.create({
    baseURL: process.env.LINK||'http://127.0.0.1:8000'

})

export default API