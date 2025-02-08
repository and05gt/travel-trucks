import { useSelector } from 'react-redux';
import Camper from '../Camper/Camper.jsx';
import {
  selectCampers,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors.js';
import Loader from '../Loader/Loader.jsx';
import { useState } from 'react';
import style from './CamperList.module.css';

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [count, setCount] = useState(4);

  const handleChangeCount = () => {
    setCount((prev) => prev + 4);
  };

  return (
    <div className={style.camperListContainer}>
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
      <ul className={style.camperList}>
        {campers.slice(0, count).map((camper) => {
          return (
            <li key={camper.id}>
              <Camper camper={camper} />
            </li>
          );
        })}
      </ul>

      {count < campers.length && (
        <button
          className={style.loadMoreBtn}
          type="button"
          onClick={handleChangeCount}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CamperList;
