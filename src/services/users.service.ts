import { API_URL } from "../constants";
import axios from 'axios';

interface LoginTypes {
    email: string;
    password: string;
}

const isAuthenticated = (): boolean => {
    const userId = localStorage.getItem('userId');

    if (userId) {
        return true;
    } else {
        return false;
    }
}

const loginUser = async ({email, password}: LoginTypes) => {
    try {
        const response = await axios.post(`${API_URL}/users/auth`, {
            email,
            password
        })

        if (response.status === 200) {
            localStorage.setItem('userId', response.data);
            return response;
        }

    } catch (error) {
        console.log("Błąd", error)
    }
}

export { isAuthenticated, loginUser }