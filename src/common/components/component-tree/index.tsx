import useToggle from '@lomray/client-helpers/hooks/use-toggle';
import type { FC } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';
import PropertiesTree from '@components/properties-tree';
import type { IComponentStore } from '@interfaces/store';

/**
 * ComponentTree
 * @constructor
 */
const ComponentTree: FC<IComponentStore> = ({ stores, componentName }) => {
  const { isToggled, toggle } = useToggle(true);

  return (
    <li>
      <Label isOpen={isToggled} dataType={typeof stores} onClick={toggle}>
        Component name: "{componentName}"
      </Label>

      <Collapse isOpened={isToggled}>
        {Object.entries(stores).map(([storeId, storeProperties]) => (
          <ul key={storeId}>
            <div>
              <div>
                <PropertiesTree id={storeId} properties={storeProperties} />
              </div>
            </div>
          </ul>
        ))}
      </Collapse>
    </li>
  );
};

export default ComponentTree;
