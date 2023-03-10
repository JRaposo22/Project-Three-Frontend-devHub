import axios from "axios";

class QuizService {
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

    getRandomQuiz = () =>{
        return this.api.get('/api/quiz/general');
    };

    getSpecificQuiz = (type) => {
        return this.api.get(`/api/quiz/${type}`)
    };
}

const quizService = new QuizService();

export default quizService;