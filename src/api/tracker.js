import axios from 'axios';
import { AsyncStorage } from 'react-native'

const instance = axios.create({
    baseURL: 'https://e49850f426e6.ngrok.io/',
})

// if token available token will add automaticlly to out apis.
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (err) => Promise.reject(err)
)

export default instance