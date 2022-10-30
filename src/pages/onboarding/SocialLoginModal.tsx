import React, {useMemo} from 'react';
import {View} from 'react-native';
import {BaseModal, NText, colors, Margin, width} from '../../components/index';
import OnboardingCmpt from '../../components/OnboardingCmpt';

interface Props {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  onModalHide: () => void;
}

const onPressNaver = () => {
  // TODO 기능 추가
};
const onPressKakao = () => {
  // TODO 기능 추가
};
const onPressFacebook = () => {
  // TODO 기능 추가
};

export default ({isVisible, openModal, closeModal, onModalHide}: Props) => {
  return (
    <BaseModal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onModalHide={onModalHide}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          borderRadius: 30,
          backgroundColor: colors.white,
        }}>
        <Margin._26 />
        <NText.SB15 text="간편로그인하기" color={colors.black} />
        <Margin._40 />
        <OnboardingCmpt.SocialLoginBox
          loginLoading={false}
          onPressNaver={onPressNaver}
          onPressKakao={onPressKakao}
          onPressFacebook={onPressFacebook}
        />
        <Margin._50 />
      </View>
    </BaseModal>
  );
};
