import styles from './phoneCharacteristics.module.scss';
import React, { FC, useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../LanguageSwitcher/translation';

interface IProductMemory {
  small: string;
  middle: string;
  large: string;
}

interface PhoneCharacteristicsProps {
  setSelectMemory: (memory: string) => void;
  handleColorChange: (color: string) => void;
  selectColor?: string;
}

export const PhoneCharacteristics: FC<PhoneCharacteristicsProps> = ({
  setSelectMemory,
  handleColorChange,
  selectColor,
}) => {
  const productMemory: IProductMemory = {
    small: '64 GB',
    middle: '128 GB',
    large: '256 GB',
  };

  const [selectMemory, setSelectMemoryState] = useState<string>(
    productMemory.middle
  );

  const { currentLanguage } = useLanguage();

  useEffect(() => {
    setSelectMemory(selectMemory);
    updateButtonStyles(1);
  }, []);

  const buttonsRefs: React.RefObject<HTMLButtonElement>[] = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  const resetButtonStyles = (): void => {
    buttonsRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.background = 'transparent';
        ref.current.style.color = '#313131';
      }
    });
  };

  const updateButtonStyles = (index: number) => {
    resetButtonStyles();
    const buttonRef = buttonsRefs[index]?.current;
    if (buttonRef) {
      buttonRef.style.background = '#313131';
      buttonRef.style.color = '#fff';
    } else {
      console.error(`Button ref at index ${index} is null or undefined`);
    }
  };

  const handleMemorySelection = (memory: string, index: number) => {
    setSelectMemoryState(memory);
    setSelectMemory(memory);
    updateButtonStyles(index);
  };

  return (
    <div className={styles.phoneCharacteristics__container}>
      <div className={styles.characteristics__block}>
        <div className={styles.colors__itemBlock}>
          <h4 className={styles.colors__title}>
            {translations[currentLanguage].availableColorsTitle}
          </h4>
          <div className={styles.checkColors__items}>
            <button
              type='button'
              className={styles.checkColor__button}
              onClick={() => handleColorChange('Gold')}
              style={{
                borderColor: selectColor === 'gold' ? '#000' : 'transparent',
              }}
            >
             <span className={styles.colorGold}></span>
            </button>
            <button
              type='button'
              className={styles.checkColor__button}
              onClick={() => handleColorChange('DeepPurple')}
              style={{
                borderColor: selectColor === 'black' ? '#000' : 'transparent',
              }}
            >
              <span className={styles.colorDeepPurple}></span>
            </button>
            <button
              type='button'
              className={styles.checkColor__button}
              onClick={() => handleColorChange('Silver')}
              style={{
                borderColor: selectColor === 'white' ? '#000' : 'transparent',
              }}
            >
              <span className={styles.colorSilver}></span>
            </button>
            <button
              type='button'
              className={styles.checkColor__button}
              onClick={() => handleColorChange('ProductRed')}
              style={{
                borderColor:
                  selectColor === 'ProductRed' ? '#000' : 'transparent',
              }}
            >
              <span className={styles.colorProductRed}></span>
            </button>
          </div>
        </div>
        <div className={styles.selectCapacity__block}>
          <h4 className={styles.capacity__title}>
            Select capacity: {selectMemory}
          </h4>
          <div className={styles.capacity__buttons}>
            {Object.entries(productMemory).map(([key, value], index) => (
              <button
                key={key}
                ref={buttonsRefs[index]}
                onClick={() => handleMemorySelection(value, index)}
                className={`${styles.select__capacity} ${
                  selectMemory === value ? styles.selected : ''
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
