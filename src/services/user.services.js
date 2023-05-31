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

    editProfile(userId, userData) {
        return this.api.put(`/edit/${userId}`, userData);
    }

}


const userService = new UserService()

export default userService