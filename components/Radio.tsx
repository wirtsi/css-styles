import React, { FC } from "react";
import classnames from "classnames";
import { Label } from "./Label";
import styles from "./Radio.module.scss";

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
    <div className={classnames("radioWrapper", classnames)}>
      <input
        className={classnames("radioInput")}
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
      <style jsx>
        {`
          .radioWrapper {
            position: relative;
            display: inline-block;
            margin-right: 1.0714285714rem;
          }
          .radioInput {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};
