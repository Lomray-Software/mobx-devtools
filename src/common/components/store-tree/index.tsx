import type { FC, ReactNode } from 'react';
import React from 'react';
import ComponentTree from '@components/component-tree';
import type { IStoresState, IComponentStore, TComponentGroupStore } from '@interfaces/store';

interface IStoreTree {
  state?: IStoresState[];
}

const renderRecursiveTree = (
  store?: TComponentGroupStore | IComponentStore,
  depth = 0,
): ReactNode => {
  const restGroupsKeys = Object.keys(store ?? {}).filter(
    (key) => !['componentName', 'stores'].includes(key),
  );

  return (
    <div style={{ marginLeft: depth * 10 }}>
      {store?.componentName && typeof store.componentName === 'string' && (
        <ComponentTree componentName={store.componentName} stores={store.stores} />
      )}

      {Boolean(restGroupsKeys.length > 0) &&
        Object.values(restGroupsKeys).map((key) =>
          renderRecursiveTree(store?.[key] as TComponentGroupStore, depth + 1),
        )}
    </div>
  );
};

/**
 * StoreTree
 * @constructor
 */
const StoreTree: FC<IStoreTree> = ({ state }) => (
  <div>
    {state?.map(({ path, value }) => (
      <div key={path}>
        <p>path: {path}</p>
        <div>{renderRecursiveTree(value as never)}</div>
      </div>
    ))}
  </div>
);

export default StoreTree;
