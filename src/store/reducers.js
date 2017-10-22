/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import locationReducer from './location';
import landingPageReducer from '../modules/LandingPage/reducers';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    landingPage: landingPageReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
