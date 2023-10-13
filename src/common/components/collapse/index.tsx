import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import React from 'react';
import { Collapse as ReactCollapse } from 'react-collapse';
import type { CollapseProps } from 'react-collapse';
import './styles.scss';

const Collapse: FCC<CollapseProps> = ({ isOpened, children, ...props }) => (
  <ReactCollapse isOpened={isOpened} {...props}>
    {children}
  </ReactCollapse>
);

export default Collapse;
