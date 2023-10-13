import type { FC, ReactNode } from 'react';
import React, { Fragment } from 'react';
import ComponentTree from '@components/component-tree';
import Label from '@components/label';
import type { IStoresState, IComponentStore, TComponentGroupStore } from '@interfaces/store';
import styles from './styles.module.scss';

interface IStoreTree {
  state?: IStoresState[];
}

const renderRecursiveTree = (store?: TComponentGroupStore | IComponentStore): ReactNode => {
  const restGroupsKeys = Object.keys(store ?? {}).filter(
    (key) => !['componentName', 'stores'].includes(key),
  );

  return (
    <>
      <div>
        {store?.componentName && typeof store.componentName === 'string' && (
          <ComponentTree componentName={store.componentName} stores={store.stores} />
        )}
      </div>

      {Boolean(restGroupsKeys.length > 0) &&
        Object.values(restGroupsKeys).map((key) => (
          <Fragment key={key}>{renderRecursiveTree(store?.[key] as TComponentGroupStore)}</Fragment>
        ))}
    </>
  );
};

/**
 * StoreTree
 * @constructor
 */
const StoreTree: FC<IStoreTree> = ({ state }) => (
  <div className={styles.wrapper}>
    <ul>
      {state?.map(({ path, value }) => (
        <Fragment key={path}>
          <li>
            <Label isOpen={null} dataType="string">
              Path: "{path}"
            </Label>
            <div>{renderRecursiveTree(value as never)}</div>
          </li>
        </Fragment>
      ))}
    </ul>
  </div>
);

export default StoreTree;
