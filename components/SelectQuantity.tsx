import React, {
  FC,
  ChangeEvent,
  HTMLAttributes,
  SelectHTMLAttributes,
} from 'react';

import {
  combineClassNames,
  prefixedClassNames,
} from '../helpers/classnames';
import Icon from './Icon';

export interface SelectQuantityProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
  value: number;
}

const SelectQuantity: FC<SelectQuantityProps> = ({
  children,
  className,
  onChange,
  selectProps,
  value,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      className={combineClassNames({
        prefix: ['select'],
        plain: className,
      })}
    >
      <Icon className={prefixedClassNames('select__arrow')}>
        <img src="./down.png" />
      </Icon>
      <select
        {...selectProps}
        value={value}
        className={prefixedClassNames('select__input')}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
};

export default SelectQuantity;
