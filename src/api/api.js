import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const api = {
  fetchPosts: async () => await axiosInstance.get('posts?_limit=10'),
};
