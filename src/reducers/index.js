import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import GreetingReducer from './GreetingReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
  home: HomeReducer,
  greeting: GreetingReducer,
});
