import axios from 'axios'

//Being imported into blog.js. 
//With this is can make instances of different endpoints.
//You can also put interpreters into the file.
const instance = axios.create({
     baseURL: 'https://jsonplaceholder.typicode.com'
})

export default instance 