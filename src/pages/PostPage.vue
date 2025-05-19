<script setup>
import { onMounted } from 'vue';
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import { usePostsStore } from '../store/postsStore';

const store = usePostsStore();
</script>

<template>
  <div class="posts">
    <h1 class="posts__header">Страница с постами</h1>

    <div class="posts__controls">
      <MyButton style="display: block; width: 200px" @click="store.openDialog">
        Создать пост
      </MyButton>
      <MySelect :options="store.sortOptions" v-model="store.selectedSort" />
    </div>

    <MyDialog v-model:show="store.showDialog">
      <PostForm @create="store.createPost" />
    </MyDialog>

    <MyInput v-model="store.searchPostText" v-focus />
    <PostList
      :posts="store.sortedAndSearchedPosts"
      @removePost="store.removePost"
      v-if="store.isPostsLoadingSuccess"
    />
    <div class="observer" ref="observer" v-intersection="store.getPosts"></div>
    <p v-if="store.isPostsLoading">Loading...</p>
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
