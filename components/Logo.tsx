import React, { FC, HTMLProps } from "react";
import classnames from "classnames";
import styles from "./Logo.module.scss";

export const Logo: FC<HTMLProps<HTMLLabelElement>> = ({ className }) => {
  return <div className={classnames("logo", className, styles.logo)}> </div>;
};
