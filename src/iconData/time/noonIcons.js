import { Actions } from 'react-native-router-flux';

export const noonIcons = [
  {
    name: 'silverware-fork-knife',
    label: 'Lunch',
    onPress: () => Actions.hotel(),
  },
  {
    name: 'terrain',
    label: 'Hiking',
  },
  {
    name: 'city-variant',
    label: 'Commons',
  },
  {
    name: 'flower',
    label: 'Parks',
  },
];
