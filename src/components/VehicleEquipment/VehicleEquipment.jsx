import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons.svg';
import style from './VehicleEquipment.module.css';
import { selectVehicleEquipmentFilter } from '../../redux/filters/selectors.js';
import { changeEquipmentFilter } from '../../redux/filters/slice.js';

const VehicleEquipment = () => {
  const vehicleEquipment = useSelector(selectVehicleEquipmentFilter);
  const dispatch = useDispatch();

  const getIcon = (name) => {
    let icon = '';

    switch (name) {
      case 'AC':
        icon = `${icons}#wind`;
        break;
      case 'automatic':
        icon = `${icons}#diagram`;
        break;
      case 'kitchen':
        icon = `${icons}#cup_hot`;
        break;
      case 'TV':
        icon = `${icons}#tv`;
        break;
      case 'bathroom':
        icon = `${icons}#ph_shower`;
        break;
      case 'refrigerator':
        icon = `${icons}#fridge`;
        break;
      case 'microwave':
        icon = `${icons}#microwave`;
        break;
      case 'gas':
        icon = `${icons}#gas`;
        break;
      case 'water':
        icon = `${icons}#water`;
        break;
    }
    return icon;
  };

  const handleChangeEquipment = (event) => {
    dispatch(changeEquipmentFilter(event.target.value));
  };

  return (
    <>
      <h3 className={style.equipmentSubtitle}>Vehicle equipment</h3>
      <div className={style.equipmentWrapper}>
        <ul className={style.equipmentList}>
          {Object.keys(vehicleEquipment).map((equipment) => {
            return (
              <li
                key={equipment}
                className={
                  vehicleEquipment[equipment] === true
                    ? style.active
                    : style.equipmentItem
                }
              >
                <input
                  className={style.equipmentInput}
                  type="checkbox"
                  name="equipment"
                  value={equipment}
                  checked={vehicleEquipment[equipment]}
                  onChange={handleChangeEquipment}
                />
                <svg className={style.equipmentSvg} width={32} height={32}>
                  <use href={getIcon(equipment)}></use>
                </svg>
                {equipment}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default VehicleEquipment;
