import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import api from "../../../shared/utils/api";
import { EmployeeStatuses } from "../../../shared/contants/employee";
import { statusOptions } from "../../../entities/employee-status-filter/model/constants";

import { Button } from "../../../shared/ui/button";
import { Input } from "../../../shared/ui/input";

import * as SC from "./styled";

enum FormNames {
  NAME = "name",
  STATUS = "status",
}
type FormTypes = {
  [FormNames.NAME]: string;
  [FormNames.STATUS]: `${EmployeeStatuses}` | "";
};

function CreateModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const queryClient = useQueryClient();
  const [name, setName] = React.useState("");
  const { handleSubmit, register, control, reset } = useForm<FormTypes>({
    defaultValues: {
      [FormNames.NAME]: "",
      [FormNames.STATUS]: EmployeeStatuses.WORKING,
    },
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const onSubmit = async (payload: FormTypes) => {
    try {
      const { data } = await api.post("/users", payload);

      if (data) {
        queryClient.invalidateQueries({ queryKey: ["employee-list"] });
        onClose();
        reset();
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!isOpen) return null;

  return (
    <SC.ModalOverlay>
      <SC.ModalContent>
        <SC.ModalTitle>Create New User</SC.ModalTitle>
        <SC.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register(FormNames.NAME)}
            type="text"
            value={name}
            label="User name"
            onChange={handleNameChange}
            placeholder="Enter name"
          />
          <label>
            Status:
            <Controller
              name={FormNames.STATUS}
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                const { onChange, value } = field;
                return (
                  <SC.Select value={value} onChange={onChange}>
                    {statusOptions.map((o) => (
                      <option key={o.id} value={o.value}>
                        {o.value}
                      </option>
                    ))}
                  </SC.Select>
                );
              }}
            />
          </label>
          <SC.ButtonsWrapper>
            <Button type="submit" label="Create" />
            <SC.CancelButton
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
              label="Cancel"
            />
          </SC.ButtonsWrapper>
        </SC.Form>
      </SC.ModalContent>
    </SC.ModalOverlay>
  );
}

export { CreateModal };
