import { Link } from 'react-router-dom';
import icons from '../../assets/icons.svg';
import Badges from '../Badges/Badges.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/campers/selectors.js';
import { toggleFavorite } from '../../redux/campers/slice.js';
import style from './Camper.module.css';

const Camper = ({ camper }) => {
  const { gallery } = camper;
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.some((favorite) => favorite.id === camper.id);

  const handleChangeFavorite = () => {
    dispatch(toggleFavorite(camper));
  };

  return (
    <div className={style.camperWrapper}>
      <img
        className={style.camperImg}
        src={gallery[0].thumb}
        alt={camper.name}
      />
      <div className={style.camperInfo}>
        <div className={style.titleContainer}>
          <div className={style.titleWrapper}>
            <h2 className={style.camperTitle}>{camper.name}</h2>
            <div className={style.camperTitleWrap}>
              <h2 className={style.camperTitle}>€{camper.price}.00</h2>
              <button
                className={style.heartBtn}
                type="button"
                onClick={handleChangeFavorite}
              >
                {isFavorite ? (
                  <svg className={style.heartSvg} width={22} height={20}>
                    <use href={icons + '#heart_pressed'}></use>
                  </svg>
                ) : (
                  <svg className={style.heartSvg} width={22} height={20}>
                    <use href={icons + '#heart_default'}></use>
                  </svg>
                )}
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
        <p className={style.camperDescription}>{camper.description}</p>
        <Badges camper={camper} />
        <Link
          className={style.showMoreBtn}
          to={`/catalog/${camper.id}`}
          target="_blank"
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default Camper;
