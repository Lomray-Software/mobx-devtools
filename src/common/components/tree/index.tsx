import type { FC } from 'react';
import React from 'react';
import type { IStoresState } from '@interfaces/store';
import renderRecursive from './render-recursive';
import styles from './styles.module.scss';

interface IStateTree {
  state: IStoresState;
}

/**
 * StateTree
 * @constructor
 */
const StateTree: FC<IStateTree> = ({ state }) => (
  <div className={styles.wrapper}>{renderRecursive(state as never)}</div>
);

export default StateTree;
