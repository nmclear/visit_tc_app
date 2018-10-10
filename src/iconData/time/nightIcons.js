import { Actions } from 'react-native-router-flux';

export const nightIcons = [
  {
    name: 'silverware-fork-knife',
    label: 'Dinner',
    onPress: () => Actions.hotel(),
  },
  {
    name: 'glass-cocktail',
    label: 'Nightlife',
  },
  {
    name: 'ticket',
    label: 'Theater',
  },
  {
    name: 'taxi',
    label: 'Taxi',
  },
];
