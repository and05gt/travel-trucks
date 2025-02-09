import { useDispatch } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';
import style from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main>
      <section className={style.catalogSection}>
        <div className={style.catalogContainer}>
          <Filters />
          <CamperList />
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
