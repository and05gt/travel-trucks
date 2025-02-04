import { NavLink, Outlet, useParams } from 'react-router-dom';
import icons from '../../assets/icons.svg';
import style from './CamperPage.module.css';
import { Suspense, useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperById } from '../../redux/campers/operations.js';
import { selectCurrentCamper } from '../../redux/campers/selectors.js';

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const CamperPage = () => {
  const { id } = useParams();
  const camper = useSelector(selectCurrentCamper);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  const { gallery } = camper;

  if (!gallery) return;

  return (
    <div className={style.camperContainer}>
      <section className={style.camperSection}>
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
        <h2 className={style.camperPrice}>€{camper.price}</h2>

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
        <div>
          <div className={style.tabsWrapper}>
            <NavLink className={buildLinkClass} to="features">
              Features
            </NavLink>
            <NavLink className={buildLinkClass} to="reviews">
              Reviews
            </NavLink>
          </div>
        </div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default CamperPage;
