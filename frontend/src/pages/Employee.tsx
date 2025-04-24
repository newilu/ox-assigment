import React from "react";
import { Navbar } from "../widgets/navbar/ui";
import { EmployeeList } from "../widgets/employee-list/ui";

function EmployeePage() {
  return (
    <>
      <Navbar />
      <EmployeeList />
    </>
  );
}

export { EmployeePage };
