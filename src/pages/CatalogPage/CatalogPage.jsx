import { useDispatch } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList.jsx';
import SearchBar from '../../components/Filters/Filters.jsx';
import style from './CatalogPage.module.css';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={style.catalogContainer}>
      <section className={style.catalogSection}>
        <SearchBar />
        <CamperList />
      </section>
    </div>
  );
};

export default CatalogPage;
