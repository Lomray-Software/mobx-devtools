import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import React from 'react';
import type { ILabelInner } from '../index';
import styles from './styles.module.scss';

/**
 * Value
 * @constructor
 */
const Value: FCC<ILabelInner> = ({ children, color = 'orange' }) => (
  <div className={styles[color]}>{children}</div>
);

export default Value;
