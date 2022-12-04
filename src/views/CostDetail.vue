<template>
  <div class="home container">
    <img
      v-if="loading"
      src="../assets/images/loading.gif"
      alt="loading"
      class="mx-auto d-flex"
      height="100"
    />
    <div v-else>
      <TableForm
        :costDetailList="costDetailList"
        :addList="addList"
        :decreaseList="decreaseList"
        :setValueCostDetail="setValueCostDetail"
        :usdToAed="usdToAed"
      />
      <div class="bg-light" style="display: flex; justify-content: flex-end">
        <div class="row mx-0 w-50 p-2">
          <Button
            label="Cancel"
            type="transparent"
            className="col"
            :onClick="onCancel"
          />
          <Button
            label="Save as Draft"
            type="secondary"
            genre="outline"
            className="col mx-3 bg-white text-secondary"
            :onClick="onSaveDraft"
          />
          <Button
            label="Submit"
            type="primary"
            className="col"
            :onClick="onSubmit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TableForm } from '../components/CostDetail';
import { Button } from '../components/Form';

const costDetail = {
  id: 1,
  description: null,
  qty: null,
  uom: 'UoM',
  unitPrice: null,
  discount: null,
  vat: null,
  currency: 'Currency',
  subTotal: null,
  vatAmount: null,
  total: null,
  chargeTo: 'Charge To',
};

export default {
  name: 'CostDetail',
  data: function () {
    return {
      loading: false,
      costDetailList: [costDetail],
      usdToAed: 3.6725,
    };
  },
  methods: {
    addList() {
      this.loading = true;
      const lastArr = {
        ...costDetail,
        id: this.costDetailList[this.costDetailList.length - 1].id + 1,
      };
      this.costDetailList.push(lastArr);
      this.loading = false;
    },
    decreaseList({ id }) {
      this.loading = true;
      if (this.costDetailList.length > 1) {
        const newArr = this.costDetailList.filter((e) => e.id !== id);
        this.costDetailList = newArr;
      }
      this.loading = false;
    },
    setValueCostDetail({ id, attribute, value }) {
      this.loading = true;
      this.costDetailList = this.costDetailList.map((e) => {
        if (e?.id === id) {
          return { ...e, [`${attribute}`]: value };
        }
        return e;
      });
      this.loading = false;
    },
    onSubmit() {
      this.loading = true;
      console.log('form :', this.costDetailList);
      this.loading = false;
    },
    onSaveDraft() {
      this.loading = true;
      console.log('form :', this.costDetailList);
      this.loading = false;
    },
    onCancel() {
      this.loading = true;
      this.costDetailList = [costDetail];
      this.loading = false;
    },
  },
  components: { TableForm, Button },
  created: async function () {
    await this.$store.dispatch('getFormLov');
    this.loading = false;
  },
};
</script>
