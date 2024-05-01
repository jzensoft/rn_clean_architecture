import axios, { AxiosInstance } from "axios";
import { injectable } from "inversify";

@injectable()
export class AxiosService {
    getInstance(): AxiosInstance {
        return axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com'
        })
    }
}