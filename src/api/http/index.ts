import axios from 'axios'

const url = import.meta.env.VITE_BASE_URL

const config = {
   baseURL: url,
   withCredentials: true,
}

export const instance = axios.create({
   ...config,
})
