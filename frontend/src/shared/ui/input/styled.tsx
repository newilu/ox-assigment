import styled, { css } from "styled-components";

export const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.3px;
  text-align: left;
  color: var(--color-secondary);
  text-transform: capitalize;
`;

export const HelperText = styled.div<{ $error: boolean }>`
  padding-left: 9px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-top: 4px;
  color: ${(props) => (props.$error ? "#ff005f" : "#202022")};
`;

export const Input = styled.input`
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.3px;
  color: var(--color-primary);
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  background: var(--bg-secondary);
  padding: 6px 2px;
  border-radius: 11px;

  &::placeholder {
    color: var(--color-secondary);
  }

  &::-ms-input-placeholder {
    color: var(--color-secondary);
  }

  ${(props) =>
    props.type === "password" &&
    css`
      font-size: 20px;
      text-overflow: unset;

      &::placeholder {
        font-size: 16px;
      }
    `}
`;

export const Root = styled.div<{ $error: boolean }>`
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 40px;
  position: relative;
  border-bottom: 1px solid var(--border-color);

  > svg,
  img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    stroke: var(--color-secondary);
    color: var(--color-secondary);
  }

  ${(props) =>
    props.$error &&
    css`
      background: var(--color-error);
    `}
`;
