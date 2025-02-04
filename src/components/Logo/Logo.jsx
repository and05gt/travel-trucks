import style from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <p className={style.logo}>
        Travel<span className={style.logoAccent}>Trucks</span>
      </p>
    </>
  );
};

export default Logo;
