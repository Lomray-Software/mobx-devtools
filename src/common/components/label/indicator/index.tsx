import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';
import styles from './styles.module.scss';

interface IIndicator {
  isOpen?: boolean;
}

/**
 * Indicator
 * @constructor
 */
const Indicator: FC<IIndicator> = ({ isOpen }) => {
  const isCollapsible = isOpen !== undefined;

  return (
    <div
      className={classNames(styles.indicator, isCollapsible ? styles.collapsible : styles.empty, {
        [styles.isOpen]: isOpen,
      })}
    >
      {isCollapsible && (
        <>
          <div className={classNames(styles.line, styles.vertical)} />
          <div className={styles.line} />
        </>
      )}
    </div>
  );
};

export default Indicator;
