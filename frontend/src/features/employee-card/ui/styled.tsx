import styled from "styled-components";
import { EmployeeStatuses } from "../../../shared/contants/employee";

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px 16px;
  display: flex;
  align-items: flex-end;
  gap: 20px;

  &:hover {
    box-shadow: 4px 4px 20px 1px var(--color-accent-40);
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const Name = styled.h2`
  color: var(--color-primary);
  font-size: 20px;
  width: 100%;
  margin-bottom: 10px;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 5px;
  cursor: pointer;

  select {
    cursor: pointer;
    width: 100%;
    border: none;
    outline: none;
    color: var(--color-primary);
    font-weight: 500;
  }
`;

export const StatusDot = styled.span<{ status: `${EmployeeStatuses}` }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${(props) => {
    switch (props.status) {
      case EmployeeStatuses.WORKING:
        return "green";
      case EmployeeStatuses.ON_VACATION:
        return "red";
      case EmployeeStatuses.LUNCH_TIME:
        return "orange";
      case EmployeeStatuses.BUSINESS_TRIP:
        return "purple";
      default:
        return "gray";
    }
  }};
`;
