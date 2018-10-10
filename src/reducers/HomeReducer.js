import {
  EXPLORE_SELECTED,
  HOTEL_SELECTED,
  RESTAURANT_SELECTED,
  MORE_SELECTED,
} from '../actions/types';

const INITIAL_STATE = {
  selected: '',
  icons: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPLORE_SELECTED:
      return { ...state, icons: action.payload };
    case HOTEL_SELECTED:
      return { ...state, icons: action.payload };
    case RESTAURANT_SELECTED:
      return { ...state, icons: action.payload };
    case MORE_SELECTED:
      return { ...state, icons: action.payload };
    default:
      return state;
  }
};
