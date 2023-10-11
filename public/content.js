const manager = window.__MOBX_STORE_MANAGER__;

setTimeout(() => {
  console.log('manager:', manager);

  manager.__devOnChange = (data) => {
    // console.log('- dispatchEvent DEV_ON_CHANGE -');
    // getStoresState + spy
    document.dispatchEvent(new CustomEvent('DEV_ON_CHANGE', { detail: { data } }));
  };
}, 1000);
