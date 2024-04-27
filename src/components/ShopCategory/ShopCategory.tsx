import { FC } from 'react';
import { styled } from 'styled-components';
import styles from './shopCategory.module.scss';
import AccessoriesBanner from '../../images/category-images/aalp-magsafe-header-202309.png';
import IphoneBanner from '../../images/category-images/Iphone15-Banner.jpg';
import TabletBanner from '../../images/category-images/Ipad-Pro.jpg';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import products from '../../common/products/products.json';
import tablets from '../../common/products/tablets.json';

const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1136px;
  gap: 24px;
  margin-bottom: 81px;
  padding: 0 30px;
`;

interface IShopCategory {
  title: string;
}

const ShopCategory: FC<IShopCategory> = ({ title }: IShopCategory) => {
  return (
    <section>
      <CategoriesContainer>
        <h2 className={styles.categories__title}>{title}</h2>
        <div className={styles.category__products}>
          <CategoryItem
            banner={IphoneBanner}
            categoryTitle='Mobile phones'
            categoryModels={`${
              products.filter((product) => product.category === 'mobile').length
            } models`}
            to='/phones'
          />
          <CategoryItem
            categoryTitle='Tablets'
            categoryModels={`${tablets.length} models`}
            banner={TabletBanner}
            to='/tablets'
          />
          <CategoryItem
            categoryTitle='Accessories'
            categoryModels={`${
              products.filter((product) => product.category === 'accessory')
                .length
            } models`}
            banner={AccessoriesBanner}
            to='/accessories'
          />
        </div>
      </CategoriesContainer>
    </section>
  );
};

export { ShopCategory };
