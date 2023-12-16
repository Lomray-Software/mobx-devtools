const manager = window.__MOBX_STORE_MANAGER__;

if (manager) {
  manager.__devOnChange = (detail) => {
    // console.log('- dispatchEvent DEV_ON_CHANGE -');
    document.dispatchEvent(new CustomEvent('DEV_ON_CHANGE', { detail }));
  };
}
