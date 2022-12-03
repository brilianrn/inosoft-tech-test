<template>
  <select class="form-control form-select" @change="(e) => e?.target?.value">
    <option :value="placeholder">
      {{ placeholder }}
    </option>
    <option
      v-for="(item, i) in options"
      :key="i"
      :value="item?.value"
      :selected="item?.value === value"
    >
      {{ item?.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectOption',
  props: ['placeholder', 'value', 'setValue', 'options'],
  methods: {},
};
</script>

<style scoped></style>
