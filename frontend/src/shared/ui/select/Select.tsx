import React from "react";

import * as SC from "./styled";
import useOutsideClick from "../../utils/hooks/useOutsideClick";

export type Option = {
  id: string;
  label: string;
  value: any;
  iconUrl?: string;
};
type CommonProps<T extends Option> = {
  options: T[];
  id: string;
  value?: T | null;
  error?: boolean;
  placeholder?: string;
  label?: string;
};

type PropsWithoutCancel<T extends Option> = CommonProps<T> & {
  hasCancel?: false;
  onChange?: (value: T) => void;
};

type PropsWithCancel<T extends Option> = CommonProps<T> & {
  hasCancel: true;
  onChange?: (value: T | null) => void;
};

type SelectProps<T extends Option> = PropsWithoutCancel<T> | PropsWithCancel<T>;

// перегрузки
function Select<T extends Option>(props: PropsWithoutCancel<T>): JSX.Element;
function Select<T extends Option>(props: PropsWithCancel<T>): JSX.Element;

function Select<T extends Option>({
  options,
  id,
  onChange,
  value = null,
  error = false,
  placeholder = "Select an option",
  label,
  hasCancel = false,
}: SelectProps<T>) {
  const [selected, setSelected] = React.useState<T | null>(value);
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useOutsideClick(ref, (e) => {
    if ((e.target as HTMLElement).id === `${id}_selected`) return;
    setOpen(false);
  });

  React.useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <div>
      {label && <SC.Label>{label}</SC.Label>}
      <SC.Root id={id}>
        <SC.SelectItemSelected
          id={`${id}_selected`}
          onClick={() => setOpen((p) => !p)}
          $placeholder={!selected}
          $error={error}
        >
          {selected?.iconUrl && (
            <SC.IconWrapper>
              <img width={20} height={20} src={selected.iconUrl} alt="" />
            </SC.IconWrapper>
          )}
          {selected ? selected.label : placeholder}
        </SC.SelectItemSelected>

        <SC.SelectItemsList ref={ref} $open={open}>
          {hasCancel && (
            <SC.SelectItem
              onClick={() => {
                onChange?.(null as any);
                setSelected(null);
                setOpen(false);
              }}
              $active={!selected?.id}
            >
              <div style={{ color: "var(--color-tertiary)" }}>
                ( Cancel Selection )
              </div>
            </SC.SelectItem>
          )}
          {options.map((o: T) => (
            <SC.SelectItem
              key={o.id ?? o.label}
              onClick={() => {
                onChange?.(o);
                setSelected(o);
                setOpen(false);
              }}
              $active={o.id === selected?.id}
            >
              {o.iconUrl && (
                <SC.IconWrapper>
                  <img width={20} height={20} src={o.iconUrl} alt="" />
                </SC.IconWrapper>
              )}
              {o.label}
            </SC.SelectItem>
          ))}
        </SC.SelectItemsList>
      </SC.Root>
    </div>
  );
}

export { Select };
