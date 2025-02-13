import { ThreeDots } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#475467"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass={style.loader}
    />
  );
};

export default Loader;
