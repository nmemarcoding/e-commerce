import axios from "axios";

const Axios = axios.create({
    baseURL: "https://e-commerce1400.herokuapp.com/api",
    timeout: 5000
})

export default Axios;