import { FC } from 'react';
import './select.scss';
import Select, { OnChangeValue } from 'react-select';
import { useState } from 'react';
import { IOption } from '../../interfaces/select-interface/select.interfaces';
import makeAnimated from 'react-select/animated';

const options: IOption[] = [
  {
    label: 'Name',
    value: 'Sort by name',
  },
  {
    label: 'Models',
    value: 'Sort by models',
  },
  {
    label: 'Price',
    value: 'Sort by price',
  },
];

const animatedComponents = makeAnimated();

const CustomSelect: FC = () => {
  const [currentSort, setCurrentSort] = useState(['Name', 'Models', 'Price']);

  const getValue = () => {
    return currentSort
      ? options.filter((option) => currentSort.indexOf(option.value) >= 0)
      : [];
  };

  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setCurrentSort((newValue as IOption[]).map((v: any) => v.value));
  };

  return (
    <div className='select'>
      <Select
        classNamePrefix='custom-select'
        value={getValue()}
        onChange={onChange}
        options={options}
        components={animatedComponents}
        isMulti
        placeholder='Choose an option'
      />
    </div>
  );
};

export { CustomSelect };
