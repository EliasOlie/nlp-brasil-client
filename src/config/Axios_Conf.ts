import axios from 'axios';

const api = axios.create({
    baseURL: `http://api:80`

})

export default api