import { Link } from 'react-router-dom';
import icons from '../../assets/icons.svg';
import style from './Camper.module.css';
import Badges from '../Badges/Badges.jsx';

const Camper = ({ camper }) => {
  const { gallery } = camper;

  return (
    <div className={style.camperWrapper}>
      <img
        className={style.camperImg}
        src={gallery[0].thumb}
        alt={camper.name}
      />
      <div className={style.camperDescription}>
        <div className={style.titleContainer}>
          <div className={style.titleWrapper}>
            <h2 className={style.camperTitle}>{camper.name}</h2>
            <div className={style.camperTitleWrap}>
              <h2 className={style.camperTitle}>€{camper.price}</h2>
              <button className={style.heartBtn} type="button">
                <svg width={26} height={24}>
                  <use href={icons + '#heart_default'}></use>
                </svg>
              </button>
            </div>
          </div>
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
        </div>
        <p className={style.camperText}>{camper.description}</p>
        <Badges camper={camper} />
        <Link className={style.showMoreBtn} to={`/catalog/${camper.id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default Camper;
