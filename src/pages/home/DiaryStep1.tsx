/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors, Margin, NText, SRowContainer} from '../../components';

interface Props {
  text: string;
  setText: (v: string) => void;
  step: number;
  textNum: number; // 글자수
}
export default function DiaryStep1({text, setText, step, textNum}: Props) {
  return (
    <>
      <SRowContainer justifyContent="center" alignItems="center">
        <NText.SB12 text={'홍길동'} color={colors.primary} />
        <NText.SM12
          text={'님! 오늘은 어떤 하루 였는지, 무슨 일을 했고'}
          color={colors.textUnavailableGray}
        />
      </SRowContainer>
      <Margin._3 />
      <NText.SM12
        text={'어떠한 감정을 느꼈는지 마음껏 써주세요.'}
        color={colors.textUnavailableGray}
        style={{textAlign: 'center'}}
      />
      <Margin._3 />
      <NText.SM12
        text={'자세하게 쓸수록 당신의 감정 창고가 채워집니다.'}
        color={colors.textUnavailableGray}
        style={{textAlign: 'center'}}
      />

      <Margin._18 />
      <View
        style={{
          backgroundColor: colors.primaryLight,
          width: 57,
          height: 23,
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 41,
        }}>
        <NText.B10 text="일기쓰기!" color={colors.primary} />
      </View>
      <Image
        source={require('../../assets/image/pros_4.png')}
        style={{
          width: 45,
          height: 25,
          position: 'absolute',
          left: 40,
          top: 140,
        }}
      />
      <Margin._15 />
      <SRowContainer alignItems="center">
        <Image
          source={require('../../assets/image/line.png')}
          style={{width: 320, height: 1.5, marginLeft: 30}}
        />
        <Image
          source={require('../../assets/image/circle.png')}
          style={{width: 12, height: 12, marginRight: 29}}
        />
      </SRowContainer>
      <SRowContainer marginLeft={54}>
        <NText.B10 text={`${step}`} color={colors.primary} />
        <NText.B10 text={'/3'} color={colors.lightgray} />
      </SRowContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            marginHorizontal: 29,
            marginTop: 13,
            backgroundColor: colors.primaryLight,
            height: 430,
          }}>
          <NText.SM12
            text={`(${textNum}자 / 300자)`}
            color={colors.textUnavailableGray}
            style={{position: 'absolute', top: 10, right: 10}}
          />
          <TextInput
            value={text}
            placeholder={`나날이의 영양분이 될,당신의 하루를 이야기 해주세요!`}
            onChangeText={v => setText(v)}
            maxLength={300}
            multiline={true}
            returnKeyLabel={'완료'}
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
            style={{
              flexShrink: 1,
              paddingHorizontal: 21,
              paddingTop: 40,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
