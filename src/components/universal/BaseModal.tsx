import React from 'react';
import Modal, {ModalProps} from 'react-native-modal';

// Modal은 다 이곳을 거쳐간다
export default (props: Partial<ModalProps>) => {
  return (
    <Modal
      animationIn={props.animationIn || 'fadeIn'}
      animationOut={props.animationOut || 'fadeOut'}
      isVisible={props.isVisible}
      onModalWillHide={props.onModalWillHide}
      onModalHide={props.onModalHide}
      onModalShow={props.onModalShow}
      onBackButtonPress={props.onBackdropPress}
      onBackdropPress={props.onBackdropPress}
      customBackdrop={props.customBackdrop}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      animationInTiming={275}
      animationOutTiming={275}
      backdropOpacity={props.backdropOpacity}
      style={props.style}>
      {props.children}
    </Modal>
  );
};
