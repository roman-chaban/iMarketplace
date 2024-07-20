import { FC, useState, MouseEvent } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes/routes";
import styles from "../../Header/HeaderStyles.module.scss";
import { useAuth } from "../../../hooks/useAuth";
import { Apple } from "@mui/icons-material";
import { translations } from "../../LanguageSwitcher/translation";
import { useLanguage } from "../../../hooks/useLanguage";

export const PopUp: FC = () => {
  const navigate = useNavigate();
  const { isSignedIn, signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { currentLanguage } = useLanguage();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut(() => navigate(ROUTES.HOME));
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={styles.popup__block}>
      <Button
        className={styles.pop__up}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        {isSignedIn ? "logOut" : "logIn"}
        <Apple style={{ margin: "0px 0px 5px 3px" }} />
      </Button>
      <Popover
        id={id}
        className={styles.popover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {isSignedIn ? (
          <Typography sx={{ p: 2, width: "120px" }}>
            <NavLink
              onClick={handleSignOut}
              className={styles.small__size}
              to={ROUTES.HOME}
            >
              {translations[currentLanguage].registrationSubItems.signOut}
            </NavLink>
          </Typography>
        ) : (
          <Typography sx={{ p: 2, width: "120px" }}>
            <NavLink className={styles.small__size} to={ROUTES.AUTHORIZATION}>
              {translations[currentLanguage].registrationSubItems.signIn}
            </NavLink>
          </Typography>
        )}
      </Popover>
    </div>
  );
};
