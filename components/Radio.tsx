import React, { FC } from 'react';
import {
  combineClassNames,
  prefixedClassNames,
} from '../helpers/classnames';
import { Label } from './Label';

export interface RadioProps extends React.ComponentPropsWithoutRef<'input'> {
  hasError?: boolean;
}

export const Radio: FC<RadioProps> = ({
  children,
  hasError,
  className,
  ...otherProps
}) => {
  const { disabled, checked, id } = otherProps;

  const wrapperClassName = combineClassNames({
    prefix: [
      'radio',
      {
        'radio--error': hasError,
        'radio--disabled': disabled && !checked,
        'radio--checked-disabled': disabled && checked,
      },
    ],
    plain: className,
  });

  const labelClassName = prefixedClassNames([
    'radio__label',
    {
      'radio__label--error': hasError,
      'radio__label--disabled': disabled && !checked,
      'radio__label--notClickable': disabled && checked,
      'radio__label--default': !hasError && !disabled,
    },
  ]);

  return (
    <div className={wrapperClassName}>
      <input
        className={prefixedClassNames('radio__input')}
        type="radio"
        {...otherProps}
      />
      <Label htmlFor={id} className={labelClassName} isRequired={false}>
        {children}
      </Label>
    </div>
  );
};
