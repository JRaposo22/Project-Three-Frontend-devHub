import axios from 'axios';

class JobService {
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

  // get all Jobs

  getAllJobs = () => {
    return this.api.get('/api/jobs');
  };

  // create a Job

  createJob = (body) => {
    return this.api.post('/api/jobs', body);
  };

  // job details

  jobDetails = (id) => {
    return this.api.get(`/api/jobs/${id}`);
  };
}

const jobService = new JobService();

export default jobService;