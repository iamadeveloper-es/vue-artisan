import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import VaAvatar from '@/components/atoms/va-avatar/index.vue';

describe('VaAvatar.vue', () => {
  it('tiene el nombre de componente correcto', () => {
    expect(VaAvatar.name).toBe('va-avatar');
  });

  it('renderiza una imagen cuando se pasa la prop `image` y el display es "img"', () => {
    const wrapper = mount(VaAvatar, {
      props: {
        image: 'https://example.com/avatar.jpg',
        name: 'John Doe',
        display: 'img'
      }
    });

    const img = wrapper.find('img.va-avatar__img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('https://example.com/avatar.jpg');
    expect(img.attributes('alt')).toBe('John Doe');

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('muestra las iniciales del nombre cuando `display` es "name"', () => {
    const wrapper = mount(VaAvatar, {
      props: {
        name: 'Jane Doe',
        display: 'name'
      }
    });

    expect(wrapper.text()).toContain('JD');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renderiza el texto personalizado si se pasa la prop `text`', () => {
    const wrapper = mount(VaAvatar, {
      props: {
        text: 'Hola!',
        display: 'name'
      }
    });

    expect(wrapper.text()).toBe('Hola!');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('aplica la clase de acción cuando `clickable` es verdadero', () => {
    const wrapper = mount(VaAvatar, {
      props: {
        clickable: true
      }
    });

    expect(wrapper.classes()).toContain('va-avatar--action');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('aplica la clase de borde redondeado si `isRounded` es verdadero', () => {
    const wrapper = mount(VaAvatar, {
      props: {
        isRounded: true
      }
    });

    expect(wrapper.classes()).toContain('va-avatar--rounded');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('aplica la clase de borde cuando `isBordered` es verdadero', () => {
    const wrapper = mount(VaAvatar, {
      props: {
        isBordered: true
      }
    });

    expect(wrapper.classes()).toContain('va-avatar--bordered');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('emite el evento `clicked` cuando se hace clic', async () => {
    const wrapper = mount(VaAvatar, {
      props: {
        clickable: true
      }
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted('clicked')).toBeTruthy();
    expect(wrapper.emitted('clicked')?.length).toBe(1);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('usa el nombre por defecto si no se proporciona uno', () => {
    const wrapper = mount(VaAvatar, {
      props: {
        display: 'name'
      }
    });

    expect(wrapper.text()).toContain('A'); // "Avatar name" → "A"
    expect(wrapper.html()).toMatchSnapshot();
  });
});
