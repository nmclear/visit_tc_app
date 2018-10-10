import { Actions } from 'react-native-router-flux';

export const morningIcons = [
  {
    name: 'silverware-fork-knife',
    label: 'Breakfast',
    onPress: () => Actions.hotel(),
  },
  {
    name: 'coffee',
    label: 'Coffee Shops',
  },
  {
    name: 'lifebuoy',
    label: 'Beaches',
  },
  {
    name: 'bike',
    label: 'Trails',
  },
];
