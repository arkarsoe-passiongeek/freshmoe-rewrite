import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api`
})


export { http }