import { useParams } from 'react-router-dom';
import icons from '../../assets/icons.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperById } from '../../redux/campers/operations.js';
import {
  selectCurrentCamper,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import CamperReviews from '../../components/CamperReviews/CamperReviews.jsx';
import CamperFeatures from '../../components/CamperFeatures/CamperFeatures.jsx';
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

  const { gallery } = camper;

  if (!gallery) return <Loader />;

  return (
    <div className={style.camperContainer}>
      <section className={style.camperSection}>
        {loading && <Loader />}
        {error && <h2>{error}</h2>}
        <h2 className={style.camperTitle}>{camper.name}</h2>
        <div className={style.detailsContainer}>
          <div className={style.reviewsWrapper}>
            <svg width={16} height={16}>
              <use href={icons + '#star_pressed'}></use>
            </svg>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={style.locationWrapper}>
            <svg width={16} height={16}>
              <use href={icons + '#map'}></use>
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <h2 className={style.camperPrice}>€{camper.price}.00</h2>

        <ul className={style.camperImageList}>
          {gallery.map((item, index) => {
            return (
              <li key={index}>
                <div className={style.camperImageItem}>
                  <img
                    className={style.camperImage}
                    src={item.thumb}
                    alt={camper.name}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        <p className={style.camperText}>{camper.description}</p>

        <div className={style.tabsWrapper}>
          <button
            className={activeTab === 'features' ? style.active : style.tabBtn}
            type="button"
            onClick={() => handleChangeTab('features')}
          >
            Features
          </button>
          <button
            className={activeTab === 'reviews' ? style.active : style.tabBtn}
            type="button"
            onClick={() => handleChangeTab('reviews')}
          >
            Reviews
          </button>
        </div>
        <div>
          {activeTab === 'features' ? <CamperFeatures /> : <CamperReviews />}
        </div>

        {/* <Suspense fallback={null}>
          <Outlet />
        </Suspense> */}
      </section>
    </div>
  );
};

export default CamperPage;
