import { FC, useEffect, useState } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import { CustomSelect } from '../../components/Select/Select';
import cl from './tablets.module.scss';
import { Tablet } from '../../interfaces/tablets';
import tabletProducts from '../../common/products/tablets.json';
import Pagination from '@mui/material/Pagination';
import { TabletItem } from '../../components/TabletItem/TabletItem';

export const TabletsPage: FC = () => {
  const [products, setProducts] = useState<Tablet[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [phonesPerPage] = useState<number>(5);

  useEffect(() => {
    document.title = 'iMarketplace| Tablets';
    getPhonesProducts();
  }, []);

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

  return (
    <div className={cl.catalog__container}>
      <CatalogPage
        smallTitle='Tablets'
        models={`${tabletProducts.length} models`}
        mainTitle='Tablets'
      />
      <div className={cl.page__select}>
        <CustomSelect />
      </div>
      <div className={cl.catalog__containerTablets}>
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
        <div className={cl.pagination__item}>
          <button
            className='btn btn-secondary'
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev Page
          </button>
          <Pagination
            shape='rounded'
            count={Math.ceil(products.length / phonesPerPage)}
            page={currentPage}
            onChange={(_event, page) => paginate(page)}
            color={'standard'}
            hidePrevButton
            hideNextButton
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
