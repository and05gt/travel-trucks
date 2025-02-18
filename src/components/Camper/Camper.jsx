import icons from '../../assets/icons.svg';
import style from './Camper.module.css';

const Camper = ({ camper }) => {
  return (
    <>
      <h2 className={style.camperTitle}>{camper.name}</h2>
      <div className={style.detailsContainer}>
        <div className={style.reviewsWrapper}>
          <svg width={14} height={14}>
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
        {camper.gallery.map((item, index) => {
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
    </>
  );
};

export default Camper;
