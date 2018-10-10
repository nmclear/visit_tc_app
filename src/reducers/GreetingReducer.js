import { TIME_OF_DAY } from '../actions/types';
import { noonIcons } from '../iconData';

const INITIAL_STATE = {
  icons: noonIcons,
  text: 'Good Day!',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIME_OF_DAY:
      return { ...state, icons: action.payload.icons, text: action.payload.text };
    default:
      return state;
  }
};
