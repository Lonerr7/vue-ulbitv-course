<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePost() {
      this.$emit('deletePost', this.post.id);
    },
  },
};
</script>

<template>
  <li class="post">
    <h5 class="post__title">
      <span class="strong">Название:</span> {{ post.title }}
    </h5>
    <p class="post__body">
      <span class="strong">Описание:</span> {{ post.body }}
    </p>
    <MyButton
      style="background-color: rgb(145, 45, 45); width: 100px"
      @click="deletePost"
    >
      Удалить
    </MyButton>
  </li>
</template>

<style scoped>
.post {
  margin: 0 auto 15px auto;
  padding: 10px;
  border: 2px solid rgb(109, 173, 171);
  font-size: 18px;
  width: 100%;
}

.post:last-child {
  margin-bottom: 0;
}

.post__title {
  margin-bottom: 20px;
}

.post__body {
  margin-bottom: 20px;
}

.strong {
  font-weight: 500;
}

.post__deleteBtn {
  padding: 7px;
  width: 20%;
}
</style>
