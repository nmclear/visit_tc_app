import { Actions } from 'react-native-router-flux';

export const lateNightIcons = [
  {
    name: 'owl',
    label: 'Food',
    onPress: () => Actions.hotel(),
  },
  {
    name: 'glass-cocktail',
    label: 'Nightlife',
  },
  {
    name: 'hotel',
    label: 'Hotels',
  },
  {
    name: 'taxi',
    label: 'Taxi',
  },
];
