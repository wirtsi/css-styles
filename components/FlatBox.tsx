import React, { FC, HTMLAttributes } from "react";

import classnames from "classnames";

export type FlatBoxProps = HTMLAttributes<HTMLDivElement> & {
  variant: "grey" | "white";
};

export const FlatBox: FC<FlatBoxProps> = ({
  children,
  className,
  variant,
  ...otherProps
}) => {
  return (
    <div
      className={classnames("flatbox",{
        grey: variant === "grey",
      })}
      {...otherProps}
    >
      {children}
      <style jsx>{`
        .grey {
          border: 2px solid #e6e6e6;
        }

        .flatbox {
          position: relative;
          padding: 0.7142857143rem;
          background-color: var(--backgroundColor);
        }
      `}</style>
    </div>
  );
};
