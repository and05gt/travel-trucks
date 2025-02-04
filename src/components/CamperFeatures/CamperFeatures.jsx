import CamperForm from '../CamperForm/CamperForm.jsx';
import style from './CamperFeatures.module.css';
import { useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors.js';
import Loader from '../Loader/Loader.jsx';
import Badges from '../Badges/Badges.jsx';

const CamperFeatures = () => {
  const camper = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const getForm = (name) => {
    let form = '';

    switch (name) {
      case 'panelTruck':
        form = 'Panel truck';
        break;
      case 'fullyIntegrated':
        form = 'Fully Integrated';
        break;
      case 'alcove':
        form = 'Alcove';
        break;
    }
    return form;
  };

  return (
    <div className={style.featuresContainer}>
      <div className={style.featuresSection}>
        {loading && <Loader />}
        {error && <h2>{error}</h2>}
        <Badges camper={camper} />
        <div>
          <h3 className={style.featuresSubtitle}>Vehicle details</h3>
          <div className={style.infoWrapper}>
            <p className={style.infoTextForm}>
              Form <span>{getForm(camper.form)}</span>
            </p>
            <p className={style.infoText}>
              Length <span>{camper.length.split('m')[0] + ' m'}</span>
            </p>
            <p className={style.infoText}>
              Width <span>{camper.width.split('m')[0] + ' m'}</span>
            </p>
            <p className={style.infoText}>
              Height <span>{camper.height.split('m')[0] + ' m'}</span>
            </p>
            <p className={style.infoText}>
              Tank <span>{camper.tank.split('l')[0] + ' l'}</span>
            </p>
            <p className={style.infoText}>
              Consumption <span>{camper.consumption}</span>
            </p>
          </div>
        </div>
      </div>
      <CamperForm />
    </div>
  );
};

export default CamperFeatures;
