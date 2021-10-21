import React, { FC, HTMLProps } from 'react';
import { combineClassNames } from '../helpers/classnames';

export interface LabelProps extends HTMLProps<HTMLLabelElement> {
  isRequired?: boolean;
  labelPosition?: 'normal' | 'side';
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  isRequired,
  labelPosition,
  ...otherProps
}) => {
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <label
      {...otherProps}
      className={combineClassNames({
        prefix: [
          'form__label',
          {
            'form__label--required': isRequired,
            'form__label--side': labelPosition === 'side',
          },
        ],
        plain: className,
      })}
    >
      {children}{' '}
    </label>
  );
};
