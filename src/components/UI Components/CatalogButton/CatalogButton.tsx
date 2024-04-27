import { FC } from 'react';
import Button from '@mui/material/Button';
import styles from './catalog-button.module.scss';

export const CatalogButton: FC = () => {
  return <Button className={styles.catalog__buttonItem}>Add to cart</Button>;
};
