/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {colors, Header, Margin, NText} from '../../components';
import {useRootContext} from '../../RootProvider';
import RetroStep1 from './RetroStep1';
import RetroStep2 from './RetroStep2';

export default function RetroAllStep({route}: any) {
  const rootContext = useRootContext();
  const navigation = useNavigation();

  // state
  // const {year, month} = route.params; // TODO
  const [step, setStep] = useState<number>(1);
  const [retroNum, setRetroNum] = useState<boolean>(1);

  // vals
  const stepOne = step === 1; // 감정어 보여주기
  const stepTwo = step === 2; // 회고 목적 선택
  const stepThree = step === 3; // 기억 고르는 화면
  const stepFour = step === 4; // 감정 쓰기
  const stepFive = step === 5; // 감정 모달

  //func
  const onPressNext = () => {
    setStep(step + 1);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primaryLight}}>
      <Header
        backgroundColor={colors.primaryLight}
        hasGoBack={false}
        headerLeftCmpnt={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <NText.SB16
              text="나가기"
              color={colors.primary}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        }
        headerCenterCmpnt={
          <View style={{marginLeft: 35}}>
            <NText.SB18 text="회고하기" color={colors.textTop} />
          </View>
        }
        headerRightCmpnt={
          <TouchableOpacity onPress={onPressNext}>
            <NText.SB16
              text="다음"
              color={colors.primary}
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
        }
      />
      <Margin._12 />
      {/* 년 월 일 */}
      <View
        style={{
          borderRadius: 7,
          paddingHorizontal: 25,
          paddingVertical: 7,
          alignItems: 'center',
          marginHorizontal: 115,
          backgroundColor: colors.white,
        }}>
        <NText.SM12
          text={`${2022}년 ${11}월 ${retroNum}차`}
          color={colors.textMiddle}
        />
      </View>
      <Margin._27 />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          borderRadius: 20,
          paddingHorizontal: 31,
          paddingVertical: 38,
        }}>
        {/* 스텝에 따라 달라지는 상태 */}
        {stepOne ? (
          <RetroStep1 selectedKeywords={['행복', '여유']} />
        ) : stepTwo ? (
          <RetroStep2 />
        ) : stepThree ? (
          <></>
        ) : stepFour ? (
          <></>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
}
