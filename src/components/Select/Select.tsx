import { FC, Dispatch, SetStateAction } from 'react';
import './SelectStyles.scss';
import Select, { OnChangeValue } from 'react-select';
import { useState } from 'react';
import { IOption } from '../../interfaces/select-interface/select.interfaces';
import makeAnimated from 'react-select/animated';
import { Sort, getSortedProducts } from './Sort';
import { Phone } from '../../interfaces/phones';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../LanguageSwitcher/translation';

interface CustomSelectProps {
  products: Phone[];
  setProducts: Dispatch<SetStateAction<Phone[]>>;
}

const animatedComponents = makeAnimated();

const CustomSelect: FC<CustomSelectProps> = ({ products, setProducts }) => {
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

    const sortedProducts = getSortedProducts(products, newSortValues[0]);
    setProducts(sortedProducts);
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
        placeholder={translations[currentLanguage].chooseOptionLabel}
      />
    </div>
  );
};

export default CustomSelect;
