import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    };

    getAllProfiles() {
        return this.api.get(`/getAllUsers`);
    }

    getProfile(userId) {
        return this.api.get(`/getOneUser/${userId}`);
    }

    getCandidateUsers() {
        return this.api.get(`/getCandidateUsers`);
    }

    addSavedJob(userId, jobId) {
        return this.api.put(`/addSavedJob/${jobId}`, { userId })
    }

    deleteSavedJob(userId, jobId) {
        return this.api.put(`/deleteSavedJob/${jobId}`, { userId });
    }

    editProfile(userId, userData) {
        return this.api.put(`/edit/${userId}`, userData);
    }

    deleteProfile(userId) {
        return this.api.delete(`/delete/${userId}`);
    }

}


const userService = new UserService()

export default userService