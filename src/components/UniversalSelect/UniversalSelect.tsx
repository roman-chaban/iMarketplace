import { FC } from "react";
import Select, { OnChangeValue, SingleValue } from "react-select";
import makeAnimated from "react-select/animated";
import { IOption } from "../../interfaces/select-interface/select.interfaces";

interface UniversalSelectProps {
  options: IOption[];
  value: SingleValue<IOption>;
  onChange: (newValue: OnChangeValue<IOption, boolean>) => void;
  placeholder: string;
  isMulti?: boolean;
}

const animatedComponents = makeAnimated();

export const UniversalSelect: FC<UniversalSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  isMulti = false,
}) => {
  return (
    <div className="select">
      <Select
        value={value}
        onChange={onChange}
        options={options}
        components={animatedComponents}
        isMulti={isMulti}
        placeholder={placeholder}
      />
    </div>
  );
};
