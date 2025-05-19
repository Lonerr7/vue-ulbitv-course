<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="container">
    <Navbar />
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>
