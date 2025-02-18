import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperById } from '../../redux/campers/operations.js';
import {
  selectCurrentCamper,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import Camper from '../../components/Camper/Camper.jsx';
import CamperReviews from '../../components/CamperReviews/CamperReviews.jsx';
import CamperFeatures from '../../components/CamperFeatures/CamperFeatures.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import style from './CamperPage.module.css';

const CamperPage = () => {
  const { id } = useParams();
  const camper = useSelector(selectCurrentCamper);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main>
      <section className={style.camperSection}>
        <div className={style.camperContainer}>
          {loading && <Loader />}
          {error && <ErrorMessage />}
          {camper && (
            <div>
              <Camper camper={camper} />
              <div className={style.tabsWrapper}>
                <button
                  className={
                    activeTab === 'features' ? style.active : style.tabBtn
                  }
                  type="button"
                  onClick={() => handleChangeTab('features')}
                >
                  Features
                </button>
                <button
                  className={
                    activeTab === 'reviews' ? style.active : style.tabBtn
                  }
                  type="button"
                  onClick={() => handleChangeTab('reviews')}
                >
                  Reviews
                </button>
              </div>
            </div>
          )}
          {activeTab === 'features' ? <CamperFeatures /> : <CamperReviews />}
        </div>
      </section>
    </main>
  );
};

export default CamperPage;
