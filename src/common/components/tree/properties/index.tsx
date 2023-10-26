import _ from 'lodash';
import type { FC, ReactNode } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';
import { useRouterAnimationContext } from '@context/collapse';
import ObjectTree from '../object';

interface IPropertiesTree {
  id: string;
  properties: Record<string, string | number | null | object>;
}

const renderProperty = (
  id: string,
  label: string,
  property: string | number | null | object,
): ReactNode => {
  if (_.isNil(property)) {
    return (
      <Label dataType={property === null ? 'null' : 'undefined'}>
        <Label.Title>{label}:</Label.Title>
        <Label.Value>{JSON.stringify(property)}</Label.Value>
      </Label>
    );
  }

  switch (typeof property) {
    case 'object':
      return <ObjectTree id={`${id}--${label}`} label={label} property={property} />;

    case 'number':
      return (
        <Label dataType="number">
          <Label.Title>{label}:</Label.Title>
          <Label.Value>{property}</Label.Value>
        </Label>
      );

    default:
      return (
        <Label dataType={typeof property}>
          <Label.Title>{label}:</Label.Title>
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
  const { state, toggle } = useRouterAnimationContext();

  const isToggled = state?.[id] ?? true;

  return (
    <li>
      <Label
        isOpen={!isToggled}
        dataType={typeof properties}
        onClick={toggle}
        data-id={id}
        data-default-state="true"
      >
        <Label.Title color="purple">{id}</Label.Title>
      </Label>
      <Collapse isOpened={isToggled}>
        {Object.entries(properties).map(([label, property]) => (
          <ul key={label}>
            <div>
              <div>
                <li>{renderProperty(id, label, property)}</li>
              </div>
            </div>
          </ul>
        ))}
      </Collapse>
    </li>
  );
};

export default PropertiesTree;
