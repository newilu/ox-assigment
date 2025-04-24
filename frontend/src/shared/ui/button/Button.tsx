import React from "react";
import { NavLink } from "react-router-dom";

import * as SC from "./styled";

function Button<T extends string | undefined = "button">({
  label,
  variant = "primary",
  as,
  fullWidth = false,
  size = "medium",
  ...props
}: ButtonProps<T>) {
  return (
    <SC.Root
      $size={size}
      $fullWidth={fullWidth}
      as={as === "a" ? NavLink : as}
      {...props}
      onClick={(e) => {
        e.stopPropagation();
        props.onClick?.(e);
      }}
      $variant={variant}
      disabled={props.disabled}
    >
      {label}
    </SC.Root>
  );
}

type ButtonProps<As extends string | React.ReactNode | undefined = "button"> =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: React.ReactNode;
    variant?: SC.ButtonVariant;
    fullWidth?: boolean;
    size?: SC.ButtonSize;
    as?: As;
  } & (As extends "a" ? React.ComponentProps<typeof NavLink> : {});

export type { ButtonProps };
export { Button };
