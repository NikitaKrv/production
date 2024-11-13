import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {
        Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {' '}
                { element }
                {' '}
              </div>
            )}
          />
        ))
      }
    </Routes>
  </Suspense>
);

export default AppRouter;
