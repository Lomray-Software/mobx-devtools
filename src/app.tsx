import React, { useEffect, useState } from 'react';
import StoreTree from '@components/store-tree';
import type { IEvent } from '@interfaces/event';
import type { IStoresState } from '@interfaces/store';

const App = () => {
  const [storesState, setStoresState] = useState<IStoresState[]>();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    chrome.runtime.onMessage.addListener(
      (message: { event: IEvent; storesState: IStoresState[] }) => {
        if (message.storesState) {
          setStoresState(message.storesState);
        }
      },
    );
  }, []);

  return <StoreTree state={storesState} />;
};

export default App;
