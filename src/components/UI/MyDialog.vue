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
  <dialog class="dialog" :open="show" aria-modal="true">
    <div class="dialog__inner">
      <slot></slot>
      <MyButton class="dialog__btn" @click="hideDialog">Close</MyButton>
    </div>
  </dialog>
</template>

<style scoped>
.dialog {
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
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
</style>
