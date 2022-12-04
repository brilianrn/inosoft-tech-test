import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uomLov: null,
    currencyLov: null,
    chargeToLov: null,
  },
  mutations: {
    SET_UOM_LOV: (state, payload) => (state.uomLov = payload),
    SET_CURRENCY_LOV: (state, payload) => (state.currencyLov = payload),
    SET_CHARGE_TO_LOV: (state, payload) => (state.chargeToLov = payload),
  },
  actions: {
    getFormLov: async function ({ commit }) {
      try {
        const uom = await axios.get('/data/UomLov.json');
        const currency = await axios.get('/data/CurrencyLov.json');
        const charge = await axios.get('/data/ChargeToLov.json');

        commit('SET_UOM_LOV', uom?.data);
        commit('SET_CURRENCY_LOV', currency?.data);
        commit('SET_CHARGE_TO_LOV', charge?.data);
      } catch (error) {
        throw new Error('getFormLov :', error);
      }
    },
  },
  modules: {},
});
