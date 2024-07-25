import { FormControlLabel } from "@mui/material";
import { FC } from "react";
import { IOSSwitch } from "./IOSSwitcher/IOSSwitcher";
import styles from "./SwitcherStyles.module.scss";

interface LanguageSwitcherProps {
  currentLanguage: string;
  onChangeLanguage: (otherLanguage: string) => void;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onChangeLanguage,
}) => {
  const otherLanguage = currentLanguage === "en" ? "ua" : "en";
  const buttonText = currentLanguage === "en" ? "EN" : "UA";

  return (
    <div style={{ position: "relative", top: 6 }} className={styles.switcher}>
      <FormControlLabel
        style={{ display: "flex", gap: "0.5rem" }}
        control={
          <IOSSwitch
            checked={currentLanguage === "ua"}
            onChange={() => onChangeLanguage(otherLanguage)}
            children={undefined}
          />
        }
        label={buttonText}
      />
    </div>
  );
};
