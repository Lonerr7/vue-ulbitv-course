<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      const newPost = { ...this.post, id: Math.random() };
      if (!newPost.title || !newPost.id || !newPost.body) {
        return;
      }

      this.$emit('create', newPost);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<template>
  <form class="form">
    <h3 class="form__title">Создание поста</h3>

    <MyInput v-focus placeholder="Название" v-model="post.title" />
    <MyInput placeholder="Описание" v-model="post.body" />
    <MyButton style="padding: 10px; width: 100%" @click.prevent="createPost">
      Создать
    </MyButton>
  </form>
</template>

<style scoped>
.form {
  max-width: 700px;
  margin-bottom: 100px;
  margin-inline: auto;
}
.form__title {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
