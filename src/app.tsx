import React, { useEffect, useState } from 'react';
import Layout from '@components/layout';
import Placeholder from '@components/placeholder';
import StateTree from '@components/tree';
import type { IEvent } from '@interfaces/event';
import type { IStoresState } from '@interfaces/store';
// import { state1, state2 } from './mock';

const App = () => {
  const [storesState, setStoresState] = useState<IStoresState>({});

  useEffect(() => {
    // eslint-disable-next-line no-undef
    chrome?.runtime?.onMessage.addListener(
      (message: { event: IEvent; storesState: IStoresState }) => {
        if (message.storesState) {
          setStoresState(message.storesState);
        }
      },
    );
  }, []);

  return (
    <Layout>
      {Object.keys(storesState).length ? <StateTree state={storesState} /> : <Placeholder />}
    </Layout>
  );
};

export default App;
