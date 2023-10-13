import useToggle from '@lomray/client-helpers/hooks/use-toggle';
import _ from 'lodash';
import type { FC, ReactNode } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';
import ObjectTree from '@components/object-tree';

interface IPropertiesTree {
  id: string;
  properties: Record<string, string | number | null | object>;
}

const renderProperty = (id: string, property: string | number | null | object): ReactNode => {
  if (_.isNil(property)) {
    return (
      <Label isOpen={null} dataType={property === null ? 'null' : 'undefined'}>
        {id}: {JSON.stringify(property)}
      </Label>
    );
  }

  switch (typeof property) {
    case 'object':
      return <ObjectTree id={id} property={property} />;

    case 'number':
      return (
        <Label isOpen={null} dataType="number">
          {id}: {property}
        </Label>
      );

    default:
      return (
        <Label isOpen={null} dataType={typeof property}>
          {id}: {JSON.stringify(property)}
        </Label>
      );
  }
};

/**
 * PropertiesTree
 * @constructor
 */
const PropertiesTree: FC<IPropertiesTree> = ({ id, properties }) => {
  const { isToggled, toggle } = useToggle(true);

  return (
    <li>
      <Label isOpen={!isToggled} dataType="string" onClick={toggle}>
        {id}
      </Label>
      <Collapse isOpened={isToggled}>
        {Object.entries(properties).map(([key, property]) => (
          <ul key={key}>
            <div>
              <div>
                <li>{renderProperty(key, property)}</li>
              </div>
            </div>
          </ul>
        ))}
      </Collapse>
    </li>
  );
};

export default PropertiesTree;
