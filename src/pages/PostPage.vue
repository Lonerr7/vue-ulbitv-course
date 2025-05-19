<script>
import { api } from '../api/api';
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import PagesNumList from '../components/Pagination/PagesNumList.vue';

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
    async getPosts(incrementPageNumber = false) {
      try {
        this.isPostsLoading = true;

        if (incrementPageNumber) {
          this.currentPage += 1;
        }
        const { data, headers } = await api.fetchPosts(
          this.limit,
          this.currentPage
        );
        this.totalPages = Math.ceil(+headers['x-total-count'] / this.limit);

        if (incrementPageNumber) {
          this.posts = [...this.posts, ...data];
        } else {
          this.posts = data;
        }
        this.isPostsLoadingSuccess = true;
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
  mounted() {
    this.getPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.includes(this.searchPostText)
      );
    },
  },
  components: { PostForm, PostList, PagesNumList },
};
</script>

<template>
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

    <MyInput v-model="searchPostText" v-focus />
    <PostList
      :posts="sortedAndSearchedPosts"
      @removePost="removePost"
      v-if="isPostsLoadingSuccess"
    />

    <!-- <PagesNumList
        :totalPagesCount="totalPages"
        :currentPage="currentPage"
        @changePage="changePage"
      /> -->
    <div class="observer" ref="observer" v-intersection="getPosts"></div>
    <p v-if="isPostsLoading">Loading...</p>
  </div>
</template>

<style>
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

.observer {
  height: 30px;
  background-color: green;
}
</style>
