import { FC, Dispatch, SetStateAction, useState } from "react";
import Select, { OnChangeValue } from "react-select";
import makeAnimated from "react-select/animated";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../LanguageSwitcher/translation";
import { IOption } from "../../interfaces/select-interface/select.interfaces";
import { Sort, getSortedProducts } from "./Sort";
import { Accessories } from "../../interfaces/accessories";
import { Phone } from "../../interfaces/phones";

export type Product = Accessories | Phone;

interface CustomSelectProps {
  products: Product[];
  setProducts?: Dispatch<SetStateAction<Product[]>>; 
  setAccessoriesProducts?: Dispatch<SetStateAction<Accessories[]>>; 
  setPhonesProducts?: Dispatch<SetStateAction<Phone[]>>;
}

const animatedComponents = makeAnimated();

export const CustomSelect: FC<CustomSelectProps> = ({
  products,
  setProducts,
  setPhonesProducts,
}) => {
  const [currentSort, setCurrentSort] = useState<Sort[]>([]);
  const { currentLanguage } = useLanguage();

  const getValue = () => {
    return options.filter((option) =>
      currentSort.includes(option.value as Sort)
    );
  };

  const isPhone = (product: Product): product is Phone => "phoneId" in product;

  const onChange = (newValue: OnChangeValue<IOption, true>) => {
    if (Array.isArray(newValue)) {
      const newSortValues = newValue.map((option) => option.value as Sort);
      setCurrentSort(newSortValues);

      if (newSortValues.length > 0) {
        const phoneProducts = products.filter(isPhone);
        const sortedProducts = getSortedProducts(
          phoneProducts,
          newSortValues[0]
        );

        if (setPhonesProducts) {
          setPhonesProducts(sortedProducts as Phone[]); 
        } else if (setProducts) {
          setProducts(sortedProducts as Product[]);
        }
      }
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
