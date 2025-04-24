import styled from "styled-components";
import { Button } from "../../../shared/ui/button";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.div`
  padding: 24px 16px;
  border-bottom: 1px solid var(--border-color);
  font-size: 20px;
  font-weight: 700;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 400px;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Form = styled.form`
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 17px;
    color: var(--color-secondary);
    gap: 6px;
  }
`;

export const Select = styled.select`
  padding: 6px 16px 6px 0;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
`;

export const CancelButton = styled(Button)`
  background: transparent;
  color: var(--color-primary);
`;
