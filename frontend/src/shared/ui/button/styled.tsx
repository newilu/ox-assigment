import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "outlined";
export type ButtonSize = "medium" | "large";

export const Root = styled.button<{
  $variant: ButtonVariant;
  $size?: ButtonSize;
  $fullWidth?: boolean;
}>`
  --radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.2s var(--easing-func);
  cursor: pointer;
  width: fit-content;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    pointer-events: none;
    filter: brightness(0.6) grayscale(0.8);
  }

  ${({ $size }) => {
    switch ($size) {
      case "large":
        return css`
          padding: 16px 20px;
          height: 44px;
          font-size: 17px;
          font-weight: bold;
          line-height: 20px;
          text-align: center;
          border-radius: var(--radius);
          position: relative;
        `;
      case "medium":
        return css`
          padding: 10px 20px;
          height: 32px;
          font-size: 14px;
          font-weight: bold;
          line-height: 15px;
          text-align: center;
          border-radius: var(--radius);
          position: relative;
          margin-bottom: 3px;
        `;

      default:
        break;
    }
  }}

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return css`
          background: var(--color-accent);
          color: white;

          &:active {
            filter: brightness(0.9);
          }
        `;
      case "outlined":
        return css`
          background: transparent;
          color: var(--color-accent);
          border: 1px solid var(--color-accent);

          &:active {
            filter: brightness(0.9);
          }

          &:disabled {
            background: #20253e66;
          }
        `;
      default:
        break;
    }
  }}

  ${(props) =>
    props.$fullWidth &&
    css`
      max-width: unset;
      width: 100%;
    `}
`;

Root.defaultProps = {
  $variant: "primary",
  $size: "medium",
};
