import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ecomerce-upload-cloudinary.herokuapp.com/',
})

export default api
