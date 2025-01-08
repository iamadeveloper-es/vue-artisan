// plugins/i18n.js
export default {
  install: (app, options) => {
    // Plugin code goes here
    app.config.globalProperties.$icons = options.icons.src;
    import('@/assets/fontawesome/css/all.min.css').then((icons) => {
      // debugger;
      app.provide('icons', icons);
      // debugger;
    });
    // debugger;
  }
};
