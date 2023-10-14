import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import React from 'react';
import Indicator from './indicator';
import styles from './styles.module.scss';

interface ILabel {
  onClick?: () => void;
  isOpen?: boolean | null;
  dataType?: 'array' | 'object' | string;
}

const dataTypeToString = (dataType: ILabel['dataType']) => {
  switch (dataType) {
    case 'object':
      return '<{}>';

    case 'array':
      return '<[]>';

    case 'boolean':
      return '<bool>';

    default:
      return `<${dataType ?? 'n/a'}>`;
  }
};

/**
 * Label
 * @constructor
 */
const Label: FCC<ILabel> = ({ children, isOpen, dataType, onClick }) => (
  <div className={styles.label} onClick={onClick} role="presentation">
    <Indicator isOpen={isOpen} />
    <div className={styles.value}>
      <span className={styles.inner}>{children}</span>
      {Boolean(dataType) && (
        <small>
          <code>{dataTypeToString(dataType)}</code>
        </small>
      )}
    </div>
  </div>
);

export default Label;
