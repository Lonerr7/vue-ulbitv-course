<script>
export default {
  name: 'MyInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<template>
  <input
    class="input"
    type="text"
    v-bind="$attrs"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<style scoped>
.input {
  padding: 8px 10px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
}

.input:last-child {
  margin-bottom: 0;
}
</style>
