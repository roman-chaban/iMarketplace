import { FC, useState, useEffect } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import cl from './phones.module.scss';
import phonesProducts from '../../common/products/products.json';
import { Pagination } from '../../components/Pagination/Pagination';
import { CustomSelect } from '../../components/Select/Select';
import { Phone } from '../../interfaces/phone';
import { CatalogItem } from '../../components/CatalogItem/CatalogItem';

export const PhonesPage: FC = () => {
  const [products, setProducts] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [phonePerPage] = useState<number>(5);

  useEffect(() => {
    document.title = 'iMarketplace | Phones';
    getPhonesProducts();
  }, []);

  const getPhonesProducts = () => {
    const parsedProducts = phonesProducts.map((product) => ({
      ...product,
      memory: parseInt(product.memory),
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

  return (
    <div className={cl.phones} style={{ margin: '0 auto' }}>
      <div className={cl.catalog__container}>
        <CatalogPage
          smallTitle='Phones'
          models={`${products.length} models`}
          mainTitle='Mobile phones'
        />
        <div className={cl.page__select}>
          <CustomSelect />
        </div>
      </div>
      <div className={cl.catalog__containerPhones}>
        {currentPhones.map((product) => (
          <CatalogItem
            key={product.phoneId}
            displaySize={product.displaySize}
            imgUrl={product.imgUrl}
            title={product.title}
            phoneId={product.phoneId}
            capacity={`${product.capacity} GB`}
            memory={`${product.memory} GB`}
            discount={`${product.discount}$`}
            price={`${product.price}$`}
          />
        ))}
      </div>
      <div>
        <div className={cl.pagination__item}>
          <button
            className='btn btn-secondary'
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev Page
          </button>
          <Pagination
            currentPage={currentPage}
            phonePerPage={phonePerPage}
            totalPhones={products.length}
            paginate={paginate}
          />
          <button
            className='btn btn-secondary'
            onClick={nextPage}
            disabled={indexOfLastPhone >= products.length}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};
