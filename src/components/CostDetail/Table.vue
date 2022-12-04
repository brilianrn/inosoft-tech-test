<template>
  <div class="table-responsive text-nowrap border bg-white">
    <table class="table" style="width: 150em">
      <thead class="bg-light">
        <tr>
          <th style="width: 250px">Description</th>
          <th style="width: 120px">Qty</th>
          <th style="width: 120px">UoM</th>
          <th style="width: 250px">Unit Price</th>
          <th style="width: 80px">Discount (%)</th>
          <th style="width: 80px">VAT (%)</th>
          <th style="width: 155px; padding-left: 22px">Currency</th>
          <th style="width: 120px">VAT Amount</th>
          <th style="width: 120px">Sub Total</th>
          <th style="width: 120px">Total</th>
          <th style="width: 150px">Charge To</th>
          <th style="width: 20px"></th>
        </tr>
      </thead>
      <tbody v-if="costDetailList && costDetailList?.length">
        <tr v-for="(item, i) in costDetailList" :key="i + id?.toString()">
          <td>
            <InputText
              :value="item?.description"
              :setValue="
                (value) =>
                  setValueCostDetail({
                    id: item?.id,
                    value,
                    attribute: 'description',
                  })
              "
              placeholder="Description"
              size="md"
              type="text"
            />
          </td>
          <td>
            <InputText
              :value="qty"
              :setValue="(value) => setValue({ value, attribute: 'qty' })"
              placeholder="Qty"
              size="md"
              type="number"
            />
          </td>
          <td>
            <SelectOption
              :placeholder="uom"
              :value="uom"
              :setValue="(value) => setValue({ value, attribute: 'uom' })"
              :options="uomLov"
            />
          </td>
          <td>
            <InputText
              :value="unitPrice"
              :setValue="(value) => setValue({ value, attribute: 'unitPrice' })"
              placeholder="Unit Price"
              size="md"
              type="number"
            />
          </td>
          <td>
            <InputText
              :value="discount"
              :setValue="(value) => setValue({ value, attribute: 'discount' })"
              placeholder="Discount"
              size="md"
              type="number"
            />
          </td>
          <td>
            <InputText
              :value="vat"
              :setValue="(value) => setValue({ value, attribute: 'vat' })"
              placeholder="Vat"
              size="md"
              type="number"
            />
          </td>
          <td class="d-flex">
            <p class="d-inline mt-2">➡</p>
            <div class="d-inline">
              <SelectOption
                style="width: 100%"
                :placeholder="currency"
                :value="currency"
                :setValue="
                  (value) => setValue({ value, attribute: 'currency' })
                "
                :options="currencyLov"
              />
            </div>
          </td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>
            <SelectOption
              :placeholder="chargeTo"
              :value="chargeTo"
              :setValue="(value) => setValue({ value, attribute: 'chargeTo' })"
              :options="chargeToLov"
            />
          </td>
          <td>
            <Button
              label="-"
              type="secondary"
              style="padding-left: 15px; padding-right: 15px"
              :onClick="() => decreaseList({ id: item?.id })"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="6">
            <p class="d-inline">Exchange Rate 1 USD = {{ '' }}</p>
            <InputText
              :value="usdToAed"
              :readOnly="true"
              size="md"
              type="number"
              className="d-inline"
              style="width: 120px"
            />
            <p class="d-inline m-2">AED</p>
          </td>
          <td class="bg-light" style="padding-left: 22px">AED in Total</td>
          <td class="bg-light">0.00</td>
          <td class="bg-light">0.00</td>
          <td class="bg-light">0.00</td>
          <td></td>
          <td>
            <Button label="+" type="primary" :onClick="addList" />
          </td>
        </tr>
        <tr>
          <td class="text-right" colspan="6"></td>
          <td class="bg-light" style="padding-left: 22px">USD in Total</td>
          <td class="bg-light">0.00</td>
          <td class="bg-light">0.00</td>
          <td class="bg-light">0.00</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <i
      class="text-center d-block w-100 my-3"
      v-if="!costDetailList && !costDetailList?.length"
    >
      -- Tidak ada data --
    </i>
  </div>
</template>

<script>
import { InputText, SelectOption, Button } from '../Form';
import { mapState } from 'vuex';

export default {
  name: 'TableForm',
  props: [
    'costDetailList',
    'columns',
    'addList',
    'decreaseList',
    'setValueCostDetail',
    'usdToAed',
  ],
  components: { InputText, SelectOption, Button },
  data: function () {
    return {
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
  },
  methods: {
    setValue({ value, attribute }) {
      this[attribute] = value;
    },
  },
  computed: {
    ...mapState(['uomLov', 'currencyLov', 'chargeToLov']),
  },
};
</script>

<style scoped></style>
