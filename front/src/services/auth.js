import axiosClient from './axiosClient';

const authUrl = `/auth`;
const userUrl = `/user`;

/*export const signIn = async (username: string, password: string) => {
    const response = await axios.post(`${baseUrl}/login`, {username, password});
    return response.request?.status;

};*/

export const Role = {
  ADMIN: 'ADMIN',
  PROFESSIONAL: 'PROFESIONAL',
  RECEPTIONIST: 'RECEPTIONIST'
};

export async function signIn(username, password) {
  console.log(authUrl);
  const response = await axiosClient.post(`${authUrl}/login`, { username, password });
  if (response.request?.status === 200) {
    console.log(response);
  }
  return response.request?.status;
}

export async function getUserInfo() {
  const response = await axiosClient.get(`${userUrl}/me`, {
    withCredentials: true
  });
  return response.request?.body;
}
