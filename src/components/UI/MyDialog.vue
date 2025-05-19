<script>
export default {
  name: 'MyDialog',
  props: {
    show: Boolean,
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    },
  },
};
</script>

<template>
  <div
    class="dialog"
    :class="{
      active: show,
    }"
  >
    <div class="dialog__inner">
      <slot></slot>
      <MyButton class="dialog__btn" @click="hideDialog">Close</MyButton>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  display: none;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: black;
}

.dialog__inner {
  width: 300px;
  height: 320px;
}

.dialog__btn {
  display: block;
  margin-left: auto;
  margin-bottom: 20px;
}

.active {
  display: block;
}
</style>
