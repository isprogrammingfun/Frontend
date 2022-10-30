import React, {useState} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {Margin, NText, colors} from '../../components/index';
import SocialLoginModal from './SocialLoginModal';

export default function Onboarding_Login() {
  const [isOpenSocialLoginModal, setIsOpenSocialLoginModal] =
    useState<boolean>(false);

  return (
    <ImageBackground
      source={require('../../assets/image/onboarding_bg.png')}
      style={{flex: 1, width: '100%', height: '100%'}}
      resizeMode="cover">
      <NText.R36
        text={`나를 찾는 날들,\n나날에 오신 것을\n환영합니다`}
        color={colors.black}
        style={{marginLeft: 34, marginTop: 350}}
      />
      <Margin._100 />
      <TouchableOpacity
        onPress={() => setIsOpenSocialLoginModal(true)}
        style={{
          backgroundColor: colors.primary,
          marginHorizontal: 29,
          paddingVertical: 15,
          borderRadius: 5,
          alignItems: 'center',
        }}>
        <NText.SB15 text="간편 로그인하기" color={colors.white} />
      </TouchableOpacity>
      <SocialLoginModal
        isVisible={isOpenSocialLoginModal}
        openModal={() => setIsOpenSocialLoginModal(true)}
        closeModal={() => setIsOpenSocialLoginModal(false)}
        onModalHide={() => console.log('onModalHide')}
      />
    </ImageBackground>
  );
}
