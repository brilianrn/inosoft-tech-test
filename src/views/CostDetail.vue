<template>
  <div class="home container bg-secondary">
    <TableForm :costDetailList="costDetailList" />
    <div class="float-right">
      <div class="d-inline">
        <Button label="Simpan" type="primary" />
      </div>
      <div class="d-inline">
        <Button label="Simpan" type="primary" />
      </div>
      <div class="d-inline">
        <Button label="Simpan" type="primary" />
      </div>
    </div>
  </div>
</template>

<script>
import { TableForm } from '../components/CostDetail';
import { Button } from '../components/Form';

export default {
  name: 'Home',
  data: () => {
    return {
      costDetailList: null,
    };
  },
  components: { TableForm, Button },
};
</script>
