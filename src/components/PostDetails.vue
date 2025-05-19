<script>
import { api } from '../api/api';

export default {
  data() {
    return {
      currentPost: {},
      isFetching: false,
    };
  },
  methods: {
    async getCurrentPost() {
      try {
        this.isFetching = true;
        const response = await api.fetchPostById(this.$route.params.id);
        const data = response.data;

        this.currentPost = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isFetching = false;
      }
    },
  },
  mounted() {
    this.getCurrentPost();
  },
};
</script>

<template>
  <p v-if="isFetching">Loading...</p>
  <div v-else>
    <h1>{{ currentPost.title }}</h1>
    <p>{{ currentPost.body }}</p>
  </div>
</template>

<style scoped></style>
