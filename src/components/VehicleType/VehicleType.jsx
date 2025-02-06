import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons.svg';
import style from './VehicleType.module.css';
import { selectVehicleTypeFilter } from '../../redux/filters/selectors.js';
import { changeTypeFilter } from '../../redux/filters/slice.js';

const VehicleType = () => {
  const vehicleType = useSelector(selectVehicleTypeFilter);
  const dispatch = useDispatch();

  const handleChangeType = (event) => {
    dispatch(changeTypeFilter(event.target.value));
  };

  return (
    <>
      <h3 className={style.typeSubtitle}>Vehicle type</h3>
      <div className={style.typeWrapper}>
        <ul className={style.typeList}>
          <li
            className={
              vehicleType === 'panelTruck'
                ? style.typeItemChecked
                : style.typeItem
            }
          >
            <input
              className={style.typeInput}
              type="radio"
              name="equipment"
              value="panelTruck"
              checked={vehicleType === 'panelTruck'}
              onChange={handleChangeType}
            />
            <svg width={32} height={32}>
              <use href={icons + '#bi_grid_1x2'}></use>
            </svg>
            Van
          </li>
          <li
            className={
              vehicleType === 'fullyIntegrated'
                ? style.typeItemChecked
                : style.typeItem
            }
          >
            <input
              className={style.typeInput}
              type="radio"
              name="equipment"
              value="fullyIntegrated"
              checked={vehicleType === 'fullyIntegrated'}
              onChange={handleChangeType}
            />
            <svg width={32} height={32}>
              <use href={icons + '#bi_grid'}></use>
            </svg>
            Fully Integrated
          </li>
          <li
            className={
              vehicleType === 'alcove' ? style.typeItemChecked : style.typeItem
            }
          >
            <input
              className={style.typeInput}
              type="radio"
              name="equipment"
              value="alcove"
              checked={vehicleType === 'alcove'}
              onChange={handleChangeType}
            />
            <svg width={32} height={32}>
              <use href={icons + '#bi_grid_3x3-gap'}></use>
            </svg>
            Alcove
          </li>
        </ul>
      </div>
    </>
  );
};

export default VehicleType;
