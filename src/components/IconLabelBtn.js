import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  iconContainerStyle: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.333333%',
    marginBottom: 10,
  },
  textStyle: {},
});

const IconLabelBtn = (props) => {
  const {
    onPress, name, color, size, label,
  } = props;

  const { iconContainerStyle, textStyle } = styles;
  return (
    <View style={iconContainerStyle}>
      <Icon.Button
        name={name}
        solid
        color={color}
        size={size}
        backgroundColor="white"
        borderRadius={0}
        onPress={onPress}
      />
      <Text style={textStyle}>{label}</Text>
    </View>
  );
};

IconLabelBtn.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  label: PropTypes.string.isRequired,
};

IconLabelBtn.defaultProps = {
  color: 'black',
  size: 40,
};

export default IconLabelBtn;
