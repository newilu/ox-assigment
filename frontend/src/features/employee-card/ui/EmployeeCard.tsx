import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useAuth } from "../../../context/auth";
import { EmployeeStatuses } from "../../../shared/contants/employee";
import api from "../../../shared/utils/api";
import { IEmployee } from "../../../types/employee";

import * as SC from "./styled";

function EmployeeCard({
  employee,
  onUpdate = () => {},
}: {
  employee: IEmployee;
  onUpdate?: () => void;
}) {
  const queryClient = useQueryClient();
  const [status, setStatus] = React.useState<`${EmployeeStatuses}`>(
    employee.status,
  );
  const { refreshAccessToken } = useAuth();

  const handleStatusChange = async (newStatus: `${EmployeeStatuses}`) => {
    try {
      await api.post(`/users/${employee.id}`, { status: newStatus });
      setStatus(newStatus);
      onUpdate();
      await queryClient.invalidateQueries({ queryKey: ["employee-list"] });
    } catch (err: any) {
      if (err.response?.status === 401) {
        try {
          await refreshAccessToken();
          await api.post(`/users/${employee.id}`, { status: newStatus });
          setStatus(newStatus);
          onUpdate();
        } catch (refreshErr) {
          alert("Session expired, please log in again");
        }
      } else {
        alert("Error updating status");
      }
    }
  };

  return (
    <SC.Card>
      <SC.Image src={employee.img} alt={employee.name} />
      <div style={{ flex: 1 }}>
        <SC.Name>{employee.name}</SC.Name>
        <SC.StatusContainer>
          <SC.StatusDot status={status} />
          <select
            id={`employee=${employee.id}-status-select`}
            onChange={(e) =>
              handleStatusChange(e.target.value as `${EmployeeStatuses}`)
            }
            value={status}
          >
            {Object.values(EmployeeStatuses).map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </SC.StatusContainer>
      </div>
    </SC.Card>
  );
}

export { EmployeeCard };
