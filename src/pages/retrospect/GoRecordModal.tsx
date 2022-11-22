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
  year: number;
  month: number;
  week: number;
}
export default function RecordModal({
  isVisible,
  onBackdropPress,
  year,
  month,
  week,
}: Props) {
  const navigation = useNavigation();
  const RetroAllStep = () => {
    onBackdropPress();
    navigation.navigate('RetroAllStep', {year: year, month: month, week: week});
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
            text={`${year}년 ${month}월 ${week}차 회고`}
            color={colors.textButtonGray}
          />
          <Margin._27 />
          <Divider borderColor={colors.lineGray} />
          <Margin._27 />
          <NText.SM15
            text={`회고를 진행하면 이번주\n일기를 수정할 수 없어요.\n     회고를 시작할까요?`}
            color={colors.textTop}
          />
          <Margin._28 />
          <TouchableOpacity onPress={RetroAllStep}>
            <Buttons.PrimaryBtn
              text={'회고 시작하기'}
              width={265}
              height={50}
            />
          </TouchableOpacity>
          <Margin._10 />
          <TouchableOpacity onPress={onBackdropPress}>
            <NText.SM11
              text="지금은 안 할래요"
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
