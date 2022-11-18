import React from 'react';
import {View} from 'react-native';
import {colors} from './Color';
import {NText} from './NText';

interface BtnProps {
  text: string;
  width: number;
  height: number;
}

const PrimaryBtn = ({text, width, height}: BtnProps) => {
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 69,
        backgroundColor: colors.primary,
        width: width,
        height: height,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <NText.B15 text={text} color={colors.white} />
    </View>
  );
};

export const Buttons = {
  PrimaryBtn,
};
