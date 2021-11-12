import React, { FC, HTMLProps } from "react";
import classnames from "classnames";
import {className as css} from "./Logo.css"

export const Logo: FC<HTMLProps<HTMLLabelElement>> = ({ className }) => {
  return <div className={classnames(className, css)}> </div>;
};
