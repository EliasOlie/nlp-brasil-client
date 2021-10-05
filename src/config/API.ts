import axios from 'axios';

const API = axios.create({
    baseURL: `https://nlp-brasil-api.herokuapp.com/`

})

export default API