import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
// import CamperFeatures from './components/CamperFeatures/CamperFeatures.jsx';
// import CamperReviews from './components/CamperReviews/CamperReviews.jsx';
import Loader from './components/Loader/Loader.jsx';
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const CamperPage = lazy(() => import('./pages/CamperPage/CamperPage.jsx'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx'),
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperPage />} />
            {/* <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} /> */}
            {/* </Route> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
