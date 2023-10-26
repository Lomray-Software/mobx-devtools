import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import React from 'react';
import type { ILabelInner } from '../index';
import styles from './styles.module.scss';

/**
 * Title
 * @constructor
 */
const Title: FCC<ILabelInner> = ({ children, color = 'blue' }) => (
  <div className={styles[color]}>{children}</div>
);

export default Title;
