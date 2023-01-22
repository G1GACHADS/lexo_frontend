import { BACKEND_URL } from '@env'
import axios from 'axios'

export default axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Accept: 'application/json',
  },
})
