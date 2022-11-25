/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  BaseModal,
  Buttons,
  colors,
  Divider,
  Margin,
  NText,
} from '../../components';
import {useNavigation} from '@react-navigation/native';

interface Props {
  isVisible: boolean;
  onBackdropPress: () => void;
  retroNum: number;
}

export default function RetroFinishModal({
  isVisible,
  onBackdropPress,
  retroNum,
}: Props) {
  const navigation = useNavigation();
  const onPressFinish = () => {
    setTimeout(() => {
      navigation.navigate('RetroCompletion');
    }, 100);
    onBackdropPress();
  };
  return (
    <BaseModal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <>
        <View
          style={{
            paddingHorizontal: 19,
            paddingTop: 32,
            paddingBottom: 20,
            backgroundColor: colors.white,
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <Image
            source={require('../../assets/image/right_nanal.png')}
            style={{
              width: 318,
              height: 175,
              position: 'absolute',
              bottom: 0,
              right: -20,
              resizeMode: 'contain',
            }}
          />
          <NText.SB13
            text={`${2022}년 ${11}월 ${retroNum}차`}
            color={colors.textButtonGray}
          />
          <Margin._27 />
          <Divider borderColor={colors.lineGray} />
          <Margin._27 />
          <View>
            <NText.SM15
              text="회고를 마치면"
              color={colors.textTop}
              style={{alignSelf: 'center'}}
            />
            <NText.SM15
              text="기억창고를 수정할 수 없어요."
              color={colors.textTop}
              style={{alignSelf: 'center'}}
            />
            <NText.SM15
              text="회고를 마치시겠어요?"
              color={colors.textTop}
              style={{alignSelf: 'center'}}
            />
          </View>
          <Margin._28 />
          <TouchableOpacity onPress={onPressFinish}>
            <Buttons.PrimaryBtn text={'회고 마치기'} width={265} height={50} />
          </TouchableOpacity>
          <Margin._10 />
          <TouchableOpacity onPress={onBackdropPress}>
            <NText.SM11
              text="기억창고 수정할래요"
              color={colors.textUnavailableGray}
              style={{
                textDecorationLine: 'underline',
              }}
            />
          </TouchableOpacity>
        </View>
      </>
    </BaseModal>
  );
}
