import { FC, useState, MouseEvent } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes/routes';
import styles from '../../Header/header.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import { Apple } from '@mui/icons-material';
import { useLanguage } from '../../LanguagesContext/LanguagesContext';
import { translations } from '../../LanguageSwitcher/translation';

export const PopUp: FC = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { currentLanguage } = useLanguage();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={styles.popup__block}>
      <Button
        className={styles.pop__up}
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}
      >
        {translations[currentLanguage].registrationLabel}{' '}
        <Apple style={{ margin: '0px 0px 5px 3px' }} />
      </Button>
      <Popover
        id={id}
        className={styles.popover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <NavLink className={styles.small__size} to={ROUTES.AUTHORIZATION}>
            {translations[currentLanguage].registrationSubItems.signIn}
          </NavLink>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <NavLink
            onClick={() => signOut(() => navigate('/'))}
            className={styles.small__size}
            to={ROUTES.HOME}
          >
            {translations[currentLanguage].registrationSubItems.signOut}
          </NavLink>
        </Typography>
      </Popover>
    </div>
  );
};
