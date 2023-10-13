import React, { useEffect, useState } from 'react';
import Layout from '@components/layout';
import Placeholder from '@components/placeholder';
import StoreTree from '@components/store-tree';
import type { IEvent } from '@interfaces/event';
import type { IStoresState } from '@interfaces/store';
// import mock from './mock';

const App = () => {
  const [storesState, setStoresState] = useState<IStoresState[]>([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    chrome?.runtime?.onMessage.addListener(
      (message: { event: IEvent; storesState: IStoresState[] }) => {
        if (message.storesState) {
          setStoresState(message.storesState);
        }
      },
    );
  }, []);

  return (
    <Layout>{storesState.length ? <StoreTree state={storesState} /> : <Placeholder />}</Layout>
  );
};

export default App;
