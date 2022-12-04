<template>
  <input
    :class="`form-control ${
      size === 'md' ? '' : `form-control-${size}`
    } ${className}`"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :style="style"
    :readonly="readOnly"
    @change="(e) => setValue(e?.target?.value)"
  />
</template>

<script>
export default {
  name: 'InputText',
  props: [
    'size',
    'type',
    'placeholder',
    'value',
    'setValue',
    'className',
    'style',
    'readOnly',
  ],
  methods: {},
};
</script>

<style scoped></style>
