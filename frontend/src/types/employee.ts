import { EmployeeStatuses } from "../shared/contants/employee";

interface IEmployee {
  id: number;
  name: string;
  status: `${EmployeeStatuses}`;
  img: string;
}

export type { IEmployee };
