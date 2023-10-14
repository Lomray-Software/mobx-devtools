import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import React from 'react';
import Indicator from './indicator';
import Icon from './inner/icon';
import Title from './inner/title';
import Value from './inner/value';
import styles from './styles.module.scss';

interface ILabel {
  onClick?: () => void;
  isOpen?: boolean;
  dataType?: 'array' | 'object' | string;
}

export interface ILabelInner {
  color?: 'white' | 'yellow' | 'green' | 'purple' | 'pink' | 'blue' | 'orange';
}

type TLabel = FCC<ILabel> & {
  Icon: typeof Icon;
  Title: typeof Title;
  Value: typeof Value;
};

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
const Label: TLabel = ({ children, isOpen, dataType, onClick }) => (
  <div className={styles.label} onClick={onClick} role="presentation">
    <Indicator isOpen={isOpen} />
    <div className={styles.body}>
      <span className={styles.inner}>{children}</span>
      {Boolean(dataType) && (
        <small>
          <code>{dataTypeToString(dataType)}</code>
        </small>
      )}
    </div>
  </div>
);

Label.Icon = Icon;
Label.Title = Title;
Label.Value = Value;

export default Label;
