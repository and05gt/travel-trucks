import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import style from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;
