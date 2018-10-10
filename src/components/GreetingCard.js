import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardSection, ButtonMini } from './common';
import IconBar from './IconBar';

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
  },
  headerStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  textStyle: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const GreetingCard = (props) => {
  const {
    cardSectionStyle, headerStyle, textStyle, containerStyle,
  } = styles;
  const {
    children, visible, onClose, icons,
  } = props;

  return (
    <View style={[containerStyle, { display: visible }]}>
      <Card style={{ marginLeft: 0, marginRight: 0 }}>
        <CardSection style={cardSectionStyle}>
          <Text style={headerStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <Text style={textStyle}>Here's what's happening around the corner...</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <IconBar icons={icons} />
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <ButtonMini onPress={onClose}>Close</ButtonMini>
        </CardSection>
      </Card>
    </View>
  );
};

GreetingCard.propTypes = {
  children: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

GreetingCard.defaultProps = {
  visible: 'flex',
};

export default GreetingCard;
