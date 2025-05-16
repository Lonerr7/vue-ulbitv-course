<script>
import PostItem from './PostItem.vue';

export default {
  props: {
    posts: {
      type: Array,
      required: true,
      default: [],
    },
  },
  components: {
    PostItem,
  },
  methods: {
    removePost(postId) {
      this.$emit('removePost', postId);
    },
  },
};
</script>

<template>
  <div>
    <div v-if="posts.length">
      <h2 class="title">Список постов</h2>
      <ul>
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @deletePost="removePost"
        />
      </ul>
    </div>
    <h2 v-else class="error">Список постов пуст</h2>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 15px;
  font-size: 24px;
}

.error {
  color: rgb(218, 44, 44);
  font-size: 30px;
  font-weight: 500;
  text-align: center;
}
</style>
