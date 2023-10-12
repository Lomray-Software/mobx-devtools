setTimeout(() => {
  const manager = window.__MOBX_STORE_MANAGER__;

  if (typeof manager === 'undefined') {
    return;
  }

  console.log('manager:', manager);

  manager.__devOnChange = (detail) => {
    // console.log('- dispatchEvent DEV_ON_CHANGE -');
    document.dispatchEvent(new CustomEvent('DEV_ON_CHANGE', { detail }));
  };
}, 1000);
