import { FC } from "react";
import { styled } from "styled-components";
import styles from "./ShopCategoryStyles.module.scss";
import AccessoriesBanner from "../../images/category-images/aalp-magsafe-header-202309.png";
import IphoneBanner from "../../images/category-images/Iphone15-Banner.jpg";
import TabletBanner from "../../images/category-images/Ipad-Pro.jpg";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import products from "../../common/products/products.json";
import tablets from "../../common/products/tablets.json";
import accessories from "../../common/products/accessories.json";
import { translations } from "../LanguageSwitcher/translation";
import { useLanguage } from "../../hooks/useLanguage";

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

const ShopCategory: FC = () => {
  const { currentLanguage } = useLanguage();
  return (
    <section>
      <CategoriesContainer>
        <h2 className={styles.categories__title}>
          {translations[currentLanguage].categoryTitle}
        </h2>
        <div className={styles.category__products}>
          <CategoryItem
            banner={IphoneBanner}
            categoryTitle={translations[currentLanguage].categoryPhones}
            categoryModels={`${products.length} ${translations[currentLanguage].modelsTitle}`}
            to="/phones"
          />
          <CategoryItem
            categoryTitle={translations[currentLanguage].categoryTablets}
            categoryModels={`${tablets.length} ${translations[currentLanguage].modelsTitle}`}
            banner={TabletBanner}
            to="/tablets"
          />
          <CategoryItem
            categoryTitle={translations[currentLanguage].categoryAccessories}
            categoryModels={`${accessories.length} ${translations[currentLanguage].modelsTitle}`}
            banner={AccessoriesBanner}
            to="/accessories"
          />
        </div>
      </CategoriesContainer>
    </section>
  );
};

export { ShopCategory };
