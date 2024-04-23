import { FC, useState, MouseEvent } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../common/routes/routes';
import cl from '../../Header/header.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import { Apple } from '@mui/icons-material';

export const PopUp: FC = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        className={cl.pop__up}
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}
      >
        Register <Apple style={{ margin: '0px 0px 5px 3px' }} />
      </Button>
      <Popover
        id={id}
        className={cl.popover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <NavLink className={cl.small__size} to={ROUTES.AUTHORIZATION}>
            Sign in
          </NavLink>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <NavLink
            onClick={() => signOut(() => navigate('/'))}
            className={cl.small__size}
            to={ROUTES.HOME}
          >
            Sign out
          </NavLink>
        </Typography>
      </Popover>
    </div>
  );
};
