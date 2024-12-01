// sum.test.js
import { shallowMount } from '@vue/test-utils';
import AppInputField from '../../../components/molecules/app-input-field/index.vue';
import { expect, test, describe, beforeEach, vi } from 'vitest';



const wrapper = shallowMount(AppInputField, {
  props: {
    name: 'userInput',
    label: 'userName',
    modelValue: '',
    'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
  }
});

describe('app-input-field', () => {

  beforeEach(async () => {
    // Clear mocks and add some testing data after before each test run
    await wrapper.setProps({
      name: 'userInput',
      label: 'userName',
      modelValue: ''
    });
  });

  test('snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('Acciones', () => {

    test('modelValue debe ser actualizado', async () => {
      
      await wrapper.find('input').setValue('test');
      expect(wrapper.props('modelValue')).toBe('test');

    });

    // test('clearField limpia el campo al hacer click', async () => {

    //   await wrapper.setProps({
    //     icon: ['fa-regular', 'fa-calendar']
    //   });
      
    //   await wrapper.find('input').setValue('contenido');
    //   expect(wrapper.props('modelValue')).toBe('contenido');

    //   await wrapper.find('.app-input-icon').trigger('click');

    //   expect(wrapper.props('modelValue')).toBeFalsy();

    // });

    describe('iconAction', () => {

      test('iconAction llama a clearField', () => {
        // const clearFieldSpy = vi.spyOn(wrapper.vm, 'clearField');
        wrapper.vm.iconAction();

        expect(wrapper.vm.isFocused).toBe(false);

        // expect(clearFieldSpy).toHaveBeenCalled();

        // clearFieldSpy.mockRestore();

      });

      test('iconAction llama a showPassword', async () => {

        await wrapper.setProps({
          type: 'password'
        });

        const spy2 = vi.spyOn(wrapper.vm, 'iconAction');

        wrapper.vm.iconAction();

        expect(spy2).toBeCalled();

        // expect(clearFieldSpy).toHaveBeenCalled();

        // clearFieldSpy.mockRestore();

      });

      //   test('iconAction llama a clearField limpia el campo al hacer click si No es type password', async () => {

      //     await wrapper.setProps({
      //       icon: ['fa-regular', 'fa-calendar']
      //     });
        
      //     await wrapper.find('input').setValue('contenido');
      //     expect(wrapper.props('modelValue')).toBe('contenido');

      //     const spy2 = vi.spyOn(wrapper.vm, 'iconAction');
  
      //     await wrapper.find('span.app-input-icon').trigger('click');

        
      //     // expect(spy2).toHaveBeenCalled();
      //     expect(wrapper.props('modelValue')).toBe(''); 

  
      //   });

      //   test('iconAction llama a showPassword y muestra/oculta la contraseña si es type password', async () => {
      //     await wrapper.setProps({
      //       icon: ['fa-solid', 'fa-eye-slash'],
      //       type: 'password'
      //     });

        
      //     await wrapper.find('input').setValue('contenido');
      //     expect(wrapper.props('modelValue')).toBe('contenido');
  
      //     await wrapper.find('.app-input-icon').trigger('clicked');
        
      //     expect(wrapper.vm.inputType).toBe('text');

    //   });
    });
  });
});