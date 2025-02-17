import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';
import style from './CatalogPage.module.css';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import {
  selectError,
  selectPage,
  selectTotal,
} from '../../redux/campers/selectors.js';
import { selectFilters } from '../../redux/filters/selectors.js';
import { changePage } from '../../redux/campers/slice.js';
import { setQueryParams } from '../../utils/setQueryParams.js';

const CatalogPage = () => {
  const filters = useSelector(selectFilters);
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(total / 4);
  const queryParams = setQueryParams(filters);

  useEffect(() => {
    dispatch(fetchCampers({ page, queryParams }));
  }, [dispatch, page, queryParams]);

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
            {page < totalPages && !error && (
              <LoadMoreBtn onClick={handleChangePage} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
