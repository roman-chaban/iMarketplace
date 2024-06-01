import { User } from '../../common/hoc/AuthProvider';
import { useAuth } from '../../hooks/useAuth';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { CustomButton } from '../../components/UI Components/CustomButton/CustomButton';
import styles from './Authorization.module.scss';
import { Apple } from '@mui/icons-material';
import { translations } from '../../components/LanguageSwitcher/translation';
import { useLanguage } from '../../hooks/useLanguage';

interface EventWithPreventDefault extends Event {
  preventDefault(): void;
}

export const AuthorizationPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const fromPage = location.state?.from?.pathname || '';
  const [inputMessage, setInputMessage] = useState<string>('Enter valid email');
  const [isValidData, setIsValidData] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { currentLanguage } = useLanguage();

  const validateEmail = (email: string) => {
    return email.includes('@');
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  useEffect(() => {
    document.title = `iMarketplace | ${translations[currentLanguage].authorizationLabel}`;
  }, [currentLanguage]);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> & EventWithPreventDefault
  ) => {
    event.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      setIsValidData(!isValidData);
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
    } else {
      setIsValidData(isValidData);
      setInputMessage('Invalid email or password');
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1 className={styles.auth__title}>
        {translations[currentLanguage].authTitle}
        <Apple className={styles.auth__logo} style={{ fontSize: '40' }} />
      </h1>
      <form onSubmit={handleSubmit} className={styles.auth__form}>
        <label htmlFor='email'>
          <TextField
            required
            placeholder={translations[currentLanguage].email}
            label={translations[currentLanguage].email}
            type='email'
            id={styles.email}
            name='email'
            onChange={handleEmailChange}
          />
          {isValidData && !validateEmail(email) && <span>{inputMessage}</span>}
        </label>
        <label htmlFor='password'>
          <TextField
            placeholder={translations[currentLanguage].password}
            required
            label={translations[currentLanguage].password}
            type='password'
            autoComplete='current-password'
            id={styles.password}
            name='password'
            onChange={handlePasswordChange}
          />
          {isValidData && !validatePassword(password) && (
            <span>{inputMessage}</span>
          )}
        </label>
        <CustomButton className={styles.auth__button} type='submit'>
          {translations[currentLanguage].signUpLabel}
        </CustomButton>
      </form>
    </div>
  );
};
