import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import classNames from 'classnames';
import React from 'react';
import type { ILabelInner } from '../index';
import styles from './styles.module.scss';

/**
 * Icon
 * @constructor
 */
const Icon: FCC<ILabelInner> = ({ children, color = 'white' }) => (
  <div className={classNames(styles.icon, styles[color])}>{children}</div>
);

export default Icon;
