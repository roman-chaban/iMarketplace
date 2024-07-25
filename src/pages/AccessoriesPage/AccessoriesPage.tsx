import { FC, useState, useEffect } from "react";
import { CatalogPage } from "../CatalogPage/CatalogPage";
import styles from "./AccessoriesStyles.module.scss";
import { translations } from "../../components/LanguageSwitcher/translation";
import { useLanguage } from "../../hooks/useLanguage";
import { AccessoriesProduct } from "../../components/AccessoriesProducts/AccessoriesProduct/AccessoriesProduct";
import accessoriesData from "../../common/products/accessories.json";
import { Accessories } from "../../interfaces/accessories";
import { Pagination } from "../../components/Pagination/Pagination";
import { IOption } from "../../interfaces/select-interface/select.interfaces";
import { UniversalSelect } from "../../components/UniversalSelect/UniversalSelect";
import { CustomSelect } from "../../components/Select/Select";
import { OnChangeValue } from "react-select";

const itemsOptions: IOption[] = [
  { value: 4, label: "4" },
  { value: 6, label: "6" },
  { value: 8, label: "8" },
  { value: 12, label: "12" },
];

export const AccessoriesPage: FC = () => {
  const { currentLanguage } = useLanguage();
  const [accessoriesProducts, setAccessoriesProducts] = useState<Accessories[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [accessoriesPerPage, setAccessoriesPerPage] = useState<number>(8);

  useEffect(() => {
    setCurrentPage(1);
  }, [accessoriesPerPage]);

  useEffect(() => {
    document.title = `iMarketplace | ${translations[currentLanguage].phoneLabel}`;
  }, [currentLanguage]);

  useEffect(() => {
    setAccessoriesProducts(accessoriesData);
  }, []);

  useEffect(() => {
    document.title = `iMarketplace | ${translations[currentLanguage].accessoriesLabel}`;
  }, [currentLanguage]);

  const indexOfLastPhone = currentPage * accessoriesPerPage;
  const indexOfFirstPhone = indexOfLastPhone - accessoriesPerPage;
  const currentAccessories = accessoriesProducts.slice(
    indexOfFirstPhone,
    indexOfLastPhone
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  };

  const handleAccessoriesPerPageChange = (
    selectedOption: OnChangeValue<IOption, boolean>
  ) => {
    if (Array.isArray(selectedOption)) {
      if (selectedOption.length > 0) {
        setAccessoriesPerPage(selectedOption[0]?.value as number);
      } else {
        setAccessoriesPerPage(0);
      }
    } else if (selectedOption && "value" in selectedOption) {
      setAccessoriesPerPage(selectedOption.value as number);
    } else {
      setAccessoriesPerPage(0);
    }
  };

  return (
    <section className={styles.catalog__container}>
      <CatalogPage
        smallTitle={translations[currentLanguage].pagesTitle.accessories}
        models={`${accessoriesData.length} ${translations[currentLanguage].modelsTitle}`}
        mainTitle={translations[currentLanguage].pagesTitle.accessories}
      />

      <div className={styles.page__select}>
        <div className={styles.sorted__select}>
          <span id="sort" className={styles.select__title}>
            {translations[currentLanguage].sortBy}
          </span>
          <CustomSelect
            products={accessoriesProducts}
            setAccessoriesProducts={setAccessoriesProducts}
          />
        </div>
        <div className={styles.items__select}>
          <span id="items" className={styles.select__title}>
            {translations[currentLanguage].chooseItems}
          </span>
          <UniversalSelect
            options={itemsOptions}
            value={{
              value: accessoriesPerPage,
              label: `${accessoriesPerPage} ${translations[currentLanguage].itemsLabel}`,
            }}
            onChange={handleAccessoriesPerPageChange}
            placeholder="Choose items"
          />
        </div>
      </div>

      <div className={styles.accessories__containerProducts}>
        {currentAccessories.map((product) => (
          <AccessoriesProduct
            key={product.id}
            product={product as Accessories}
          />
        ))}
      </div>
      <div style={{width: '100%'}}>
        <div className={styles.pagination__item}>
          <button
            className={`btn btn-secondary ${styles.btn__item}`}
            onClick={prevPage}
            disabled={currentPage === 1}
            style={{ cursor: currentPage === 1 ? "not-allowed" : "" }}
          >
            {translations[currentLanguage].paginationButtonsLabels.prev}
          </button>
          <Pagination
            currentPage={currentPage}
            phonePerPage={accessoriesPerPage}
            totalPhones={accessoriesProducts.length}
            paginate={paginate}
          />
          <button
            className={`btn btn-secondary ${styles.btn__item}`}
            onClick={nextPage}
            disabled={indexOfLastPhone >= accessoriesProducts.length}
            style={{
              cursor:
                indexOfFirstPhone >= accessoriesProducts.length || currentPage
                  ? ""
                  : "not-allowed",
            }}
          >
            {translations[currentLanguage].paginationButtonsLabels.next}
          </button>
        </div>
      </div>
    </section>
  );
};
