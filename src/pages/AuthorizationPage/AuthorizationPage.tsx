import { User } from '../../common/hoc/AuthProvider';
import { useAuth } from '../../hooks/useAuth';
import { FormEvent, useEffect } from 'react';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { CustomButton } from '../../components/UI Components/CustomButton/CustomButton';
import styles from './authPage.module.scss';
import { Apple } from '@mui/icons-material';

interface EventWithPreventDefault extends Event {
  preventDefault(): void;
}

export const AuthorizationPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const fromPage = location.state?.from?.pathname || '';

  useEffect(() => {
    document.title = 'iMarketplace | Authorization';
  }, []);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> & EventWithPreventDefault
  ) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const emailInput = form.querySelector<HTMLInputElement>(
      'input[name="email"]'
    );
    const passwordInput = form.querySelector<HTMLInputElement>(
      'input[name="password"]'
    );
    if (emailInput && passwordInput) {
      const user: User = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      signIn(user, () => navigate(fromPage, { replace: true }));
    }
  };

  return (
    <div>
      <h1 className={styles.auth__title}>
        Let's go to Authorization
        <Apple className={styles.auth__logo} style={{ fontSize: '40' }} />
      </h1>
      <form onSubmit={handleSubmit} className={styles.auth__form}>
        <label htmlFor='email'>
          <TextField
            required
            placeholder='Email'
            label='Email'
            type='email'
            id={styles.email}
            name='email'
          />
        </label>
        <label htmlFor='password'>
          <TextField
            placeholder='Password'
            required
            label='Password'
            type='password'
            autoComplete='current-password'
            id={styles.password}
            name='password'
          />
        </label>
        <CustomButton className={styles.auth__button} type='submit'>
          Sign up!
        </CustomButton>
      </form>
    </div>
  );
};
