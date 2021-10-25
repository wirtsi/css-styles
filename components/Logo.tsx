import React, { FC, HTMLProps } from "react";
import classnames from "classnames";
import styles from "./Logo.module.css";

export const Logo: FC<HTMLProps<HTMLLabelElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={classnames(className, styles.logo)}>
      <style jsx>{`
        position: absolute;
        height: 32px;
        width: 32px;
        background-size: contain;
        background-repeat: no-repeat;
        right: 16px;
        top: 4px;
      `}</style>
      {children}
    </div>
  );
};
