<script>
import { api } from './api/api';
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import PagesNumList from './components/Pagination/PagesNumList.vue';

export default {
  data() {
    return {
      posts: [],
      showDialog: false,
      isPostsLoading: false,
      isPostsLoadingSuccess: false,
      selectedSort: '',
      searchPostText: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
      ],

      currentPage: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  methods: {
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

        this.posts = data;
        this.isPostsLoadingSuccess = true;
      } catch (error) {
        console.error(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
    changePage(newPage) {
      this.currentPage = newPage;
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.includes(this.searchPostText)
      );
    },
  },
  watch: {
    currentPage() {
      this.getPosts();
    },
  },
  components: { PostForm, PostList, PagesNumList },
};
</script>

<template>
  <div class="container">
    <div class="posts">
      <h1 class="posts__header">Страница с постами</h1>

      <div class="posts__controls">
        <MyButton style="display: block; width: 200px" @click="openDialog">
          Создать пост
        </MyButton>
        <MySelect :options="sortOptions" v-model="selectedSort" />
      </div>

      <MyDialog v-model:show="showDialog">
        <PostForm @create="createPost" />
      </MyDialog>

      <MyInput v-model="searchPostText" />
      <PostList
        :posts="sortedAndSearchedPosts"
        @removePost="removePost"
        v-if="isPostsLoadingSuccess"
      />

      <PagesNumList
        :totalPagesCount="totalPages"
        :currentPage="currentPage"
        @changePage="changePage"
      />
      <p v-if="isPostsLoading">Loading...</p>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.posts {
  padding-block: 50px 70px;
}

.posts__header {
  font-size: 34px;
  text-align: center;
  margin-bottom: 100px;
}

.posts__controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
</style>
