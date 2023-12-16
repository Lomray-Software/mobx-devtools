function handleInstallError(tabId, error) {
  console.error({ tabId, error });
}

const waitTabLoad = (tabId, cb) => {
  if (!chrome.tabs.get) {
    // electron doesn't support this api
    cb();

    return;
  }

  chrome.tabs.get(Number(tabId), (tab) => {
    if (chrome.runtime.lastError) {
      cb(chrome.runtime.lastError);
    } else if (tab.status === 'complete') {
      cb();
    } else {
      chrome.tabs.onUpdated.addListener(function listener(tid, changeInfo) {
        if (tid !== tabId || changeInfo.status === 'loading') {
          return;
        }

        chrome.tabs.onUpdated.removeListener(listener);
        cb();
      });
    }
  });
};

const installContentScript = (tabId) => {
  waitTabLoad(Number(tabId), (err) => {
    if (err) {
      handleInstallError(tabId, err);
    } else {
      chrome.tabs.executeScript(tabId, { file: '/content.js' }, (res) => {
        if (err || !res) {
          handleInstallError(tabId, chrome.runtime.lastError);
        }
      });
    }
  });
};

chrome.runtime.onConnect.addListener((port) => {
  installContentScript(Number(port.name));
});
