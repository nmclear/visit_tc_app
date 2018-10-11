import { TIME_OF_DAY } from './types';

import {
  morningIcons, noonIcons, afternoonIcons, nightIcons, lateNightIcons,
} from '../iconData';

const timeOfDay = payload => ({
  type: TIME_OF_DAY,
  payload,
});

export const timeOfDaySetUp = () => {
  const time = new Date().getHours();
  if (time >= 4 && time < 11) {
    return timeOfDay({ icons: morningIcons, text: 'Good Morning!' });
  }
  if (time >= 11 && time < 15) {
    return timeOfDay({ icons: noonIcons, text: 'Happy Day!' });
  }
  if (time >= 15 && time < 18) {
    return timeOfDay({ icons: afternoonIcons, text: 'Good Afternoon!' });
  }
  if (time >= 18 && time < 22) {
    return timeOfDay({ icons: nightIcons, text: 'Good Evening!' });
  }
  if (time >= 22 && time < 4) {
    return timeOfDay({ icons: lateNightIcons, text: 'Happy Late Night!' });
  }
};
