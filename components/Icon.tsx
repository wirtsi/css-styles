import React, { FC, HTMLAttributes } from "react";
import classnames from "classnames";

const Icon: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...otherProps
}) => (
  <i {...otherProps} className={classnames(className)}>
    <style jsx>{`
    i {
        display: inline-block;
        fill: #fff;
        height: 1.7142857143rem;
        vertical-align: middle;
    }`}</style>
    {children}
  </i>
);

export default Icon;
