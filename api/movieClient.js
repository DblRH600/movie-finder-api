import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const OMDB_BASE_URL = 'http://www.omdbapi.com/'
const API_KEY = process.env.OMDB_API_KEY
// console.log("API KEY: ", API_KEY)

export const movieClient = axios.create({
  baseURL: OMDB_BASE_URL,
  params: {
    apikey: API_KEY
  }
})

// Interceptor
movieClient.interceptors.request.use(
  config => {
    console.log(config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
