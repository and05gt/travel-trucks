import { useSelector } from 'react-redux';
import icons from '../../assets/icons.svg';
import CamperForm from '../CamperForm/CamperForm.jsx';
import { selectCurrentCamper } from '../../redux/campers/selectors.js';
import style from './CamperReviews.module.css';

const CamperReviews = () => {
  const camper = useSelector(selectCurrentCamper);

  const { reviews } = camper;

  const generateStars = (rating) => {
    const stars = [];

    for (let i = 0; i < rating; i += 1) {
      stars.push(
        <svg key={i} width={14} height={14}>
          <use href={icons + '#star_pressed'}></use>
        </svg>,
      );
    }

    for (let i = rating; i < 5; i += 1) {
      stars.push(
        <svg key={i} width={14} height={14}>
          <use href={icons + '#star_default'}></use>
        </svg>,
      );
    }

    return stars;
  };

  return (
    <div className={style.reviewsContainer}>
      <ul className={style.reviewsList}>
        {reviews.map((review, index) => {
          return (
            <li key={index} className={style.reviewsItem}>
              <div className={style.reviewsItemHeader}>
                <span className={style.reviewsImg}>
                  {review.reviewer_name.slice(0, 1)}
                </span>
                <div className={style.reviewsAuthorWrap}>
                  <p>{review.reviewer_name}</p>
                  <div className={style.reviewsStarsList}>
                    {generateStars(review.reviewer_rating)}
                  </div>
                </div>
              </div>
              <p className={style.reviewsText}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
      <CamperForm />
    </div>
  );
};

export default CamperReviews;
