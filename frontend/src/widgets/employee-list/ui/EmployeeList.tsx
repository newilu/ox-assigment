import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { useAuth } from "../../../context/auth";
import { EmployeeStatusFilter } from "../../../entities/employee-status-filter/ui";
import { CreateModal } from "../../../features/create-modal/ui/CreateModal";
import { EmployeeCard } from "../../../features/employee-card/ui";
import { Button } from "../../../shared/ui/button";
import api from "../../../shared/utils/api";
import { useDebounce } from "../../../shared/utils/hooks/useDebounce";
import { IEmployee } from "../../../types/employee";

import * as SC from "./styled";

function EmployeeList() {
  const { auth } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { data = [], isLoading } = useQuery<IEmployee[]>({
    queryKey: ["employee-list", filterStatus, debouncedSearchTerm] as const,
    queryFn: ({ queryKey }) =>
      api
        .get(
          `/users?status=${encodeURIComponent(queryKey[1] as string)}&search=${encodeURIComponent(queryKey[2] as string)}`,
        )
        .then((d) => d.data),
    enabled: Boolean(auth.accessToken),
  });

  return (
    <div className="container">
      <SC.Header>
        <Button
          size="large"
          onClick={() => setIsModalOpen(true)}
          label="Create"
        />
        <SC.InputWithSelect>
          <SC.Input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          |
          <EmployeeStatusFilter hasCancel={true} onChange={setFilterStatus} />
        </SC.InputWithSelect>
      </SC.Header>

      {!isLoading && !data.length && (
        <div className="placeholder">
          No employees found{" "}
          {debouncedSearchTerm
            ? ` for given filter: '${debouncedSearchTerm}'`
            : ""}
        </div>
      )}
      <SC.Grid>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          !!data.length &&
          data.map((emp: any) => <EmployeeCard key={emp.id} employee={emp} />)}
      </SC.Grid>
      <CreateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export { EmployeeList };
