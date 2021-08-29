
import axios from 'axios';

export function createPortfolio(data) {
    console.log(data);      
    return axios.post('/api/v1/portfolios', data);
}