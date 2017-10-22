// We only need to import the modules necessary for initial render
import CoreLayout from '../containers/CoreLayout';
import LandingPage from './landingPage';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */
export const createRoutes = (store) => {
  return {
    path: '/',
    component: CoreLayout,
    indexRoute: LandingPage(store),
    childRoutes: []
  };
};

export default createRoutes;
