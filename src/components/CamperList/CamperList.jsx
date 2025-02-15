import { useSelector } from 'react-redux';
import Camper from '../Camper/Camper.jsx';
import {
  selectCampers,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors.js';
import Loader from '../Loader/Loader.jsx';
import style from './CamperList.module.css';

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
      <ul className={style.camperList}>
        {campers?.map((camper) => {
          return (
            <li key={camper.id}>
              <Camper camper={camper} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CamperList;
