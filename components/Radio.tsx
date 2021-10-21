import React, { FC } from "react";
import classnames from "classnames";
import { Label } from "./Label";
import styles from "./Radio.module.css";

export interface RadioProps extends React.ComponentPropsWithoutRef<"input"> {
  hasError?: boolean;
  checked: boolean;
}

export const Radio: FC<RadioProps> = ({
  children,
  hasError,
  className,
  checked,
  ...otherProps
}) => {
  const { disabled, id } = otherProps;

  return (
    <div className={classnames(styles.radioWrapper, classnames)}>
      <input
        className={classnames(styles.radioInput)}
        type="radio"
        checked={checked}
        {...otherProps}
      />
      <Label
        htmlFor={id}
        isRequired={false}
        hasError={hasError}
        disabled={disabled}
      >
        {children}
      </Label>
    </div>
  );
};
