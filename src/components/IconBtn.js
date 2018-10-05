import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  iconContainerStyle: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

const IconBtn = (props) => {
  const {
    onPress, name, color, size,
  } = props;

  return (
    <View style={styles.iconContainerStyle}>
      <Icon.Button
        name={name}
        solid
        color={color}
        size={size}
        backgroundColor="white"
        borderRadius={0}
        onPress={onPress}
      />
    </View>
  );
};

IconBtn.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

IconBtn.defaultProps = {
  color: 'black',
  size: 25,
};

export default IconBtn;
