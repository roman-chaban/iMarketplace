/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useRef, useState, useEffect } from "react";
import styles from "../../AccessorCharacteristics/AccessorCharacteristicsStyles.module.scss";
import { Tablet } from "../../../interfaces/tablets";
import { useLanguage } from "../../../hooks/useLanguage";
import { translations } from "../../LanguageSwitcher/translation";
// import { CatalogButton } from "../AccessoriesUI/CatalogButton/CatalogButton";
// import { FavoriteButton } from "../AccessoriesUI/FavoriteButton/FavoriteButton";

interface TabletsCharacteristicsProps {
  selectMemory: string;
  setSelectMemory: (memory: string) => void;
  handleColorChange: (color: string) => void;
  selectColor: string;
  availableColors: string[];
  tablet: Tablet;
}

export const TabletCharacteristics: FC<TabletsCharacteristicsProps> = ({
  selectMemory: initialSelectMemory,
  setSelectMemory,
  handleColorChange,
  selectColor,
  availableColors,
  tablet,
}) => {
  const ramOptions = ["768MB", "1GB"];
  const [selectMemory, setSelectMemoryState] = useState<string>(initialSelectMemory);

  const { currentLanguage } = useLanguage();

  useEffect(() => {
    setSelectMemory(selectMemory);
    const index = ramOptions.indexOf(selectMemory);
    if (index !== -1) {
      updateButtonStyles(index);
    }
  }, [selectMemory]);

  const buttonsRefs: React.RefObject<HTMLButtonElement>[] = ramOptions.map(() =>
    useRef<HTMLButtonElement>(null)
  );

  const resetButtonStyles = (): void => {
    buttonsRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.background = "transparent";
        ref.current.style.color = "#313131";
      }
    });
  };

  const updateButtonStyles = (index: number) => {
    if (index >= 0 && index < buttonsRefs.length) {
      resetButtonStyles();
      const buttonRef = buttonsRefs[index]?.current;
      if (buttonRef) {
        buttonRef.style.background = "#313131";
        buttonRef.style.color = "#fff";
      } else {
        console.error(`Button ref at index ${index} is null or undefined`);
      }
    } else {
      console.error(`Index ${index} is out of bounds`);
    }
  };

  const handleMemorySelection = (memory: string, index: number) => {
    setSelectMemoryState(memory);
    setSelectMemory(memory);
    updateButtonStyles(index);
  };

  const getColorStyle = (color: string): React.CSSProperties => {
    const colorMap: { [key: string]: string } = {
      gray: "#808080",
      silver: "#C0C0C0",
      gold: "#FFD700",
      blue: "#0000FF",
      red: "#FF0000",
    };
    return {
      backgroundColor: colorMap[color] || "transparent",
    };
  };

  return (
    <div className={styles.phoneCharacteristics__container}>
      <div className={styles.characteristics__block}>
        <div className={styles.colors__itemBlock}>
          <h4 className={styles.colors__title}>
            {translations[currentLanguage].availableColorsTitle}
          </h4>
          <div className={styles.checkColors__items}>
            {availableColors.map((color) => (
              <button
                key={color}
                type="button"
                className={styles.checkColor__button}
                onClick={() => handleColorChange(color)}
                style={{
                  borderColor: selectColor === color ? "#000" : "transparent",
                  ...getColorStyle(color),
                }}
              >
                <span
                  className={styles[`color${color.replace(/\s+/g, "")}`]}
                ></span>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.selectCapacity__block}>
          <h4 className={styles.capacity__title}>Select RAM: {selectMemory}</h4>
          <div className={styles.capacity__buttons}>
            {ramOptions.map((ram, index) => (
              <button
                key={ram}
                ref={buttonsRefs[index]}
                onClick={() => handleMemorySelection(ram, index)}
                className={`${styles.select__capacity} ${
                  selectMemory === ram ? styles.selected : ""
                }`}
              >
                {ram}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.priceBlock}>
          <h3 className={styles.price}>{tablet.priceRegular}$</h3>
          <h4 className={styles.priceDiscount}>{tablet.priceDiscount}$</h4>
        </div>
        <div className={styles.productButtons}>
          {/* <CatalogButton width="270px" />
          <FavoriteButton /> */}
        </div>
        <div className={styles.productInfo}>
          <h4 className={styles.title}>
            Screen
            <span className={styles.productInfo__item}> {tablet.screen}</span>
          </h4>
          <h4 className={styles.title}>
            Resolution
            <span className={styles.productInfo__item}> {tablet.cell}</span>
          </h4>
          <h4 className={styles.title}>
            Processor
            <span className={styles.productInfo__item}> {tablet.category}</span>
          </h4>
          <h4 className={styles.title}>
            Ram
            <span className={styles.productInfo__item}>{tablet.ram}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
