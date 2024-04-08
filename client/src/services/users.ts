import axios from "axios";
import { config } from "../config";

const baseUrl = `${config.API_URL  }/user`;

export const getAllUsers = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};