import React, { FC, HTMLProps } from "react";
import classnames from "classnames";

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
      className={classnames(className, "radioLabel", {
        "required": isRequired,
        "error": hasError,
        "disabled": disabled,
      })}
    >
      {children}{" "}
      <style jsx>{`
        .radioLabel {
          cursor: pointer;
          display: -webkit-inline-box;
          display: -ms-inline-flexbox;
          display: inline-flex;
        }

        .required:after {
          content: "*";
          display: inline-block;
          color: #ed1c24;
        }
        .error:before {
          content: "";
          display: inline-block;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          margin-right: 0.5rem;
          cursor: pointer;
          margin-top: -2px;
          background-image: url('data:image/svg + xml,%3Csvgwidth="24"height="24"xmlns="http://www.w3.org/2000/svg"%3E%3Cpathd="M20.4853301,3.51471991 C25.1716233,8.20101313 25.1716233,15.7989869 20.4853301,20.4852801 C15.7990369,25.1715733 8.20106313,25.1715733 3.51476991,20.4852801 C-1.1715233,15.7989869 -1.1715233,8.20101313 3.51476991,3.51471991 C8.20106313,-1.1715733 15.7990369,-1.1715733 20.4853301,3.51471991 Z M19.4246699,4.57538009 C15.3241631,0.474873305 8.67593687,0.474873305 4.57543009,4.57538009 C0.474923305,8.67588687 0.474923305,15.3241131 4.57543009,19.4246199 C8.67593687,23.5251267 15.3241631,23.5251267 19.4246699,19.4246199 C23.5251767,15.3241131 23.5251767,8.67588687 19.4246699,4.57538009 Z"fill="%23ed1c24"fill-rule="evenodd"/%3E%3C/svg%3E');
        }

        .disabled:before {
          content: "";
          display: inline-block;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          margin-right: 0.5rem;
          cursor: pointer;
          margin-top: -2px;
          background-image: url('data:image/svg + xml, %3Csvgwidth="24"height="24"xmlns="http://www.w3.org/2000/svg"%3E%3Cpathd="M20.4853301,3.51471991 C25.1716233,8.20101313 25.1716233,15.7989869 20.4853301,20.4852801 C15.7990369,25.1715733 8.20106313,25.1715733 3.51476991,20.4852801 C-1.1715233,15.7989869 -1.1715233,8.20101313 3.51476991,3.51471991 C8.20106313,-1.1715733 15.7990369,-1.1715733 20.4853301,3.51471991 Z M19.4246699,4.57538009 C15.3241631,0.474873305 8.67593687,0.474873305 4.57543009,4.57538009 C0.474923305,8.67588687 0.474923305,15.3241131 4.57543009,19.4246199 C8.67593687,23.5251267 15.3241631,23.5251267 19.4246699,19.4246199 C23.5251767,15.3241131 23.5251767,8.67588687 19.4246699,4.57538009 Z"fill="%23e6e6e6"fill-rule="evenodd"/%3E%3C/svg%3E');
        }
      `}</style>
    </label>
  );
};
