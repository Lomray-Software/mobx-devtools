import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import React from 'react';
import { CollapseContextProvider } from '@context/collapse';
import styles from './styles.module.scss';

/**
 * Layout
 * @constructor
 */
const Layout: FCC = ({ children }) => (
  <CollapseContextProvider>
    <div className={styles.layout}>{children}</div>
  </CollapseContextProvider>
);

export default Layout;
