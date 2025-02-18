import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem.jsx';
import {
  selectCampers,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors.js';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import style from './CamperList.module.css';

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ul className={style.camperList}>
        {campers?.map((camper) => {
          return (
            <li key={camper.id}>
              <CamperItem camper={camper} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CamperList;
