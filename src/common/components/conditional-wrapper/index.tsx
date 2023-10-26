/* eslint-disable react/jsx-no-useless-fragment */
import type { ReactElement, ReactNode, JSXElementConstructor } from 'react';
import React from 'react';

export interface IConditionalWrapper<T, TProps extends string | JSXElementConstructor<TProps>> {
  condition: boolean;
  children: ReactNode;
  wrapper: (children: ReactNode) => ReactElement<T, TProps>;
}

/**
 * ConditionalWrapper
 * @constructor
 */
const ConditionalWrapper = <T, TProps extends string | JSXElementConstructor<TProps>>({
  condition,
  wrapper,
  children,
}: IConditionalWrapper<T, TProps>) => {
  if (condition) {
    return <>{wrapper?.(children) ?? children}</>;
  }

  return <>{children}</>;
};

export default ConditionalWrapper;
