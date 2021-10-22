import React, {
  FC,
  ButtonHTMLAttributes,
  HTMLAttributes,
  useState,
} from "react";
import Icon from "./Icon";
import classnames from "classnames";
import { buttonColor} from "../styles/variables"

type ControlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const MinusButton: FC<ControlButtonProps> = ({ disabled, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={classnames("btn", "btnLeft")}
      type="button"
    >
      <Icon
        className={classnames("v5-icon--minus-mid")}
        style={{ fontSize: 24 }}
      ></Icon>
      <style jsx>{`
        .btn {
          border: none;
          color: #fff;
          background-color: ${buttonColor};
          min-width: 30px;
          width: 30px;
          cursor: pointer;
          padding: 0;
        }
        .btnLeft {
          border-radius: 5px 0 0 5px;
        }
        .btnRight {
          border-radius: 0 5px 5px 0;
        }
      `}</style>
    </button>
  );
};

const PlusButton: FC<ControlButtonProps> = ({ disabled, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={classnames("btn", "btnRight")}
      type="button"
    >
      <Icon
        className={classnames("v5-icon--plus-mid")}
        style={{ fontSize: 24 }}
      ></Icon>
      <style jsx>{`
        .btn {
          border: none;
          color: #fff;
          /* this should only see the local buttonColor */
          background-color: ${buttonColor};
          min-width: 30px;
          width: 30px;
          cursor: pointer;
          padding: 0;
        }
        .btnLeft {
          border-radius: 5px 0 0 5px;
        }
        .btnRight {
          border-radius: 0 5px 5px 0;
        }
      `}</style>
    </button>
  );
};

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  minusAriaLabel: string;
  plusAriaLabel: string;
  onKeyUp: () => void;
  onQuantityModified: (value: number) => void;
  inputAriaLabel: string;
  isDisabled?: boolean;
}

const Counter: FC<CounterProps> = ({
  className,
  minusAriaLabel,
  plusAriaLabel,
  onQuantityModified,
  onKeyUp,
  inputAriaLabel,
  isDisabled = false,
  ...otherProps
}) => {
  const [value, setValue] = useState(0);

  const updateQuantity = (increment: 1 | -1) => {
    if (increment === -1 && value < 1) {
      return;
    }
    setValue((oldValue) => {
      const newValue = oldValue + increment;
      onQuantityModified(newValue);
      return newValue;
    });
  };

  const handleInput = () => {
    setValue(value);
  };

  return (
    <div {...otherProps} className={classnames("counter", className)}>
      <MinusButton
        aria-label={minusAriaLabel}
        disabled={isDisabled}
        onClick={() => updateQuantity(-1)}
      />
      <input
        className={classnames("counterInput")}
        value={value}
        type="text"
        aria-label={inputAriaLabel}
        maxLength={3}
        onKeyUp={onKeyUp}
        onChange={handleInput}
      />
      <PlusButton
        aria-label={plusAriaLabel}
        disabled={isDisabled}
        onClick={() => updateQuantity(1)}
      />
      <style jsx>
        {`
          .counter {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            width: 90px;
            height: 36px;
          }
          .counterInput {
            background-color: transparent;
            width: 30px;
            padding: 0;
            text-align: center;
            border-radius: 0;
            border: none;
          }
        `}
      </style>
    </div>
  );
};

export default Counter;
