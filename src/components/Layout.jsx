import { Suspense } from 'react';
import AppBar from './AppBar/AppBar.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
