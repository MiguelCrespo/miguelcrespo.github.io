import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

const rootReducer = combineReducers({
  city,
  cities,
  countries,
  user,
  routing
});

export default rootReducer;
