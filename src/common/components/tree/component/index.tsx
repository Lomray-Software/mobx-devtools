import useToggle from '@lomray/client-helpers/hooks/use-toggle';
import type { FC } from 'react';
import React from 'react';
import { ReactComponent as NestedIcon } from '@assets/icons/nested.svg';
import Collapse from '@components/collapse';
import Label from '@components/label';
import type { IComponentStore } from '@interfaces/store';
import PropertiesTree from '../properties';

interface IComponentTree extends IComponentStore {
  isGrouped?: boolean;
}

/**
 * ComponentTree
 * @constructor
 */
const ComponentTree: FC<IComponentTree> = ({ stores, componentName, isGrouped }) => {
  const { isToggled, toggle } = useToggle(true);

  return (
    <>
      <Label isOpen={!isToggled} dataType={typeof stores} onClick={toggle}>
        {isGrouped && (
          <Label.Icon>
            <NestedIcon title="This store is nested in the previous one" />
          </Label.Icon>
        )}
        <Label.Title>Component name:</Label.Title>
        <Label.Value color="green">"{componentName}"</Label.Value>
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
    </>
  );
};

export default ComponentTree;
