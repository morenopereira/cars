import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { car } from '../redux/car';
import { brands } from '../redux/brands';
import { models } from '../redux/models';
import { years } from '../redux/years';
import { versions } from '../redux/versions';

export const reducers = combineReducers({
  brands,
  models,
  years,
  versions,
  car,
});

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
