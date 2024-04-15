import axiosClient from './axiosClient';

const baseUrl = `/user`;

export const getAllUsers = () => {
  const request = axiosClient.get(baseUrl);
  return request.then((response) => response.data);
};
