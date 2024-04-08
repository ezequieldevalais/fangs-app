import axios from "axios";
import { config } from "../config";

const authUrl = `${config.API_URL}/auth`;
const userUrl = `${config.API_URL}/user`;

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
    const response = await axios.post(`${authUrl}/login`, {username, password});
    return response.request?.status;
};


export async function getUserInfo() : Promise<User> {
    const response = await axios.get(`${userUrl}/me`,{
        withCredentials: true
        });
    console.log(response);
    return response.request?.body;
};



