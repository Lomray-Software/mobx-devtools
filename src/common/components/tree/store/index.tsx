import type { FC } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';
import { useRouterAnimationContext } from '@context/collapse';
import type { TComponentGroupStore } from '@interfaces/store';
import renderRecursive from '../render-recursive';

interface IStoreTree {
  title: string;
  group?: TComponentGroupStore;
  depth: number;
  id: string;
}

/**
 * StoreTree
 * @constructor
 */
const StoreTree: FC<IStoreTree> = ({ group, depth, title, id }) => {
  const { state, toggle } = useRouterAnimationContext();

  const isToggled = state?.[id] ?? true;

  return (
    <li>
      <Label
        isOpen={!isToggled}
        dataType={typeof group}
        onClick={toggle}
        data-id={id}
        data-default-state="true"
      >
        <Label.Title>{title}</Label.Title>
      </Label>
      <Collapse isOpened={isToggled}>{renderRecursive(id, group, depth + 1)}</Collapse>
    </li>
  );
};

export default StoreTree;
