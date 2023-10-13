import type { FC } from 'react';
import React from 'react';
import PropertiesTree from '@components/properties-tree';
import type { IComponentStore } from '@interfaces/store';

/**
 * ComponentTree
 * @constructor
 */
const ComponentTree: FC<IComponentStore> = ({ stores, componentName }) => (
  <div>
    <h5>ComponentName: {componentName}</h5>
    <ul>
      Stores:
      <li>
        {Object.entries(stores).map(([storeId, storeProperties]) => (
          <ul key={storeId}>
            {storeId}
            {Object.entries(storeProperties as Record<string, any>).map(([key, property]) => (
              <PropertiesTree key={key} id={key} property={property} />
            ))}
          </ul>
        ))}
      </li>
    </ul>
  </div>
);

export default ComponentTree;
