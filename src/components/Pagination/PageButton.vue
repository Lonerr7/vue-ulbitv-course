<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
    isActive: Boolean,
  },
};
</script>

<template>
  <li
    class="pageButton__wrapper"
    :class="{
      active: isActive,
    }"
  >
    <button class="pageButton" @click="$emit('changePage', pageNumber)">
      {{ pageNumber }}
    </button>
  </li>
</template>

<style scoped>
.pageButton__wrapper {
  margin-right: 5px;
  border: 1px solid black;
  border-radius: 4px;
}

.pageButton {
  padding: 5px;
  background: none;
}

.active {
  font-weight: 500;
  border: 2px solid black;
  background-color: green;
}
</style>
