// sum.test.js
import { shallowMount } from '@vue/test-utils';
import VaMoney from '../../../components/atoms/va-money/index.vue';
import { expect, test, describe, beforeEach } from 'vitest';



const wrapper = shallowMount(VaMoney, {
  props: {}
});

describe('va-money', () => {

  beforeEach(async () => {
    // Clear mocks and add some testing data after before each test run
    await wrapper.setProps({
      amount: 3525.05
    });
  });

  test('snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('Modelos', () => {

    test('Seteo de amount a 1475.56, currency y lang por defecto es = a 1.475,56€', async () => {
      const props = {
        amount: 1475.56
      };
      await wrapper.setProps(props);

      const formatedAmountNoSpaces = wrapper.vm.formatedNumber.replace(/\s/g, '');

      expect(wrapper.vm.formatedNumber).not.toBeUndefined();
      expect(formatedAmountNoSpaces).toBe('1.475,56€');
      expect(formatedAmountNoSpaces).not.toBe('€1.475,56');

    });

    test('Modelo US Dollar con amount 1475.56 es = a $1,475.56', async () => {
      const props = {
        amount: 1475.56,
        currency: 'USD',
        lang: 'en-US'
      };
      await wrapper.setProps(props);

      expect(wrapper.vm.formatedNumber).not.toBeUndefined();
      expect(wrapper.vm.formatedNumber).toBe('$1,475.56');
      expect(wrapper.vm.formatedNumber).not.toBe('1.475,56€');

    });

    test('Modelo Libra con amount 1475.56 es = a £1,475.56', async () => {
      const props = {
        amount: 1475.56,
        currency: 'GBP',
        lang: 'en-GB'
      };
      await wrapper.setProps(props);

      expect(wrapper.vm.formatedNumber).not.toBeUndefined();
      expect(wrapper.vm.formatedNumber).toBe('£1,475.56');
      expect(wrapper.vm.formatedNumber).not.toBe('1.475,56€');
      expect(wrapper.vm.formatedNumber).not.toBe('$1,475.56');

    });

    test('Modelo Yen con amount 1475.56 es = a ￥1,475.56', async () => {
      const props = {
        amount: 1475.56,
        currency: 'JPY',
        lang: 'ja-JP'
      };
      await wrapper.setProps(props);

      expect(wrapper.vm.formatedNumber).not.toBeUndefined();
      expect(wrapper.vm.formatedNumber).toBe('￥1,475.56');
      expect(wrapper.vm.formatedNumber).not.toBe('1.475,56€');
      expect(wrapper.vm.formatedNumber).not.toBe('$1,475.56');
      expect(wrapper.vm.formatedNumber).not.toBe('£1,475.56');

    });

  });
});
