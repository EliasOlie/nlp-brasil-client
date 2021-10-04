import axios from 'axios';

const api = axios.create({
    baseURL: `https://nlp-brasil-api.herokuapp.com/`

})

export default api