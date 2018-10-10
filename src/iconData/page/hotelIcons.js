import { Actions } from 'react-native-router-flux';

export const hotelIcons = [
  {
    name: 'pool',
    label: 'Resort',
    onPress: () => Actions.hotel(),
  },
  {
    name: 'beach',
    label: 'Beach Front',
  },
  {
    name: 'city',
    label: 'Downtown',
  },
  {
    name: 'hot-tub',
    label: 'Vacation Rentals',
  },
  {
    name: 'key',
    label: "B n B's",
  },
  {
    name: 'dice-5',
    label: 'Casinos',
  },
  {
    name: 'hotel',
    label: 'Hotels',
  },
];
