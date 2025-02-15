import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';
import style from './CatalogPage.module.css';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import { selectPage, selectTotal } from '../../redux/campers/selectors.js';
import { changePage } from '../../redux/campers/slice.js';

const CatalogPage = () => {
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(total / 4);

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  const handleChangePage = () => {
    dispatch(changePage());
  };

  return (
    <main>
      <section className={style.catalogSection}>
        <div className={style.catalogContainer}>
          <Filters />
          <div className={style.catalogListWrapper}>
            <CamperList />
            {page < totalPages && <LoadMoreBtn onClick={handleChangePage} />}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
