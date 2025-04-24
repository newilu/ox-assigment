import React from "react";
import { EmployeeStatuses } from "../../../shared/contants/employee";
import { Select } from "../../../shared/ui/select";
import { statusOptions } from "../model/constants";

interface EmployeeStatusFilterProps {
  onChange?: (status: `${EmployeeStatuses}` | "") => void;
  hasCancel?: boolean;
  id?: string;
  value?: `${EmployeeStatuses}` | "";
}

function EmployeeStatusFilter({
  onChange = () => {},
  hasCancel,
  id: idProps,
  value,
}: EmployeeStatusFilterProps) {
  const id = React.useId();

  return (
    <Select
      value={statusOptions.find((o) => o.value === value) ?? null}
      hasCancel={hasCancel as React.ComponentProps<typeof Select>["hasCancel"]}
      id={idProps ?? id}
      options={statusOptions}
      onChange={(o) => onChange(o?.value ?? "")}
      placeholder="Filter by status"
    />
  );
}

export { EmployeeStatusFilter };
