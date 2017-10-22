import { injectReducer } from '../store/reducers';
import { injectSagas } from '../store/sagas';

export default (store) => ({
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const LandingPage = require('../modules/LandingPage/containers/LandingPageContainer').default;
      const reducer = require('../modules/LandingPage/reducers').default;
      const sagas = require('../modules/LandingPage/sagas').default;
      injectReducer(store, { key: 'landingPage', reducer });
      injectSagas(store, { key: 'landingPage', sagas });
      cb(null, LandingPage);
    }, 'landingPage');
  }
});
