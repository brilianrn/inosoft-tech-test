<template>
  <button
    type="button"
    :class="`btn btn-${genre ? genre + '-' : ''}${
      type || 'primary'
    } ${className} text-center`"
    @click="onClick"
    :style="style"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonForm',
  props: ['type', 'genre', 'label', 'onClick', 'className', 'style'],
};
</script>

<style scoped>
.btn-secondary {
  background: #dedede;
  border-color: #dedede;
  color: #96a0a9;
}

.btn-primary {
  background: #17b4b1;
  border-color: #17b4b1;
}

.btn-secondary:hover {
  background: #c9c9c9;
  border-color: #c9c9c9;
}

.btn-primary:hover {
  background: #16a3a1;
  border-color: #16a3a1;
}
</style>
