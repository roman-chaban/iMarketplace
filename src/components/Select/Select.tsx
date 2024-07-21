import { FC, Dispatch, SetStateAction } from "react";
import "./SelectStyles.scss";
import Select, { OnChangeValue } from "react-select";
import { useState } from "react";
import makeAnimated from "react-select/animated";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../LanguageSwitcher/translation";
import { IOption } from "../../interfaces/select-interface/select.interfaces";
import { Phone } from "../../interfaces/phones";
import { Sort, getSortedProducts } from "./Sort";

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
      ? options.filter((option) => currentSort.includes(option.value as Sort))
      : [];
  };

  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
    const newSortValues = (newValue as IOption[]).map((v) => v.value as Sort);
    setCurrentSort(newSortValues);

    if (newSortValues.length > 0) {
      const sortedProducts = getSortedProducts(products, newSortValues[0]);
      setProducts(sortedProducts);
    }
  };

  const options: IOption[] = [
    {
      label: translations[currentLanguage].optionsLabels.name,
      value: Sort.ALPHABET,
    },
    {
      label: translations[currentLanguage].optionsLabels.models,
      value: Sort.CHEAPEST,
    },
    {
      label: translations[currentLanguage].optionsLabels.price,
      value: Sort.DISCOUNT,
    },
  ];

  return (
    <div className="select">
      <Select
        classNamePrefix="custom-select"
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
