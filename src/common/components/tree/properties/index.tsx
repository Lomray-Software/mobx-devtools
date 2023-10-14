import useToggle from '@lomray/client-helpers/hooks/use-toggle';
import _ from 'lodash';
import type { FC, ReactNode } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';
import ObjectTree from '../object';

interface IPropertiesTree {
  id: string;
  properties: Record<string, string | number | null | object>;
}

const renderProperty = (id: string, property: string | number | null | object): ReactNode => {
  if (_.isNil(property)) {
    return (
      <Label dataType={property === null ? 'null' : 'undefined'}>
        <Label.Title>{id}:</Label.Title>
        <Label.Value>{JSON.stringify(property)}</Label.Value>
      </Label>
    );
  }

  switch (typeof property) {
    case 'object':
      return <ObjectTree id={id} property={property} />;

    case 'number':
      return (
        <Label dataType="number">
          <Label.Title>{id}:</Label.Title>
          <Label.Value>{property}</Label.Value>
        </Label>
      );

    default:
      return (
        <Label dataType={typeof property}>
          <Label.Title>{id}:</Label.Title>
          <Label.Value>{JSON.stringify(property)}</Label.Value>
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
      <Label isOpen={!isToggled} dataType="object" onClick={toggle}>
        <Label.Title color="purple">{id}</Label.Title>
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
