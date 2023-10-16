import useToggle from '@lomray/client-helpers/hooks/use-toggle';
import type { FC } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';
import type { IComponentStore } from '@interfaces/store';
import PropertiesTree from '../properties';

/**
 * ComponentTree
 * @constructor
 */
const ComponentTree: FC<IComponentStore> = ({ stores, componentName }) => {
  const { isToggled, toggle } = useToggle(true);

  return (
    <div>
      <Label>
        <Label.Title>Component name:</Label.Title>
        <Label.Value color="green">"{componentName}"</Label.Value>
      </Label>

      <Label isOpen={!isToggled} onClick={toggle} dataType="object">
        <Label.Title>Stores:</Label.Title>
      </Label>

      <Collapse isOpened={isToggled}>
        <ul>
          <div>
            <div>
              {Object.entries(stores).map(([storeId, storeProperties]) => (
                <PropertiesTree key={storeId} id={storeId} properties={storeProperties} />
              ))}
            </div>
          </div>
        </ul>
      </Collapse>
    </div>
  );
};

export default ComponentTree;
