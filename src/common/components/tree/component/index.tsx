import type { FC } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';
import { useRouterAnimationContext } from '@context/collapse';
import type { IComponentStore } from '@interfaces/store';
import PropertiesTree from '../properties';

interface IComponentTree extends IComponentStore {
  id: string;
}

/**
 * ComponentTree
 * @constructor
 */
const ComponentTree: FC<IComponentTree> = ({ stores, componentName, id }) => {
  const { state, toggle } = useRouterAnimationContext();

  const isToggled = state?.[id] ?? true;

  return (
    <div>
      <Label>
        <Label.Title>Component name:</Label.Title>
        <Label.Value color="green">"{componentName}"</Label.Value>
      </Label>

      <Label
        isOpen={!isToggled}
        onClick={toggle}
        dataType="object"
        data-id={id}
        data-default-state="true"
      >
        <Label.Title>Stores:</Label.Title>
      </Label>

      <Collapse isOpened={isToggled}>
        <ul>
          <div>
            <div>
              {Object.entries(stores).map(([storeId, storeProperties]) => (
                <PropertiesTree
                  key={storeId}
                  id={`${id}--${storeId}`}
                  properties={storeProperties}
                />
              ))}
            </div>
          </div>
        </ul>
      </Collapse>
    </div>
  );
};

export default ComponentTree;
