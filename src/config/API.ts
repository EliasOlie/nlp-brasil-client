import axios from 'axios';
import "dotenv/config";


const API = axios.create({
    baseURL: 'https://nlp-brasil-api.herokuapp.com/'

})

export default API