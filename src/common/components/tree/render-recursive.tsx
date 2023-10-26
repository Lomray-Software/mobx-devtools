import type { ReactNode } from 'react';
import React from 'react';
import type { IComponentStore, TComponentGroupStore } from '@interfaces/store';
import ComponentTree from './component';
import StoreTree from './store';

const renderRecursive = (
  id: string,
  store?: TComponentGroupStore | IComponentStore,
  depth = 1,
): ReactNode => {
  const restGroupsKeys = Object.keys(store ?? {}).filter(
    (key) => !['componentName', 'stores'].includes(key),
  );

  return (
    <ul>
      <div>
        <div>
          <div>
            {store?.componentName && typeof store.componentName === 'string' && (
              <ComponentTree
                id={`${id}--${restGroupsKeys.join('-')}`}
                componentName={store.componentName}
                stores={store.stores}
              />
            )}
          </div>

          {Boolean(restGroupsKeys.length > 0) &&
            Object.values(restGroupsKeys).map((key) => (
              <StoreTree
                key={key}
                id={key}
                group={store?.[key] as TComponentGroupStore}
                depth={depth + 1}
                title={key}
              />
            ))}
        </div>
      </div>
    </ul>
  );
};

export default renderRecursive;
