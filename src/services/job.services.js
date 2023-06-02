import axios from 'axios'

class JobService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/jobs`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    };

    getAllJobs() {
        return this.api.get('/getAllJobs')
    }

    getOneJob(jobId) {
        return this.api.get(`/getOneJob/${jobId}`)
    }

    saveJob(jobData) {
        return this.api.post(`/saveJob`, jobData)
    }

    editJob(jobId, jobData) {
        return this.api.put(`/edit/${jobId}`, jobData)
    }

    deleteJob(jobId) {
        return this.api.delete(`/delete/${jobId}`);
    }
}

const jobService = new JobService
export default jobService