import CamperForm from '../CamperForm/CamperForm.jsx';
import { useSelector } from 'react-redux';
import {
  selectCurrentCamper,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors.js';
import Loader from '../Loader/Loader.jsx';
import Badges from '../Badges/Badges.jsx';
import style from './CamperFeatures.module.css';

const CamperFeatures = () => {
  const camper = useSelector(selectCurrentCamper);
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
    <div className={style.featuresSection}>
      <div className={style.featuresContainer}>
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
