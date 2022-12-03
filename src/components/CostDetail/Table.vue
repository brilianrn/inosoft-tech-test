<template>
  <div class="table-responsive text-nowrap border bg-white">
    <table class="table" style="width: 150em">
      <thead class="bg-light">
        <tr>
          <th>Description</th>
          <th style="width: 100px">Qty</th>
          <th>UoM</th>
          <th>Unit Price</th>
          <th style="width: 120px">Discount (%)</th>
          <th style="width: 120px">VAT (%)</th>
          <th style="width: 130px">Currency</th>
          <th>VAT Amount</th>
          <th>Sub Total</th>
          <th>Total</th>
          <th>Charge To</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <InputText
              :value="description"
              :setValue="
                (value) => setValue({ value, attribute: 'description' })
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
          <td>
            <SelectOption
              :placeholder="currency"
              :value="currency"
              :setValue="(value) => setValue({ value, attribute: 'currency' })"
            />
          </td>
          <td>
            <InputText
              :value="vatAmount"
              :setValue="(value) => setValue({ value, attribute: 'vatAmount' })"
              placeholder="Vat Amount"
              size="md"
              type="number"
            />
          </td>
          <td>
            <InputText
              :value="subTotal"
              :setValue="(value) => setValue({ value, attribute: 'subTotal' })"
              placeholder="Sub Total"
              size="md"
              type="number"
            />
          </td>
          <td>
            <InputText
              :value="total"
              :setValue="(value) => setValue({ value, attribute: 'total' })"
              placeholder="Total"
              size="md"
              type="number"
            />
          </td>
          <td>
            <SelectOption
              :placeholder="chargeTo"
              :value="chargeTo"
              :setValue="(value) => setValue({ value, attribute: 'chargeTo' })"
            />
          </td>
          <td>
            <Button
              label="-"
              type="secondary"
              style="padding-left: 15px; padding-right: 15px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">Exchange Rate 1 USD =</td>
          <td>
            <InputText
              :value="qty"
              :setValue="(value) => setValue({ value, attribute: 'qty' })"
              placeholder="Qty"
              size="md"
              type="number"
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SelectOption
              :placeholder="currency"
              :value="currency"
              :setValue="(value) => setValue({ value, attribute: 'currency' })"
            />
          </td>
          <td>
            <InputText
              :value="vatAmount"
              :setValue="(value) => setValue({ value, attribute: 'vatAmount' })"
              placeholder="Vat Amount"
              size="md"
              type="number"
            />
          </td>
          <td>
            <InputText
              :value="subTotal"
              :setValue="(value) => setValue({ value, attribute: 'subTotal' })"
              placeholder="Sub Total"
              size="md"
              type="number"
            />
          </td>
          <td>
            <InputText
              :value="total"
              :setValue="(value) => setValue({ value, attribute: 'total' })"
              placeholder="Total"
              size="md"
              type="number"
            />
          </td>
          <td></td>
          <td>
            <Button label="+" type="primary" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { InputText, SelectOption, Button } from '../Form';

export default {
  name: 'TableForm',
  props: ['costDetailList', 'columns'],
  components: { InputText, SelectOption, Button },
  data: () => {
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
};
</script>

<style scoped></style>
