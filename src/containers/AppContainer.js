import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.shape({
      childRoutes: PropTypes.array,
      component: PropTypes.func,
      indexRoute: PropTypes.object,
      path: PropTypes.string
    }).isRequired,
    store: PropTypes.shape({
      asyncReducers: PropTypes.object,
      asyncSagas: PropTypes.object,
      dispatch: PropTypes.func,
      getState: PropTypes.func,
      subscribe: PropTypes.func
    }).isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { routes, store } = this.props;
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Helmet>
            <title>Sunrise</title>
          </Helmet>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    );
  }
}

export default AppContainer;
