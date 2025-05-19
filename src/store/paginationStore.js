import { defineStore } from 'pinia';

export const usePaginationStore = defineStore('pagination', {
  state: () => ({
    currentPage: 1,
    limit: 10,
    totalPages: 0,
  }),
});
