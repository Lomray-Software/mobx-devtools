import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import React, { Fragment } from 'react';
import ConditionalWrapper from '@components/conditional-wrapper';
import Label from '@components/label';
import type { IStoresState, IComponentStore, TComponentGroupStore } from '@interfaces/store';
import ComponentTree from './component';
import styles from './styles.module.scss';

interface IStoreTree {
  state?: IStoresState[];
}

const renderRecursiveTree = (
  store?: TComponentGroupStore | IComponentStore,
  depth = 1,
): ReactNode => {
  const restGroupsKeys = Object.keys(store ?? {}).filter(
    (key) => !['componentName', 'stores'].includes(key),
  );
  const isGrouped = depth > 2;

  return (
    <ConditionalWrapper
      condition={isGrouped}
      wrapper={(children) => (
        <ul>
          <div>
            <div>{children}</div>
          </div>
        </ul>
      )}
    >
      <div className={classNames({ [styles.isGrouped]: isGrouped })}>
        {store?.componentName && typeof store.componentName === 'string' && (
          <ComponentTree
            componentName={store.componentName}
            stores={store.stores}
            isGrouped={isGrouped}
          />
        )}
      </div>

      {Boolean(restGroupsKeys.length > 0) &&
        Object.values(restGroupsKeys).map((key) => (
          <Fragment key={key}>
            {renderRecursiveTree(store?.[key] as TComponentGroupStore, depth + 1)}
          </Fragment>
        ))}
    </ConditionalWrapper>
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
            <Label dataType="string">
              <Label.Title>Path:</Label.Title>
              <Label.Value>"{path}"</Label.Value>
            </Label>
            <div>{renderRecursiveTree(value as never)}</div>
          </li>
        </Fragment>
      ))}
    </ul>
  </div>
);

export default StoreTree;
