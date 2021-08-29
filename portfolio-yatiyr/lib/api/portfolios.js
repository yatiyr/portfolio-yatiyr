import axios from 'axios';


class PorfolioApi {

    constructor() {
        this.apiUrl = process.env.PORTFOLIO_API_URL + '/portfolios';
    }

    getAll() {
        return axios.get(this.apiUrl);
    }

    getById(id) {
        return axios.get(`${this.apiUrl}/${id}`);
    }
};


export default PorfolioApi;