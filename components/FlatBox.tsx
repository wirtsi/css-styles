import React, { FC, HTMLAttributes } from 'react';

import { combineClassNames } from '../helpers/classnames';

export type FlatBoxProps = HTMLAttributes<HTMLDivElement> & {
  variant: 'grey' | 'white';
  rounded?: boolean;
};

export const FlatBox: FC<FlatBoxProps> = ({
  children,
  className,
  variant,
  rounded,
  ...otherProps
}) => {
  const boxOrFlatbox = variant === 'white' && rounded ? 'box' : 'flatbox';
  return (
    <div
      className={combineClassNames({
        plain: className,
        prefix: [
          boxOrFlatbox,
          `${boxOrFlatbox}${rounded ? '' : '-rectangle'}--${variant}`,
        ],
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
};
