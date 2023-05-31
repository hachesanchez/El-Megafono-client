import axios from 'axios'

class ExperiencesService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/experience`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    };

    getAllExperiences() {
        return this.api.get('/getAllExperiences')
    }

    getOneExperience(experienceId) {
        return this.api.get(`/getOneExperience/${experienceId}`)
    }

    saveExperience(experienceData) {
        return this.api.post(`/saveExperience`, experienceData)
    }

    editExperience(experienceId, experienceData) {
        return this.api.put(`/edit/${experienceId}`, experienceData)
    }

    deleteExperience(experienceId) {
        return this.api.delete(`/delete/${experienceId}`);
    }
}

const experiencesService = new ExperiencesService
export default experiencesService