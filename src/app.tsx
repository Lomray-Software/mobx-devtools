import React, { useEffect, useState } from 'react';

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    document.addEventListener('DEV_ON_CHANGE', (event) => {
      console.log('DEV_ON_CHANGE listener:', event);
      setState(event);
    });

    // eslint-disable-next-line
    chrome.runtime.onMessage.addListener((request) => {
      console.log('chrome.runtime.onMessage:', request);
      setState(request as never);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export default App;
