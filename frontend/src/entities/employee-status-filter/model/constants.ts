import { EmployeeStatuses } from "../../../shared/contants/employee";

const statusOptions = [
  {
    id: "2",
    value: EmployeeStatuses.WORKING,
    label: EmployeeStatuses.WORKING,
  },
  {
    id: "3",
    value: EmployeeStatuses.LUNCH_TIME,
    label: EmployeeStatuses.LUNCH_TIME,
  },
  {
    id: "4",
    value: EmployeeStatuses.BUSINESS_TRIP,
    label: EmployeeStatuses.BUSINESS_TRIP,
  },
  {
    id: "1",
    value: EmployeeStatuses.ON_VACATION,
    label: EmployeeStatuses.ON_VACATION,
  },
];

export { statusOptions };
