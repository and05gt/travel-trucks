import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons.svg';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../VehicleType/VehicleType.jsx';
import { changeLocationFilter } from '../../redux/filters/slice.js';
import style from './Filters.module.css';
import { fetchCampers } from '../../redux/campers/operations.js';
import { selectLocationFilter } from '../../redux/filters/selectors.js';

const SearchBar = () => {
  const location = useSelector(selectLocationFilter);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchCampers());
  };

  const handleChangeLocation = (event) => {
    dispatch(changeLocationFilter(event.target.value));
  };

  return (
    <div className={style.searchBarWrapper}>
      <label className={style.searchLabel} htmlFor="location">
        <span>Location</span>
        <div className={style.inputWrapper}>
          <input
            className={style.searchInput}
            id="location"
            name="location"
            type="text"
            value={location}
            placeholder="City"
            onChange={handleChangeLocation}
          />
          <svg className={style.iconMap} width={20} height={20}>
            <use href={icons + '#map'}></use>
          </svg>
        </div>
      </label>
      <p className={style.filtersText}>Filters</p>
      <VehicleEquipment />
      <VehicleType />
      <button className={style.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
