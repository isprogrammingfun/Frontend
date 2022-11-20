/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useMemo, useState} from 'react';
import {AsyncStorage, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {BaseModal, NText, colors, Margin} from '../../components/index';
import {WEB_CLIENT_ID} from '../../key';
import OnboardingCmpt from '../../components/OnboardingCmpt';
import {useRootContext} from '../../RootProvider';

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

export default ({isVisible, openModal, closeModal, onModalHide}: Props) => {
  const rootContext = useRootContext();
  let accessToken;
  let email;
  let refreshToken;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const onPressGoogle = () => {
    GoogleSignin.signIn()
      .then(res => {
        accessToken = res.idToken;
        email = res.user.email;
        // refreshToken = res.refreshToken;
        rootContext.setUser({token: accessToken, username: res.user.name});
        // AsyncStorage.setItem('accessToken', accessToken);
        // AsyncStorage.setItem('refreshToken', res.data.data.refreshToken)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
          onPressGoogle={onPressGoogle}
          onPressNaver={onPressNaver}
          onPressKakao={onPressKakao}
        />
        <Margin._50 />
      </View>
    </BaseModal>
  );
};
