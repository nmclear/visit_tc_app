import React from 'react';
import {
  Text, View, Modal, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { ButtonMini, CardSection } from './common';
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

const GreetingModal = (props) => {
  const {
    cardSectionStyle, headerStyle, textStyle, containerStyle,
  } = styles;
  const {
    children, visible, onClose, icons,
  } = props;
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={() => {}}>
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={headerStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <Text style={textStyle}>Heres what happening around the corner...</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <IconBar icons={icons} />
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <ButtonMini onPress={onClose}>Close</ButtonMini>
        </CardSection>
      </View>
    </Modal>
  );
};

GreetingModal.propTypes = {
  children: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

GreetingModal.defaultProps = {
  visible: true,
};

export default GreetingModal;
