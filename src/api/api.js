import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const api = {
  fetchPosts: async (limit = 10, page = 1) =>
    await axiosInstance.get(`posts?_limit=${limit}&_page=${page}`),
  fetchPostById: async (id) => await axiosInstance.get(`posts/${id}`)
};
