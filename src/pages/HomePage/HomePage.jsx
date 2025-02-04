import { Link } from 'react-router-dom';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={style.sectionHero}>
      <div className={style.heroContainer}>
        <h1 className={style.heroTitle}>Campers of your dreams</h1>
        <h2 className={style.heroSubtitle}>
          You can find everything you want in our catalog
        </h2>
        <Link className={style.heroBtn} to="/catalog">
          View Now
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
