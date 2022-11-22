/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {BaseModal, NText, colors, Margin} from '../../components/index';
import {WEB_CLIENT_ID} from '../../key';
import OnboardingCmpt from '../../components/OnboardingCmpt';
import {useRootContext} from '../../RootProvider';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  onModalHide: () => void;
}

export default ({isVisible, openModal, closeModal, onModalHide}: Props) => {
  const rootContext = useRootContext();
  let accessToken;
  let refreshToken;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const onPressNaver = () => {
    // TODO 기능 추가
    rootContext.api
      .get('http://15.165.88.145:8080/oauth2/authorization/naver')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onPressKakao = () => {
    // TODO 기능 추가
    rootContext.api
      .get('http://15.165.88.145:8080/oauth2/authorization/kakao')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onPressGoogle = () => {
    GoogleSignin.signIn().then(googleRes => {
      axios
        .post('http://15.165.88.145:8080/auth/signup', {
          email: googleRes.user.email,
          name: googleRes.user.name,
          provider: 'google',
        })
        .then(res => {
          accessToken = res.data.result.token;
          refreshToken = res.data.result.refreshToken;
          console.log(accessToken);
          console.log(refreshToken);
          rootContext.setUser({
            token: accessToken,
            username: googleRes.user.name,
          });
          AsyncStorage.setItem('accessToken', accessToken);
          AsyncStorage.setItem('refreshToken', refreshToken);
        })
        .catch(function (error) {
          console.log(error);
        });
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
