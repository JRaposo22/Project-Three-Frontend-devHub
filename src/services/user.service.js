import axios from "axios";

class UserService {
    constructor(){
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005"
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken');

            if(storedToken){
                config.headers = {Authorization: `Bearer ${storedToken.authToken}`}
            }
            return config;
        })
    }


    getUser = (id) => {
        return this.api.get(`/profile/${id}`)
    }

    editUser = (id, body) => {
        return this.api.put(`/profile/${id}`, body)
    }
}

const userService = new UserService();

export default userService;