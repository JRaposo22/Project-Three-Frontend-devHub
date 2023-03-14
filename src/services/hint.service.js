import axios from 'axios';

class HintService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5005'
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
              config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
          });
    }

    // get all hints
    getAllHints = () => {
        return this.api.get('/api/hints')
    };

    // create hint
    createHint = (body) => {
        return this.api.post('/api/hints', body)
    };

    // hint details
    hintDetails = (id) => {
        return this.api.get(`/api/hints/${id}`)
    };

    hintApprove = (id) => {
    return this.api.put(`/api/hint/${id}/approve`);
  };

}

const hintService = new HintService();

export default hintService;