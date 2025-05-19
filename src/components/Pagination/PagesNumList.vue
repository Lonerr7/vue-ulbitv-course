<script>
import PageButton from './PageButton.vue';

export default {
  props: {
    totalPagesCount: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(newPageNum) {
      this.$emit('changePage', newPageNum);
    },
  },
  components: { PageButton },
};
</script>

<template>
  <ul class="pages-list">
    <PageButton
      v-for="number in totalPagesCount"
      :key="number"
      :pageNumber="number"
      :isActive="number === currentPage"
      @changePage="changePage"
    />
  </ul>
</template>

<style scoped>
.pages-list {
  max-width: 450px;
  display: flex;
  justify-content: space-between;
}
</style>
