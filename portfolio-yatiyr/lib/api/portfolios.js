import axios from 'axios';
import BaseApi from '@/lib/api/BaseApi';

class PorfolioApi extends BaseApi {

    constructor(accessToken) {
        super(accessToken, '/portfolios');
    }
    
    delete(id) {
        return axios.delete(`${this.apiUrl}/${id}`, this.config);        
    }      
};


export default PorfolioApi;