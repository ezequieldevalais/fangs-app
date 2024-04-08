import axiosClient from "./axiosClient";
import { config } from "../config";

const baseUrl = `/user`;

export const getAllUsers = () => {
    const request = axiosClient.get(baseUrl);
    return request.then((response) => response.data);
};