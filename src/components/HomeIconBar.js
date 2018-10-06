import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import IconBtn from './IconBtn';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

const HomeIconBar = () => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <IconBtn
        name="silverware-fork-knife"
        color="black"
        size={25}
        onPress={() => Actions.explore()}
      />
      <IconBtn name="hotel" color="black" size={25} onPress={() => Actions.explore()} />
      <IconBtn name="binoculars" color="#82CAFF" size={25} onPress={() => Actions.explore()} />
      <IconBtn name="dots-horizontal" color="black" size={25} onPress={() => Actions.explore()} />
    </View>
  );
};

export default HomeIconBar;
