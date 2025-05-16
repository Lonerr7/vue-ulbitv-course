<script>
export default {
  name: 'MyButton',
};
</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border-radius: 5px;
  padding: 10px;
}
</style>
