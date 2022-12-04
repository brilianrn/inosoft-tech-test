<template>
  <select
    class="form-control form-select w-100"
    style="width: 100%"
    @change="(e) => e?.target?.value"
  >
    <option :value="placeholder" hidden>
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
