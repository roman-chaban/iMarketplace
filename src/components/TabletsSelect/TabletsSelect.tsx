import { FC, Dispatch, SetStateAction } from 'react';
import '../Select/select.scss';
import Select, { OnChangeValue } from 'react-select';
import { useState } from 'react';
import { IOption } from '../../interfaces/select-interface/select.interfaces';
import makeAnimated from 'react-select/animated';
import { Sort, getSortedProducts } from './Sort';
import { Tablet } from '../../interfaces/tablets';

interface CustomSelectProps {
  tablets: Tablet[];
  setTablets: Dispatch<SetStateAction<Tablet[]>>;
}

const options: IOption[] = [
  {
    label: 'Name',
    value: Sort.alphabet,
  },
  {
    label: 'Models',
    value: Sort.newest,
  },
  {
    label: 'Price',
    value: Sort.cheapest,
  },
];

const animatedComponents = makeAnimated();

const TabletsSelect: FC<CustomSelectProps> = ({ tablets, setTablets }) => {
  const [currentSort, setCurrentSort] = useState<Sort[]>([]);

  const getValue = () => {
    return currentSort
      ? options.filter(
          (option) => currentSort.indexOf(option.value as Sort) >= 0
        )
      : [];
  };

  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
    const newSortValues = (newValue as IOption[]).map((v) => v.value as Sort);
    setCurrentSort(newSortValues);

    const sortedTablets = getSortedProducts(tablets, newSortValues[0]);
    setTablets(sortedTablets);
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

export default TabletsSelect;
