import { useSelector } from 'react-redux';
import { selectError } from '../../redux/campers/selectors.js';
import style from './ErrorMessage.module.css';

const ErrorMessage = () => {
  const error = useSelector(selectError);

  return (
    <div>
      <h2 className={style.errorMsg}>{error}</h2>
    </div>
  );
};

export default ErrorMessage;
