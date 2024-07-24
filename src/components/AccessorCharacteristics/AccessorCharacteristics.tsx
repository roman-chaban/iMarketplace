/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useRef, useState, useEffect } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../LanguageSwitcher/translation";
import styles from "./AccessorCharacteristicsStyles.module.scss";

interface AccessoriesCharacteristicsProps {
  selectMemory: string;
  setSelectMemory: (memory: string) => void;
  handleColorChange: (color: string) => void;
  selectColor: string;
  availableColors: string[];
}

export const AccessoriesCharacteristics: FC<
  AccessoriesCharacteristicsProps
> = ({
  selectMemory: initialSelectMemory,
  setSelectMemory,
  handleColorChange,
  selectColor,
  availableColors,
}) => {
  const ramOptions = ["768MB", "1GB"];

  const [selectMemory, setSelectMemoryState] =
    useState<string>(initialSelectMemory);

  const { currentLanguage } = useLanguage();

  useEffect(() => {
    setSelectMemory(selectMemory);
    updateButtonStyles(ramOptions.indexOf(selectMemory));
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
    resetButtonStyles();
    const buttonRef = buttonsRefs[index]?.current;
    if (buttonRef) {
      buttonRef.style.background = "#313131";
      buttonRef.style.color = "#fff";
    } else {
      console.error(`Button ref at index ${index} is null or undefined`);
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
      </div>
    </div>
  );
};
