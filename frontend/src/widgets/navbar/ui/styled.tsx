import styled from "styled-components";

export const Root = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  background: var(--bg-secondary);
  width: 100%;
  height: 65px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    > a:first-of-type {
      font-size: 28px;
      font-weight: 700;
      text-transform: capitalize;
      color: var(--color-accent);
    }
  }
`;
