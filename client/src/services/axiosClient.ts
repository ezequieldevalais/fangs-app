import axios from "axios";
import { config } from "../config";


const axiosClient = axios.create({ 
  baseURL: config.API_URL,
  withCredentials: true,
 });


export default axiosClient;