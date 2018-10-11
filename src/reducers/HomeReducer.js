import {
  EXPLORE_SELECTED,
  HOTEL_SELECTED,
  RESTAURANT_SELECTED,
  MORE_SELECTED,
} from '../actions/types';

const INITIAL_STATE = {
  icons: '',
  color: '',
  headerTitle: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPLORE_SELECTED:
      return {
        ...state,
        icons: action.payload.icons,
        color: action.payload.color,
        headerTitle: action.payload.headerTitle,
      };
    case HOTEL_SELECTED:
      return {
        ...state,
        icons: action.payload.icons,
        color: action.payload.color,
        headerTitle: action.payload.headerTitle,
      };
    case RESTAURANT_SELECTED:
      return {
        ...state,
        icons: action.payload.icons,
        color: action.payload.color,
        headerTitle: action.payload.headerTitle,
      };
    case MORE_SELECTED:
      return {
        ...state,
        icons: action.payload.icons,
        color: action.payload.color,
        headerTitle: action.payload.headerTitle,
      };
    default:
      return state;
  }
};
