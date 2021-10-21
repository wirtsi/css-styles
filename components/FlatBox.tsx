import React, { FC, HTMLAttributes } from 'react';

import classnames from 'classnames';
import styles from "./FlatBox.module.css";

export type FlatBoxProps = HTMLAttributes<HTMLDivElement> & {
  variant: 'grey' | 'white';
};

export const FlatBox: FC<FlatBoxProps> = ({
  children,
  className,
  variant,
  ...otherProps
}) => {
  return (
    <div
    className={classnames(styles.flatbox, {[styles.grey]: variant === "grey"})}
      {...otherProps}
    >
      {children}
    </div>
  );
};
