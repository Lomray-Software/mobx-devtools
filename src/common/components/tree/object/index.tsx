import useToggle from '@lomray/client-helpers/hooks/use-toggle';
import type { FC } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';

interface IObjectTree {
  id: string;
  property: object;
}

/**
 * ObjectTree
 * @constructor
 */
const ObjectTree: FC<IObjectTree> = ({ id, property }) => {
  const { isToggled, toggle } = useToggle(true);

  return (
    <>
      <Label isOpen={!isToggled} dataType="object" onClick={toggle}>
        <Label.Title>{id}</Label.Title>
      </Label>

      <Collapse isOpened={isToggled}>
        <ul>
          <div>
            <div>
              {Object.entries(property).map(([key, value]) => (
                <li key={key}>
                  <Label dataType={typeof value}>
                    <Label.Title>{key}:</Label.Title>
                    <Label.Value>{JSON.stringify(value)}</Label.Value>
                  </Label>
                </li>
              ))}
            </div>
          </div>
        </ul>
      </Collapse>
    </>
  );
};

export default ObjectTree;
