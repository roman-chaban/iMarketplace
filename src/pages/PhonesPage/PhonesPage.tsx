import { FC, useState, useEffect } from "react";
import { CatalogPage } from "../CatalogPage/CatalogPage";
import styles from "./PhonesPageStyles.module.scss";
import phonesProducts from "../../common/products/products.json";
import { Pagination } from "../../components/Pagination/Pagination";
import { CustomSelect } from "../../components/Select/Select";
import { PhoneItem } from "../../components/CatalogItem/PhoneItem";
import Select from "react-select";
import { translations } from "../../components/LanguageSwitcher/translation";
import { useLanguage } from "../../hooks/useLanguage";
import { Phone } from "../../interfaces/phones";

export const PhonesPage: FC = () => {
  const [products, setProducts] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [phonePerPage, setPhonePerPage] = useState<number>(8);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    setCurrentPage(1);
  }, [phonePerPage]);

  useEffect(() => {
    document.title = `iMarketplace | ${translations[currentLanguage].phoneLabel}`;
    getPhonesProducts();
  }, [currentLanguage]);

  const getPhonesProducts = (): void => {
    const parsedProducts: Phone[] = phonesProducts.map((product) => ({
      ...product,
      memory: product.memory.toString(),
      price: product.price,
      capacity: parseInt(`${product.capacity}`, 10),
    }));

    setProducts(parsedProducts);
  };

  const indexOfLastPhone = currentPage * phonePerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonePerPage;
  const currentPhones = products.slice(indexOfFirstPhone, indexOfLastPhone);

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
    <div className={styles.phones} style={{ margin: "0 auto" }}>
      <div className={styles.catalog__container}>
        <CatalogPage
          smallTitle={translations[currentLanguage].phoneLabel}
          models={`${products.length} ${translations[currentLanguage].modelsTitle}`}
          mainTitle={translations[currentLanguage].pagesTitle.mobilePhones}
        />
        <div className={styles.page__select}>
          <div className={styles.sorted__select}>
            <span id="sort" className={styles.select__title}>
              {translations[currentLanguage].sortBy}
            </span>
            <CustomSelect products={products} setPhonesProducts={setProducts} />
          </div>
          <div className={styles.items__select}>
            <span id="items" className={styles.select__title}>
              {translations[currentLanguage].chooseItems}
            </span>
            <Select
              placeholder="Choose items"
              className={styles.select__width}
              options={itemsOptions}
              value={{
                value: phonePerPage,
                label: `${phonePerPage} ${translations[currentLanguage].itemsLabel}`,
              }}
              onChange={handlePhonePerPageChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.catalog__containerPhones}>
        {currentPhones.map((product) => (
          <PhoneItem key={product.phoneId} product={product} />
        ))}
      </div>
      <div>
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
            phonePerPage={phonePerPage}
            totalPhones={products.length}
            paginate={paginate}
          />
          <button
            className={`btn btn-secondary ${styles.btn__item}`}
            onClick={nextPage}
            disabled={indexOfLastPhone >= products.length}
            style={{
              cursor:
                indexOfFirstPhone >= products.length || currentPage
                  ? ""
                  : "not-allowed",
            }}
          >
            {translations[currentLanguage].paginationButtonsLabels.next}
          </button>
        </div>
      </div>
    </div>
  );
};
