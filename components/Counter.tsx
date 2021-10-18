import React, {
  FC,
  ButtonHTMLAttributes,
  HTMLAttributes,
  useState,
} from "react";
import Icon from "./Icon";
import { combineClassNames, prefixedClassNames } from "../helpers/classnames";

type ControlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const MinusButton: FC<ControlButtonProps> = ({ disabled, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={prefixedClassNames("counter__btn", "counter__btn--left")}
      type="button"
    >
      <Icon
        className={combineClassNames({
          prefix: "counter__icon",
          plain: "v5-icon--minus-mid",
        })}
        style={{fontSize: 24}}
      ></Icon>
    </button>
  );
};

const PlusButton: FC<ControlButtonProps> = ({ disabled, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={prefixedClassNames("counter__btn", "counter__btn--right")}
      type="button"
    >
      <Icon
        className={combineClassNames({
          prefix: "counter__icon",
          plain: "v5-icon--plus-mid",
        })}
        style={{fontSize: 24}}
      ></Icon>
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
    <div
      {...otherProps}
      className={combineClassNames({
        prefix: "counter",
        plain: className,
      })}
    >
      <MinusButton
        aria-label={minusAriaLabel}
        disabled={isDisabled}
        onClick={() => updateQuantity(-1)}
      />
      <input
        className={prefixedClassNames("counter__input")}
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
    </div>
  );
};

export default Counter;
