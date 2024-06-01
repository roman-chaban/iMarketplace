import { FC, useEffect, useState } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import TabletsSelect from '../../components/TabletsUI/TabletsSelect/TabletsSelect';
import styles from './TabletsPage.module.scss';
import { Tablet } from '../../interfaces/tablets';
import tabletProducts from '../../common/products/tablets.json';
import { TabletItem } from '../../components/TabletsUI/TabletItem/TabletItem';
import Select from 'react-select';
import { translations } from '../../components/LanguageSwitcher/translation';
import { useLanguage } from '../../hooks/useLanguage';
import { Pagination } from '../../components/Pagination/Pagination';

export const TabletsPage: FC = () => {
  const [products, setProducts] = useState<Tablet[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [phonesPerPage, setPhonePerPage] = useState<number>(8);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    document.title = `iMarketplace| ${translations[currentLanguage].tabletLabel}`;
    getPhonesProducts();
  }, [currentLanguage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [phonesPerPage]);

  const getPhonesProducts = () => {
    const parsedProducts = tabletProducts.map((product) => ({
      ...product,
      priceRegular: String(product.priceRegular),
      priceDiscount: String(product.priceDiscount),
      memory: parseInt(product.capacity),
    }));

    setProducts(parsedProducts);
  };

  const indexOfLastPhone = currentPage * phonesPerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
  const currentTablets = products.slice(indexOfFirstPhone, indexOfLastPhone);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
    window.scrollTo({
      top: 250,
      behavior: 'smooth',
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
    window.scrollTo({
      top: 250,
      behavior: 'smooth',
    });
  };

  const itemsOptions = [
    { value: 2, label: translations[currentLanguage].itemsOptions.itemsTwo },
    { value: 4, label: translations[currentLanguage].itemsOptions.itemsFour },
    { value: 6, label: translations[currentLanguage].itemsOptions.itemsSix },
    { value: 8, label: translations[currentLanguage].itemsOptions.itemsEight },
    {
      value: 16,
      label: translations[currentLanguage].itemsOptions.itemsSixteen,
    },
  ];

  const handlePhonePerPageChange = (
    selectedOption: { value: number; label: string } | null
  ) => {
    if (selectedOption) {
      setPhonePerPage(selectedOption.value);
    }
  };

  return (
    <div className={styles.catalog__container}>
      <CatalogPage
        smallTitle={translations[currentLanguage].pagesTitle.tablets}
        models={`${tabletProducts.length} ${translations[currentLanguage].modelsTitle}`}
        mainTitle={translations[currentLanguage].pagesTitle.tablets}
      />
      <div className={styles.page__select}>
        <div className={styles.sorted__select}>
          <span id='sort' className={styles.select__title}>
            {translations[currentLanguage].sortBy}
          </span>
          <TabletsSelect tablets={products} setTablets={setProducts} />
        </div>
        <div className={styles.items__select}>
          <span id='items' className={styles.select__title}>
            {translations[currentLanguage].chooseItems}
          </span>
          <Select
            placeholder={translations[currentLanguage].chooseOptionLabel}
            className={styles.select__width}
            options={itemsOptions}
            value={{
              value: phonesPerPage,
              label: `${phonesPerPage} ${translations[currentLanguage].itemsLabel}`,
            }}
            onChange={handlePhonePerPageChange}
          />
        </div>
      </div>
      <div className={styles.catalog__containerTablets}>
        {currentTablets.map((tablet) => (
          <TabletItem
            key={tablet.id}
            images={tablet.images}
            name={tablet.name}
            priceRegular={`${tablet.priceRegular}$`}
            priceDiscount={`${tablet.priceDiscount}$`}
            id={tablet.id}
            screen={tablet.screen}
            capacity={tablet.capacity}
            ram={tablet.ram}
          />
        ))}
      </div>
      <div>
        <div className={styles.pagination__item}>
          <button
            className={`btn btn-secondary ${styles.btn__pagination}`}
            onClick={prevPage}
            disabled={currentPage === 1}
            style={{ cursor: currentPage === 1 ? 'not-allowed' : '' }}
          >
            {translations[currentLanguage].paginationButtonsLabels.prev}
          </button>
          <Pagination
            currentPage={currentPage}
            phonePerPage={phonesPerPage}
            totalPhones={products.length}
            paginate={paginate}
          />
          <button
            className={`btn btn-secondary ${styles.btn__pagination}`}
            onClick={nextPage}
            disabled={indexOfLastPhone >= products.length}
            style={{
              cursor:
                indexOfFirstPhone >= products.length || currentPage
                  ? ''
                  : 'not-allowed',
            }}
          >
            {translations[currentLanguage].paginationButtonsLabels.next}
          </button>
        </div>
      </div>
    </div>
  );
};
