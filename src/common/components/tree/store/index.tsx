import useToggle from '@lomray/client-helpers/hooks/use-toggle';
import type { FC } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';
import type { TComponentGroupStore } from '@interfaces/store';
import renderRecursive from '../render-recursive';

interface IStoreTree {
  title: string;
  group?: TComponentGroupStore;
  depth: number;
}

/**
 * StoreTree
 * @constructor
 */
const StoreTree: FC<IStoreTree> = ({ group, depth, title }) => {
  const { isToggled, toggle } = useToggle(true);

  return (
    <li>
      <Label isOpen={!isToggled} dataType={typeof group} onClick={toggle}>
        <Label.Title>{title}</Label.Title>
      </Label>
      <Collapse isOpened={isToggled}>{renderRecursive(group, depth + 1)}</Collapse>
    </li>
  );
};

export default StoreTree;
