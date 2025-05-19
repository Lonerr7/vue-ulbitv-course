import { defineStore } from 'pinia';
import { api } from '../api/api';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],

    showDialog: false,

    isPostsLoading: false,
    isPostsLoadingSuccess: false,

    searchPostText: '',

    selectedSort: '',
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По содержимому' },
    ],

    currentPage: 1,
    limit: 10,
    totalPages: 0,
  }),
  getters: {
    sortedPosts: (state) => {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.includes(this.searchPostText)
      );
    },
  },
  actions: {
    createPost(newPost) {
      this.posts.push(newPost);
      this.showDialog = false;
    },
    removePost(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId);
    },
    openDialog() {
      this.showDialog = true;
    },
    async getPosts() {
      try {
        this.isPostsLoading = true;

        const { data, headers } = await api.fetchPosts(
          this.limit,
          this.currentPage
        );
        this.totalPages = Math.ceil(+headers['x-total-count'] / this.limit);

        if (this.currentPage > 1) {
          this.posts = [...this.posts, ...data];
        } else {
          this.posts = data;
        }
        this.isPostsLoadingSuccess = true;
        this.currentPage += 1;
      } catch (error) {
        console.error(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
    changePage(newPage) {
      this.currentPage = newPage;
    },
  },
});
