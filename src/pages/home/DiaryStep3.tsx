/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import {colors, Margin, NText, SRowContainer} from '../../components';

interface Props {
  text: string;
  setText: (v: string) => void;
  step: number;
  textNum: number; // 글자수
}

const KeywordBlock = styled.TouchableOpacity`
  margin: 14px 30px;
  padding: 15px 19px;
  background-color: ${colors.primaryLight};
  border-radius: 6px;
`;
export default function DiaryStep3({text, setText, step, textNum}: Props) {
  return (
    <>
      <SRowContainer justifyContent="center" alignItems="center">
        <NText.SB12 text={'홍길동'} color={colors.primary} />
        <NText.SM12
          text={'님! 오늘 하루 어떤 감정들을 느꼈는지 돌아볼'}
          color={colors.textUnavailableGray}
        />
      </SRowContainer>
      <Margin._3 />
      <NText.SM12
        text={'차례에요. 일기 키워드와 관련된 감정들을 선택해 주세요!'}
        color={colors.textUnavailableGray}
        style={{textAlign: 'center'}}
      />

      <Margin._40 />
      <View
        style={{
          backgroundColor: colors.primaryLight,
          width: 69,
          height: 23,
          borderRadius: 7,
          padding: 5,
          position: 'absolute',
          right: 30,
          top: 101,
          alignItems: 'center',
        }}>
        <NText.B10 text="감정어 획득!" color={colors.primary} />
        <Image
          source={require('../../assets/image/pros_4.png')}
          style={{
            width: 45,
            height: 25,
          }}
        />
      </View>
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
      <SRowContainer marginLeft={54} position="absolute" right={65} top={150}>
        <NText.B10 text={`${step}`} color={colors.primary} />
        <NText.B10 text={'/3'} color={colors.lightgray} />
      </SRowContainer>
      <Margin._23 />
      <NText.SM12
        text="키워드 블록을 클릭하면, 20가지 감정어가 나와요!"
        color={colors.textUnavailableGray}
        style={{textAlign: 'center'}}
      />

      {/* 키워드 블록 TODO */}
      <KeywordBlock>
        <NText.SM15 text="회의 준비" color={colors.textUnavailableGray} />
      </KeywordBlock>
    </>
  );
}
