// sum.test.js
import { shallowMount } from '@vue/test-utils';
import VaSwitch from '../../../components/atoms/va-switch/index.vue';
import { expect, test, describe, beforeEach } from 'vitest';



const wrapper = shallowMount(VaSwitch, {
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

  //   describe('Modelos', () => {

  //     test('Seteo de amount a 1475.56, currency y lang por defecto es = a 1.475,56€', async () => {
  //       const props = {
  //         amount: 1475.56
  //       };
  //       await wrapper.setProps(props);

  //       const formatedAmountNoSpaces = wrapper.vm.formatedNumber.replace(/\s/g, '');

  //       expect(wrapper.vm.formatedNumber).not.toBeUndefined();
  //       expect(formatedAmountNoSpaces).toBe('1.475,56€');
  //       expect(formatedAmountNoSpaces).not.toBe('€1.475,56');

//     });
//   });
});
