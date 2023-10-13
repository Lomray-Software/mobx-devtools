import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import React from 'react';
import styles from './styles.module.scss';

/**
 * Layout
 * @constructor
 */
const Layout: FCC = ({ children }) => <div className={styles.layout}>{children}</div>;

export default Layout;
