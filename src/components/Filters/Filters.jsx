import { useDispatch } from 'react-redux';
import icons from '../../assets/icons.svg';
import { changeFilters } from '../../redux/filters/slice.js';
import { Field, Form, Formik } from 'formik';
import style from './Filters.module.css';

const initialValues = {
  location: '',
  vehicleEquipment: [],
  vehicleType: '',
};

const Filters = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(changeFilters(values));
    options.resetForm();
  };

  const handleResetType = (values) => {
    values.vehicleType = '';
  };

  return (
    <div className={style.searchBarWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <label className={style.searchLabel} htmlFor="location">
              <span>Location</span>
              <div className={style.inputWrapper}>
                <Field
                  className={style.searchInput}
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City"
                />
                <svg className={style.iconMap} width={18} height={18}>
                  <use href={icons + '#map'}></use>
                </svg>
              </div>
            </label>
            <p className={style.filtersText}>Filters</p>
            <h3 className={style.filtersSubtitle}>Vehicle equipment</h3>
            <div className={style.filtersWrapper}>
              <ul className={style.filtersList}>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="AC"
                    type="checkbox"
                    name="vehicleEquipment"
                    value="AC"
                  />
                  <label htmlFor="AC" className={style.filtersLabel}>
                    <svg className={style.filtersSvg} width={26} height={26}>
                      <use href={icons + '#wind'}></use>
                    </svg>
                    <p>AC</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="automatic"
                    type="checkbox"
                    name="vehicleEquipment"
                    value="automatic"
                  />
                  <label htmlFor="automatic" className={style.filtersLabel}>
                    <svg className={style.filtersSvg} width={26} height={26}>
                      <use href={icons + '#diagram'}></use>
                    </svg>
                    <p>Automatic</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="kitchen"
                    type="checkbox"
                    name="vehicleEquipment"
                    value="kitchen"
                  />
                  <label htmlFor="kitchen" className={style.filtersLabel}>
                    <svg className={style.filtersSvg} width={26} height={26}>
                      <use href={icons + '#cup_hot'}></use>
                    </svg>
                    <p>Kitchen</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="TV"
                    type="checkbox"
                    name="vehicleEquipment"
                    value="TV"
                  />
                  <label htmlFor="TV" className={style.filtersLabel}>
                    <svg className={style.filtersSvg} width={26} height={26}>
                      <use href={icons + '#tv'}></use>
                    </svg>
                    <p>TV</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="bathroom"
                    type="checkbox"
                    name="vehicleEquipment"
                    value="bathroom"
                  />
                  <label htmlFor="bathroom" className={style.filtersLabel}>
                    <svg className={style.filtersSvg} width={26} height={26}>
                      <use href={icons + '#ph_shower'}></use>
                    </svg>
                    <p>Bathroom</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="refrigerator"
                    type="checkbox"
                    name="vehicleEquipment"
                    value="refrigerator"
                  />
                  <label htmlFor="refrigerator" className={style.filtersLabel}>
                    <svg className={style.filtersSvg} width={26} height={26}>
                      <use href={icons + '#fridge'}></use>
                    </svg>
                    <p>Refrigerator</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="microwave"
                    type="checkbox"
                    name="vehicleEquipment"
                    value="microwave"
                  />
                  <label htmlFor="microwave" className={style.filtersLabel}>
                    <svg className={style.filtersSvg} width={26} height={26}>
                      <use href={icons + '#microwave'}></use>
                    </svg>
                    <p>Microwave</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="gas"
                    type="checkbox"
                    name="vehicleEquipment"
                    value="gas"
                  />
                  <label htmlFor="gas" className={style.filtersLabel}>
                    <svg className={style.filtersSvg} width={26} height={26}>
                      <use href={icons + '#gas'}></use>
                    </svg>
                    <p>Gas</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="water"
                    type="checkbox"
                    name="vehicleEquipment"
                    value="water"
                  />
                  <label htmlFor="water" className={style.filtersLabel}>
                    <svg className={style.filtersSvg} width={26} height={26}>
                      <use href={icons + '#water'}></use>
                    </svg>
                    <p>Water</p>
                  </label>
                </li>
              </ul>
            </div>
            <h3 className={style.filtersSubtitle}>Vehicle type</h3>
            <div className={style.filtersTypeWrapper}>
              <ul className={style.filtersTypeList}>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="panelTruck"
                    type="radio"
                    name="vehicleType"
                    value="panelTruck"
                  />
                  <label
                    htmlFor="panelTruck"
                    className={style.filtersTypeLabel}
                  >
                    <svg className={style.filtersSvg} width={20} height={20}>
                      <use href={icons + '#bi_grid_1x2'}></use>
                    </svg>
                    <p>Van</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="fullyIntegrated"
                    type="radio"
                    name="vehicleType"
                    value="fullyIntegrated"
                  />
                  <label
                    htmlFor="fullyIntegrated"
                    className={style.filtersTypeLabel}
                  >
                    <svg className={style.filtersSvg} width={20} height={20}>
                      <use href={icons + '#bi_grid'}></use>
                    </svg>
                    <p>Fully Integrated</p>
                  </label>
                </li>
                <li className={style.filtersItem}>
                  <Field
                    className={style.filtersInput}
                    id="alcove"
                    type="radio"
                    name="vehicleType"
                    value="alcove"
                  />
                  <label htmlFor="alcove" className={style.filtersTypeLabel}>
                    <svg className={style.filtersSvg} width={20} height={20}>
                      <use href={icons + '#bi_grid_3x3-gap'}></use>
                    </svg>
                    <p>Alcove</p>
                  </label>
                </li>
              </ul>
            </div>
            <div className={style.btnWrapper}>
              <button className={style.searchBtn} type="submit">
                Search
              </button>
              {values.vehicleType.length > 0 && (
                <button
                  className={style.resetBtn}
                  type="submit"
                  onClick={handleResetType}
                >
                  Reset
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filters;
