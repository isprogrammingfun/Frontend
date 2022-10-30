import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import styled, {css} from 'styled-components/native';
import {ImageIcon} from './universal/Basic';
import {Margin} from './universal/Margin';

export type LOGIN_LOADING_TYPE =
  | false
  | 'isKakaoLoading'
  | 'isNaverLoading'
  | 'isFacebookLoading';

const defaultLoginBtnMarginBottom = 16;
const loginBtnWidth = 290;
const loginBtnHeight = 48;

const CircleLoginButtonContainer = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  border-radius: 30px;
  background-color: ${props => props.bg || 'transparent'};
  align-items: center;
  justify-content: center;
`;

interface LoginBtnProps {
  loading: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const CircleKakaoLoginBtn = ({
  loading,
  disabled = false,
  onPress,
}: LoginBtnProps) => {
  return (
    <CircleLoginButtonContainer
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.5}
      bg={'#FBEA4E'}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <>
          <ImageIcon
            source={require('../assets/image/kakao_icon.png')}
            width={loginBtnWidth * 0.5}
            height={loginBtnHeight * 0.5}
            resizeMode="contain"
          />
        </>
      )}
    </CircleLoginButtonContainer>
  );
};
const CircleNaverLoginBtn = ({
  loading,
  disabled = false,
  onPress,
}: LoginBtnProps) => {
  return (
    <CircleLoginButtonContainer
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.5}
      bg={'#00C73C'}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <>
          <ImageIcon
            source={require('../assets/image/naver_icon.png')}
            width={loginBtnWidth * 0.5}
            height={loginBtnHeight * 0.5}
            resizeMode="contain"
          />
        </>
      )}
    </CircleLoginButtonContainer>
  );
};
const CircleFacebookLoginBtn = ({
  loading,
  disabled = false,
  onPress,
}: LoginBtnProps) => {
  return (
    <CircleLoginButtonContainer
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.5}
      bg={'#4566BD'}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <>
          <ImageIcon
            source={require('../assets/image/facebook_icon.png')}
            width={loginBtnWidth * 0.5}
            height={loginBtnHeight * 0.5}
            resizeMode="contain"
          />
        </>
      )}
    </CircleLoginButtonContainer>
  );
};
const SocialLoginBox = ({
  loginLoading,
  onPressNaver,
  onPressKakao,
  onPressFacebook,
  loginBtnMarginBottom = defaultLoginBtnMarginBottom,
}: {
  loginLoading: LOGIN_LOADING_TYPE;
  onPressKakao: () => void;
  onPressNaver: () => void;
  onPressFacebook: () => void;
  loginViewStyle?: ViewStyle;
  loginBtnMarginBottom?: number;
}) => {
  // val
  const isKakaoLoading = loginLoading === 'isKakaoLoading';
  const isNaverLoading = loginLoading === 'isNaverLoading';
  const isFacebookLoading = loginLoading === 'isFacebookLoading';
  const isLoginLoading = loginLoading !== false; // 네이버, 카카오, 페이스북 하나라도 로딩중이다.

  return (
    <View style={{flexDirection: 'row'}}>
      <CircleNaverLoginBtn
        onPress={onPressNaver}
        loading={isNaverLoading}
        disabled={isLoginLoading}
      />
      <Margin.CustomWidth margin={24} />
      <CircleKakaoLoginBtn
        onPress={onPressKakao}
        loading={isKakaoLoading}
        disabled={isLoginLoading}
      />
      <Margin.CustomWidth margin={24} />
      <CircleFacebookLoginBtn
        onPress={onPressFacebook}
        loading={isFacebookLoading}
        disabled={isLoginLoading}
      />
    </View>
  );
};

export default {
  SocialLoginBox,
};
