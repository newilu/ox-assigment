import React from "react";

import * as SC from "./styled";
import { Clear } from "../../../svg/Clear";
import { EyeClose } from "../../../svg/EyeClose";
import { Eye } from "../../../svg/Eye";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
  value?: string | number;
  name: string;
  id?: string;
}

const Input = React.forwardRef<any, InputProps>(
  (
    { label, type, helperText, error = false, value, className, ...props },
    ref,
  ) => {
    const [isRevealed, setIsRevealed] = React.useState(false);

    const isPassword = type === "password";

    return (
      <div className={className}>
        {label && <SC.Label>{label}</SC.Label>}
        <SC.Root $error={error}>
          <SC.Input
            {...props}
            ref={ref}
            type={isRevealed ? "text" : type}
            value={value}
            onChange={(e) => {
              props.onChange?.(e);
            }}
          />
          {!isPassword && !!value && (
            <Clear
              onClick={() => props.onChange?.({ target: { value: "" } } as any)}
            />
          )}
          {isPassword &&
            (isRevealed ? (
              <EyeClose
                onClick={() => {
                  setIsRevealed((prev) => !prev);
                }}
              />
            ) : (
              <Eye
                onClick={() => {
                  setIsRevealed((prev) => !prev);
                }}
              />
            ))}
        </SC.Root>
        {helperText && (
          <SC.HelperText $error={error}>{helperText}</SC.HelperText>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
