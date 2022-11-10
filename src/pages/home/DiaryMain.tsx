/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, Header, Margin, NText} from '../../components';
import DiaryStep1 from './DiaryStep1';
import DiaryStep2 from './DiaryStep2';
import DiaryStep3 from './DiaryStep3';

export default function DiaryMain({route, navigation}: any) {
  const {year, month, day} = route.params;
  const [text, setText] = useState<string>('');
  const [textNum, setTextNum] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    setTextNum(text.length);

    if (step === 4) return setStep(1);
  }, [text, step, setStep]);

  const onPressNext = () => {
    setStep(step + 1);
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <KeyboardAvoidingView style={{height: '100%'}} behavior="position">
        <StatusBar />
        <Header
          hasGoBack={true}
          onPressGoBack={() => navigation.goBack()}
          headerCenterCmpnt={
            <>
              <NText.SB18
                text="일기쓰기"
                color={colors.textTop}
                style={{marginTop: 3}}
              />
            </>
          }
          headerRightCmpnt={
            <>
              <TouchableOpacity
                style={{paddingRight: 24}}
                onPress={onPressNext}>
                <NText.SB16
                  text="다음"
                  color={text ? colors.primary : colors.textUnavailableGray}
                />
              </TouchableOpacity>
            </>
          }
        />
        <Margin._12 />
        <ScrollView style={{height: '100%'}}>
          {/* 년 월 일 */}
          <View
            style={{
              borderRadius: 7,
              borderWidth: 1,
              borderColor: colors.lineGray,
              paddingHorizontal: 25,
              paddingVertical: 7,
              alignItems: 'center',
              marginHorizontal: 115,
            }}>
            <NText.SM12
              text={`${year}년 ${month}월 ${day}일`}
              color={colors.textMiddle}
            />
          </View>
          <Margin._11 />

          {/* 일기 쓰기 or 핵심만 쏙! or 감정어 획득! */}
          {step === 1 ? (
            <DiaryStep1
              text={text}
              setText={setText}
              step={step}
              textNum={textNum}
            />
          ) : step === 2 ? (
            <DiaryStep2
              text={text}
              setText={setText}
              step={step}
              textNum={textNum}
            />
          ) : (
            <DiaryStep3
              text={text}
              setText={setText}
              step={step}
              textNum={textNum}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
