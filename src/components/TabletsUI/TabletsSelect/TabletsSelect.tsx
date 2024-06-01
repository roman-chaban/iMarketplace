import { FC, Dispatch, SetStateAction } from 'react';
import '../../Select/SelectStyles.scss';
import Select, { OnChangeValue } from 'react-select';
import { useState } from 'react';
import { IOption } from '../../../interfaces/select-interface/select.interfaces';
import makeAnimated from 'react-select/animated';
import { Sort, getSortedProducts } from './Sort';
import { Tablet } from '../../../interfaces/tablets';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../LanguageSwitcher/translation';

interface CustomSelectProps {
  tablets: Tablet[];
  setTablets: Dispatch<SetStateAction<Tablet[]>>;
}

const animatedComponents = makeAnimated();

const TabletsSelect: FC<CustomSelectProps> = ({ tablets, setTablets }) => {
  const [currentSort, setCurrentSort] = useState<Sort[]>([]);
  const { currentLanguage } = useLanguage();

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

  const options: IOption[] = [
    {
      label: translations[currentLanguage].optionsLabels.name,
      value: Sort.alphabet,
    },
    {
      label: translations[currentLanguage].optionsLabels.models,
      value: Sort.newest,
    },
    {
      label: translations[currentLanguage].optionsLabels.price,
      value: Sort.cheapest,
    },
  ];

  return (
    <div className='select'>
      <Select
        classNamePrefix='custom-select'
        value={getValue()}
        onChange={onChange}
        options={options}
        components={animatedComponents}
        isMulti
        placeholder={translations[currentLanguage].sortBy}
      />
    </div>
  );
};

export default TabletsSelect;
