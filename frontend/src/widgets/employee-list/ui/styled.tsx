import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: var(--color-primary);
  font-size: 16px;
  line-height: 18px;
  padding: 10px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: var(--color-secondary);
  }
`;

export const InputWithSelect = styled.div`
  border-radius: 5px;
  padding: 0 16px;
  gap: 16px;
  color: var(--color-secondary);
  background: var(--bg-secondary);
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin: 50px 0;
`;
