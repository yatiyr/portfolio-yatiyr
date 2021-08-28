import axios from 'axios';


class PorfolioApi {
    getAll() {
        return axios.get('http://localhost:3001/api/v1/portfolios');
    }
};


export default PorfolioApi;