import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// Chave da API: 065858db3c7e841780efab798be05357


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;