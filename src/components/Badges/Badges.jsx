import icons from '../../assets/icons.svg';
import style from './Badges.module.css';

const Badges = ({ camper }) => {
  return (
    <ul className={style.badgeList}>
      <li className={style.badgeItem}>
        <svg width={20} height={20}>
          <use href={icons + '#diagram'}></use>
        </svg>
        {camper.transmission}
      </li>
      <li className={style.badgeItem}>
        <svg width={20} height={20}>
          <use href={icons + '#petrol'}></use>
        </svg>
        {camper.engine}
      </li>
      {camper.kitchen ? (
        <li className={style.badgeItem}>
          <svg width={20} height={20}>
            <use href={icons + '#cup_hot'}></use>
          </svg>
          Kitchen
        </li>
      ) : (
        <li className={style.hidden}></li>
      )}
      {camper.AC ? (
        <li className={style.badgeItem}>
          <svg width={20} height={20}>
            <use href={icons + '#wind'}></use>
          </svg>
          AC
        </li>
      ) : (
        <li className={style.hidden}></li>
      )}
      {camper.TV ? (
        <li className={style.badgeItem}>
          <svg width={20} height={20}>
            <use href={icons + '#tv'}></use>
          </svg>
          TV
        </li>
      ) : (
        <li className={style.hidden}></li>
      )}
      {camper.radio ? (
        <li className={style.badgeItem}>
          <svg width={20} height={20}>
            <use href={icons + '#radio'}></use>
          </svg>
          Radio
        </li>
      ) : (
        <li className={style.hidden}></li>
      )}
      {camper.bathroom ? (
        <li className={style.badgeItem}>
          <svg width={20} height={20}>
            <use href={icons + '#ph_shower'}></use>
          </svg>
          Bathroom
        </li>
      ) : (
        <li className={style.hidden}></li>
      )}
      {camper.refrigerator ? (
        <li className={style.badgeItem}>
          <svg width={20} height={20}>
            <use href={icons + '#fridge'}></use>
          </svg>
          Refrigerator
        </li>
      ) : (
        <li className={style.hidden}></li>
      )}
      {camper.microwave ? (
        <li className={style.badgeItem}>
          <svg width={20} height={20}>
            <use href={icons + '#microwave'}></use>
          </svg>
          Microwave
        </li>
      ) : (
        <li className={style.hidden}></li>
      )}
      {camper.gas ? (
        <li className={style.badgeItem}>
          <svg width={20} height={20}>
            <use href={icons + '#gas'}></use>
          </svg>
          Gas
        </li>
      ) : (
        <li className={style.hidden}></li>
      )}
      {camper.water ? (
        <li className={style.badgeItem}>
          <svg width={20} height={20}>
            <use href={icons + '#water'}></use>
          </svg>
          Water
        </li>
      ) : (
        <li className={style.hidden}></li>
      )}
    </ul>
  );
};

export default Badges;
