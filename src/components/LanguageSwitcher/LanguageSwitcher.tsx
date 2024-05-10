import { FormControlLabel } from '@mui/material';
import { FC } from 'react';
import { IOSSwitch } from './IOSSwitcher/IOSSwitcher';

interface LanguageSwitcherProps {
  currentLanguage: string;
  onChangeLanguage: (otherLanguage: string) => void;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onChangeLanguage,
}) => {
  const otherLanguage = currentLanguage === 'en' ? 'ua' : 'en';
  const buttonText = currentLanguage === 'en' ? 'EN' : 'UA';

  return (
    <div style={{ position: 'relative', top: 3 }}>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={currentLanguage === 'ua'}
            onChange={() => onChangeLanguage(otherLanguage)}
            children={undefined}
          />
        }
        label={buttonText}
      />
    </div>
  );
};
