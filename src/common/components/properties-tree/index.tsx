import _ from 'lodash';
import type { FC, ReactNode } from 'react';
import React from 'react';

interface IPropertiesTree {
  id: string;
  property: string | number | null | object;
}

const renderProperty = (property: IPropertiesTree['property']): ReactNode => {
  if (_.isNil(property)) {
    return <span>{JSON.stringify(property)}</span>;
  }

  switch (typeof property) {
    case 'object':
      return (
        <ul>
          {Object.entries(property).map(([key, value]) => (
            <li key={key}>
              {key}: {JSON.stringify(value)}
            </li>
          ))}
        </ul>
      );

    case 'number':
      return <span>{property}</span>;

    default:
      return <span>{JSON.stringify(property)}</span>;
  }
};

/**
 * PropertiesTree
 * @constructor
 */
const PropertiesTree: FC<IPropertiesTree> = ({ id, property }) => (
  <li>
    <span>{id}: </span>
    {renderProperty(property)}
  </li>
);

export default PropertiesTree;
