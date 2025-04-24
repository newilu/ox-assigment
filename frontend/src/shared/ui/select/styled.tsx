import styled, { css } from "styled-components";

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100vmax;
  background: var(--color-primary-40);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 14px;
    height: 14px;
  }
`;

export const Label = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.3px;
  text-align: left;
  color: var(--color-primary);
  text-transform: capitalize;
`;

export const SelectItemSelected = styled.div<{
  $placeholder: boolean;
  $error: boolean;
}>`
  overflow: hidden;
  background: var(--bg-secondary);
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 12px;
  padding: 12px 16px;
  color: var(--color-primary);
  border: 1px solid var(--color-primary-60);

  ${(props) =>
    props.$placeholder &&
    css`
      color: var(--color-primary-60);
      font-weight: 500;
    `}

  ${(props) =>
    props.$error &&
    css`
      border: 1px solid var(--color-error);
    `}
`;

export const SelectItem = styled.div<{ $active: boolean }>`
  color: var(--color-primary);
  padding: 15px;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: var(--bg-primary);
  }

  &:not(&:first-child) {
    border-top: 1px solid var(--border-color);
  }

  ${(props) =>
    props.$active &&
    css`
      background: var(--bg-primary);
      font-weight: 500;
    `}
`;

export const SelectItemsList = styled.div<{ $open: boolean }>`
  position: absolute;
  width: auto;
  top: 50px;
  border-radius: 6px 6px 12px 12px;
  background: var(--bg-secondary);
  max-height: 0;
  opacity: 0;
  overflow: auto;
  visibility: hidden;
  pointer-events: none;
  z-index: 5;
  transition: 0.2s all ease;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);

  ${(props) =>
    props.$open &&
    css`
      max-height: 300px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    `}
`;

export const Root = styled.div`
  position: relative;
  font-size: 16px;
  width: 100%;
  white-space: nowrap;
`;
