import { config } from "../config";
import axiosClient from "./axiosClient";

const authUrl = `/auth`;
const userUrl = `/user`;

/*export const signIn = async (username: string, password: string) => {
    const response = await axios.post(`${baseUrl}/login`, {username, password});
    return response.request?.status;

};*/

export enum Role {
    ADMIN = 'ADMIN',
    PROFESSIONAL = 'PROFESIONAL',
    RECEPTIONIST = 'RECEPTIONIST',
}

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    roles: Role[];
}
    
export async function signIn(username: string, password: string) : Promise<number> {
    console.log(authUrl)

    const response = await axiosClient.post(`${authUrl}/login`, {username, password});
    if(response.request?.status === 200) {
        console.log(response)
        //console.log(response.headers.getAuthorization())
        //const [cookie] = response.headers.get("set-cookie"); // get cookie from request
        //axiosInstance.defaults.headers.Cookie = cookie; // attach cookie to axiosInstance for future requests
    }
    return response.request?.status;
};


export async function getUserInfo() : Promise<User> {
    const response = await axiosClient.get(`${userUrl}/me`,{
        withCredentials: true
        });
    return response.request?.body;
};



