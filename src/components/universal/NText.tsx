import React from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextLayoutEventData,
  TextStyle,
} from 'react-native';

export type NTextFontWeight = 'B' | 'R' | 'M' | 'L';

interface SpoqaHanSansNeoProps {
  text: string;
  color: string;
  weight: NTextFontWeight;
  fontSize: number;
  style?: TextStyle;
  lineHeightMultipleValue?: number;
  numberOfLines?: number;
  onTextLayout?: (v: NativeSyntheticEvent<TextLayoutEventData>) => void;
}

export const defaultLineHeightMultipleValue = 1.4;

const SpoqaHanSansNeo = ({
  style,
  text,
  color,
  weight,
  fontSize,
  lineHeightMultipleValue = defaultLineHeightMultipleValue,
  numberOfLines,
  onTextLayout,
}: SpoqaHanSansNeoProps) => {
  switch (weight) {
    case 'B':
      return (
        <Text
          style={[
            {
              lineHeight: lineHeightMultipleValue * fontSize,
              color,
              fontSize,
              fontFamily: 'SpoqaHanSansNeo-Bold',
              fontWeight: '700',
            },
            style,
          ]}
          numberOfLines={numberOfLines}
          onTextLayout={onTextLayout}>
          {text}
        </Text>
      );
    case 'M':
      return (
        <Text
          style={[
            {
              lineHeight: lineHeightMultipleValue * fontSize,
              color,
              fontSize,
              fontFamily: 'SpoqaHanSansNeo-Medium',
              fontWeight: '500',
            },
            style,
          ]}
          numberOfLines={numberOfLines}
          onTextLayout={onTextLayout}>
          {text}
        </Text>
      );
    case 'R':
      return (
        <Text
          style={[
            {
              lineHeight: lineHeightMultipleValue * fontSize,
              color,
              fontSize,
              fontFamily: 'SpoqaHanSansNeo-Regular',
              fontWeight: '400',
            },
            style,
          ]}
          numberOfLines={numberOfLines}
          onTextLayout={onTextLayout}>
          {text}
        </Text>
      );
    case 'L':
      return (
        <Text
          style={[
            {
              lineHeight: lineHeightMultipleValue * fontSize,
              color,
              fontSize,
              fontFamily: 'SpoqaHanSansNeo-Light',
              fontWeight: '300',
            },
            style,
          ]}
          numberOfLines={numberOfLines}
          onTextLayout={onTextLayout}>
          {text}
        </Text>
      );
    default:
      return (
        <Text
          style={[
            {
              lineHeight: lineHeightMultipleValue * fontSize,
              color,
              fontSize,
              fontFamily: 'SpoqaHanSansNeo-Regular',
              fontWeight: '400',
            },
            style,
          ]}>
          {text}
        </Text>
      );
  }
};

interface NanumSquareNeoProps {
  text: string;
  color: string;
  weight: NTextFontWeight;
  fontSize: number;
  style?: TextStyle;
  lineHeightMultipleValue?: number;
  numberOfLines?: number;
  onTextLayout?: (v: NativeSyntheticEvent<TextLayoutEventData>) => void;
}

const NanumSquareNeo = ({
  style,
  text,
  color,
  weight,
  fontSize,
  lineHeightMultipleValue = defaultLineHeightMultipleValue,
  numberOfLines,
  onTextLayout,
}: NanumSquareNeoProps) => {
  switch (weight) {
    case 'R':
      return (
        <Text
          style={[
            {
              lineHeight: lineHeightMultipleValue * fontSize,
              color,
              fontSize,
              fontFamily: 'NanumSquareNeo-bRg',
              fontWeight: '400',
            },
            style,
          ]}
          numberOfLines={numberOfLines}
          onTextLayout={onTextLayout}>
          {text}
        </Text>
      );
    default:
      return (
        <Text
          style={[
            {
              lineHeight: lineHeightMultipleValue * fontSize,
              color,
              fontSize,
              fontFamily: 'NanumSquareNeoOTF-bRg',
              fontWeight: '400',
            },
            style,
          ]}>
          {text}
        </Text>
      );
  }
};

export interface NTextProps {
  color: string;
  text: string;
  style?: TextStyle;
  lineHeightMultipleValue?: number;
  numberOfLines?: number;
  weight?: NTextFontWeight;
  onTextLayout?: (v: NativeSyntheticEvent<TextLayoutEventData>) => void;
}

interface NTextCustomProps extends NTextProps {
  fontSize: number;
  weight: NTextFontWeight;
}

{
  /* 디폴트는 나눔스퀘어네오 (R)만 사용, 스포카는 S(L | R | M | B)로 사용 */
}
export const NText = {
  Custom: ({
    style,
    color,
    text,
    numberOfLines,
    lineHeightMultipleValue,
    onTextLayout,
    fontSize,
    weight,
  }: NTextCustomProps) => {
    return (
      <NanumSquareNeo
        style={style}
        color={color}
        weight={weight}
        text={text}
        lineHeightMultipleValue={lineHeightMultipleValue}
        numberOfLines={numberOfLines}
        fontSize={fontSize}
      />
    );
  },
  R36: ({
    style,
    color,
    text,
    numberOfLines,
    lineHeightMultipleValue,
    onTextLayout,
  }: NTextProps) => {
    return (
      <NanumSquareNeo
        style={style}
        color={color}
        weight={'R'}
        text={text}
        lineHeightMultipleValue={lineHeightMultipleValue}
        numberOfLines={numberOfLines}
        onTextLayout={onTextLayout}
        fontSize={36}
      />
    );
  },
  SB15: ({
    style,
    color,
    text,
    numberOfLines,
    lineHeightMultipleValue,
    onTextLayout,
  }: NTextProps) => {
    return (
      <SpoqaHanSansNeo
        style={style}
        color={color}
        weight={'B'}
        text={text}
        lineHeightMultipleValue={lineHeightMultipleValue}
        numberOfLines={numberOfLines}
        onTextLayout={onTextLayout}
        fontSize={15}
      />
    );
  },
};
