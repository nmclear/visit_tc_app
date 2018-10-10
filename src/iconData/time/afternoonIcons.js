import { Actions } from 'react-native-router-flux';

export const afternoonIcons = [
  {
    name: 'silverware-fork-knife',
    label: 'Food',
    onPress: () => Actions.hotel(),
  },
  {
    name: 'glass-cocktail',
    label: 'Happy Hour',
  },
  {
    name: 'shopping',
    label: 'Shopping',
  },
  {
    name: 'calendar',
    label: 'Events',
  },
];
