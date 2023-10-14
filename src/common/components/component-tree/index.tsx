import useToggle from '@lomray/client-helpers/hooks/use-toggle';
import type { FC } from 'react';
import React from 'react';
import { ReactComponent as NestedIcon } from '@assets/icons/nested.svg';
import Collapse from '@components/collapse';
import Label from '@components/label';
import PropertiesTree from '@components/properties-tree';
import type { IComponentStore } from '@interfaces/store';
import styles from './styles.module.scss';

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
    <li>
      <Label isOpen={!isToggled} dataType={typeof stores} onClick={toggle}>
        {isGrouped && (
          <NestedIcon
            className={styles.nestedIcon}
            title="This store is nested in the previous one"
          />
        )}
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
