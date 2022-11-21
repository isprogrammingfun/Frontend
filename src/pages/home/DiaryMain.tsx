/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, Header, Margin, NText} from '../../components';
import {getCalendarColumns} from '../../components/calendar';
import {useRootContext} from '../../RootProvider';
import DiaryStep1 from './DiaryStep1';
import DiaryStep2 from './DiaryStep2';
import DiaryStep3 from './DiaryStep3';
import DiaryStep4 from './DiaryStep4';
import KeywordModal from './KeywordModal';

export default function DiaryMain({route, navigation}: any) {
  const rootContext = useRootContext();
  // state
  const {year, month, day} = route.params;
  const [textNum, setTextNum] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [isKeywordModalVisible, setIsKeywordModalVisible] =
    useState<boolean>(false);
  const {now} = getCalendarColumns();

  const [text, setText] = useState<string>('');
  const [keyword, setKeyword] = useState('');
  const [keywordArr, setKeywordArr] = useState<string[]>([]);
  const [emotionBlock, setEmotionBlock] = useState<string[]>([]);

  // vals
  const stepOne = step === 1; // 일기 쓰기
  const stepTwo = step === 2; // 키워드 입력
  const stepThree = step === 3; // 키워드 보여주고 감정 선택
  const stepFour = step === 4; // 키워드 확인 모달
  const stepFive = step === 5; // 일기가 저장되었어요!

  useEffect(() => {
    setTextNum(text.length);
    if (step === 3) {
      setIsKeywordModalVisible(true);
    }
    if (step === 4) {
      // 다음 버튼 클릭 시 post 요청
      rootContext.api
        .post('http://15.165.88.145:8080/diary', {
          date: now,
          content: text,
          keywords: [
            {
              keyword: keywordArr[0],
              keywordEmotions: [
                {
                  emotion: emotionBlock[0],
                },
                {
                  emotion: emotionBlock[1],
                },
                {
                  emotion: emotionBlock[2],
                },
              ],
            },
          ],
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    if (step === 6) return setStep(1);
  }, [text, step, setStep, emotionBlock, keywordArr, now, rootContext]);

  const onPressNext = () => {
    setStep(step + 1);
  };
  const onPressGoBack = () => {
    if (step === 1) {
      navigation.goBack();
    } else {
      if (step === 2 || step === 3) {
        setKeywordArr([]); // 뒤로 가기 예외처리
      }
      setStep(step - 1);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <KeyboardAvoidingView style={{height: '100%'}} behavior="position">
        <Header
          backgroundColor={colors.white}
          hasGoBack={true}
          onPressGoBack={onPressGoBack}
          headerCenterCmpnt={
            <View style={{marginLeft: 7}}>
              <NText.SB18 text="일기쓰기" color={colors.textTop} />
            </View>
          }
          headerRightCmpnt={
            <>
              <TouchableOpacity
                disabled={!text}
                style={{paddingRight: 24}}
                onPress={onPressNext}>
                <NText.SB16
                  text={stepFour ? '완료' : !stepFive && '다음'}
                  color={
                    (stepOne && text) || keywordArr.length > 0
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
            borderWidth: stepFive ? 0 : 1,
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
          <KeywordModal
            isVisible={isKeywordModalVisible}
            onBackdropPress={() => {
              setIsKeywordModalVisible(false);
              setKeywordArr([]);
              setStep(step - 1);
            }}
            keywordArr={keywordArr}
            onPressNext={() => setStep(step + 1)}
          />
        ) : stepFour ? (
          <DiaryStep3
            step={step}
            textNum={textNum}
            keywordArr={keywordArr}
            emotionBlock={emotionBlock}
            setEmotionBlock={setEmotionBlock}
          />
        ) : (
          <DiaryStep4 />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
