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
  <div class="inputBox">
    <input
      class="input"
      type="text"
      v-bind="$attrs"
      :value="modelValue"
      @input="updateInput"
    />
  </div>
</template>

<style scoped>
.inputBox {
  margin-bottom: 20px;
}

.inputBox:last-child {
  margin-bottom: 0;
}

.input {
  padding: 8px 10px;
  width: 100%;
  border-radius: 5px;
}
</style>
