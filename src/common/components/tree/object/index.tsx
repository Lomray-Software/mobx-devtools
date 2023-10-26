import type { FC } from 'react';
import React from 'react';
import Collapse from '@components/collapse';
import Label from '@components/label';
import { useRouterAnimationContext } from '@context/collapse';

interface IObjectTree {
  id: string;
  label: string;
  property: object;
}

/**
 * ObjectTree
 * @constructor
 */
const ObjectTree: FC<IObjectTree> = ({ id, label, property }) => {
  const { state, toggle } = useRouterAnimationContext();

  const isToggled = state?.[id] ?? false;

  return (
    <>
      <Label
        isOpen={!isToggled}
        dataType="object"
        onClick={toggle}
        data-id={id}
        data-default-state="false"
      >
        <Label.Title>{label}</Label.Title>
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
