import React, { FC, HTMLProps } from "react";
import classnames from "classnames";
import styles from "./Logo.module.css";

export const Logo: FC<HTMLProps<HTMLLabelElement>> = ({ className }) => {
  return <div className={classnames(className, styles.logo)}> </div>;
};
