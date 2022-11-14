/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, Header, Margin, NText} from '../../components';
import DiaryStep1 from './DiaryStep1';
import DiaryStep2 from './DiaryStep2';
import DiaryStep3 from './DiaryStep3';
import DiaryStep4 from './DiaryStep4';
import KeywordModal from './KeywordModal';

export default function DiaryMain({route, navigation}: any) {
  // state
  const {year, month, day} = route.params;
  const [textNum, setTextNum] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [isKeywordModalVisible, setIsKeywordModalVisible] =
    useState<boolean>(false);

  const [text, setText] = useState<string>('');
  const [keyword, setKeyword] = useState('');
  const [keywordArr, setKeywordArr] = useState<string[]>([]);

  // vals
  const stepOne = step === 1;
  const stepTwo = step === 2;
  const stepThree = step === 3;
  const stepFour = step === 4;

  useEffect(() => {
    setTextNum(text.length);

    if (step === 5) return setStep(1);
  }, [text, step, setStep]);

  const onPressNext = () => {
    if (step === 3) {
      setIsKeywordModalVisible(true);
    }
    setStep(step + 1);
  };
  const onPressGoBack = () => {
    if (step === 1) {
      navigation.goBack();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <KeyboardAvoidingView style={{height: '100%'}} behavior="position">
        <KeywordModal
          isVisible={isKeywordModalVisible}
          onBackdropPress={() => setIsKeywordModalVisible(false)}
        />
        <Header
          backgroundColor={colors.white}
          hasGoBack={true}
          onPressGoBack={onPressGoBack}
          headerCenterCmpnt={
            <>
              <NText.SB18 text="일기쓰기" color={colors.textTop} />
            </>
          }
          headerRightCmpnt={
            <>
              <TouchableOpacity
                disabled={!text}
                style={{paddingRight: 24}}
                onPress={onPressNext}>
                <NText.SB16
                  text={stepThree ? '완료' : !stepFour && '다음'}
                  color={
                    (text && step === 1) || keyword
                      ? colors.primary
                      : colors.textUnavailableGray
                  }
                />
              </TouchableOpacity>
            </>
          }
        />
        <Margin._12 />
        {/* 년 월 일 */}
        <View
          style={{
            borderRadius: 7,
            borderWidth: stepFour ? 0 : 1,
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
        {stepOne ? (
          <DiaryStep1
            text={text}
            setText={setText}
            step={step}
            textNum={textNum}
          />
        ) : stepTwo ? (
          <DiaryStep2
            text={text}
            keyword={keyword}
            step={step}
            setKeyword={setKeyword}
            keywordArr={keywordArr}
            setKeywordArr={setKeywordArr}
          />
        ) : stepThree ? (
          <DiaryStep3
            text={text}
            setText={setText}
            step={step}
            textNum={textNum}
            keywordArr={keywordArr}
          />
        ) : (
          <DiaryStep4 />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
