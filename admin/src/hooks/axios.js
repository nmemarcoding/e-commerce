import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:505/api",
    timeout: 5000
})

export default Axios;