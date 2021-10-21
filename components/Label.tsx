import React, { FC, HTMLProps } from "react";
import classnames from "classnames";
import styles from "./Label.module.css";

export interface LabelProps extends HTMLProps<HTMLLabelElement> {
  isRequired?: boolean;
  labelPosition?: "normal" | "side";
  hasError?: boolean;
  disabled?: boolean;
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  isRequired,
  hasError,
  disabled,
  labelPosition,
  ...otherProps
}) => {
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <label
      {...otherProps}
      className={classnames(className, styles.radioLabel, {
        [styles.required]: isRequired,
        [styles.error]: hasError,
        [styles.disabled]: disabled,
      })}
    >
      {children}{" "}
    </label>
  );
};
