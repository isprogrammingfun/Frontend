/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {colors, Header, Margin, NText} from '../../components';
import {useRootContext} from '../../RootProvider';
import RetroStep1 from './RetroStep1';
import RetroStep2 from './RetroStep2';
import RetroStep3 from './RetroStep3';
import RetroStep4 from './RetroStep4';
import RetroStep5 from './RetroStep5';
import RetroStep6 from './RetroStep6';
import RetroStep7 from './RetroStep7';

interface keywordType {
  id: number;
  name: string;
  selected: boolean;
}
export default function RetroAllStep({route}: any) {
  const rootContext = useRootContext();
  const navigation = useNavigation();

  // state
  // const {year, month} = route.params; // TODO
  const [text, setText] = useState<string>('');
  const [textNum, setTextNum] = useState<number>(0);
  const [keywordArr, setKeywordArr] = useState([
    {
      id: 1,
      name: '전공시험',
      selected: false,
    },
    {
      id: 2,
      name: '노천맥주',
      selected: false,
    },
    {
      id: 3,
      name: '전공시험어쩔겨',
      selected: false,
    },
  ]);
  const [emotionArr, setEmoitonArr] = useState([
    {
      name: '행복',
    },
    {
      name: '짜증',
    },
    {
      name: '불안',
    },
  ]);
  const [step, setStep] = useState<number>(1);
  const [retroNum, setRetroNum] = useState<number>(1);

  // vals
  const stepOne = step === 1; // 감정어 보여주기
  const stepTwo = step === 2; // 회고 목적 선택
  const stepThree = step === 3; // 기억 고르는 화면
  const stepFour = step === 4; // 감정 쓰기1
  const stepFive = step === 5; // 감정 쓰기2
  const stepSix = step === 6; //감정 쓰기3
  const setpSeven = step === 7;

  useEffect(() => {
    setTextNum(text.length);
  }, [text, setTextNum]);

  //func
  const onPressNext = () => {
    setStep(step + 1);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header
        backgroundColor={stepFour ? colors.white : colors.primaryLight}
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
          //스텝4에서 바뀌는 부분
          borderColor: colors.lineGray,
          borderWidth: 1,
          borderStyle: 'solid',
          //바뀌는 부분 끝
          height: 30,
          width: 149,
        }}>
        <NText.SM12
          text={`${2022}년 ${11}월 ${retroNum}차`}
          color={colors.textMiddle}
        />
      </View>
      {/* 스탭4에서 바뀌는 부분 */}
      {/* <Margin._27 /> */}
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          borderRadius: 20,
          paddingHorizontal: 31,
          // paddingVertical: 38, 스텝4에서 바뀌는 부분
        }}>
        {/* 스텝에 따라 달라지는 상태 */}
        {stepOne ? (
          <RetroStep1 selectedKeywords={['행복', '여유']} />
        ) : stepTwo ? (
          <RetroStep2 />
        ) : stepThree ? (
          <RetroStep3 keywordArr={keywordArr} emotionArr={emotionArr} />
        ) : stepFour ? (
          <RetroStep4
            // keywordArr={keywordArr}
            // emotionArr={emotionArr}
            text={text}
            setText={setText}
            textNum={textNum}
          />
        ) : stepFive ? (
          <RetroStep5 text={text} setText={setText} textNum={textNum} />
        ) : stepSix ? (
          <RetroStep6 text={text} setText={setText} textNum={textNum} />
        ) : (
          <RetroStep7 />
        )}
      </View>
    </SafeAreaView>
  );
}
