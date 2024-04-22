import { useContext } from 'react';
import { AuthContext } from '../common/hoc/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
