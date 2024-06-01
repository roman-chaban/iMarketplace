import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import styles from '../ShopCategory/ShopCategory.module.scss';
import { ICategoryItemProps } from '../../interfaces/category-item';

const CategoryItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CategoryItem: FC<ICategoryItemProps> = ({
  categoryTitle,
  categoryModels,
  banner,
  to,
}: ICategoryItemProps) => {
  const categoryTopScrolled = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <CategoryItemBlock>
      <img
        src={banner}
        alt='Iphone Banner'
        id={styles.width}
        className={styles.category__banner}
      />
      <div className={styles.category__titles}>
        <NavLink
          onClick={categoryTopScrolled}
          to={to}
          className={styles.category__title}
        >
          {categoryTitle}
        </NavLink>
        <span className={styles.category__models}>{categoryModels}</span>
      </div>
    </CategoryItemBlock>
  );
};

export { CategoryItem };
