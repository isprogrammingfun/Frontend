import React, {memo} from 'react';
import {View, ViewStyle, Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {getBottomSpace} from 'react-native-iphone-x-helper';

const bottomSpace = getBottomSpace();
export const cWidth = Dimensions.get('screen').width;
export const cHeight = Dimensions.get('screen').height;
export const pixel = (size: number) => {
  if (cWidth < 650) {
    // 일반 기종
    return (size * cWidth) / 375;
  } else {
    return (size * cWidth) / 750;
  }
};

interface TouchableProps {
  width?: number;
  height?: number;
  touchable?: boolean;
  onPress?: () => void;
  color?: string;
  style?: ViewStyle;
  opacity?: number;
}
interface CustomProps extends TouchableProps {
  margin: number;
}

const StyledTouchable = styled.TouchableOpacity`
  width: 100%;
`;

const Touchable = memo(
  ({
    height,
    touchable = false,
    onPress = () => null,
    color = 'transparent',
    style = {},
    opacity = 1,
  }: TouchableProps) => (
    <StyledTouchable
      activeOpacity={1}
      disabled={!touchable}
      onPress={onPress}
      style={{
        height,
        opacity,
        backgroundColor: color,
        ...style,
      }}
    />
  ),
);

const MarginBottomSpace = (props: TouchableProps) => (
  <Touchable {...props} height={bottomSpace} />
);
const MarginHalfBottomSpace = (props: TouchableProps) => (
  <Touchable {...props} height={bottomSpace / 2} />
);
const MarginCustom = (props: CustomProps) => (
  <Touchable {...props} height={props.margin} />
);
const MarginCustomWidth = (props: CustomProps) => (
  <View
    style={{
      width: props.margin,
      // height: 1, // 테스트 시 얼마나 차지하는지 보려고
      backgroundColor: props.color || 'transparent',
    }}
  />
);
const _1 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(1)} />
);
const _2 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(2)} />
);
const _3 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(3)} />
);
const _4 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(4)} />
);
const _5 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(5)} />
);
const _6 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(6)} />
);
const _7 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(7)} />
);
const _8 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(8)} />
);
const _9 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(9)} />
);
const _10 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(10)} />
);
const _11 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(11)} />
);
const _12 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(12)} />
);
const _13 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(13)} />
);
const _14 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(14)} />
);
const _15 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(15)} />
);
const _16 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(16)} />
);
const _17 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(17)} />
);
const _18 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(18)} />
);
const _20 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(20)} />
);
const _22 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(22)} />
);
const _23 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(23)} />
);
const _24 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(24)} />
);
const _25 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(25)} />
);
const _26 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(26)} />
);
const _27 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(27)} />
);
const _28 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(28)} />
);
const _30 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(30)} />
);
const _32 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(32)} />
);
const _33 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(33)} />
);
const _35 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(35)} />
);
const _36 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(36)} />
);
const _38 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(38)} />
);
const _40 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(40)} />
);
const _42 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(42)} />
);
const _44 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(44)} />
);
const _45 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(45)} />
);
const _46 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(46)} />
);
const _48 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(48)} />
);
const _50 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(50)} />
);
const _54 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(54)} />
);
const _55 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(55)} />
);
const _56 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(56)} />
);
const _60 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(60)} />
);
const _64 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(64)} />
);
const _65 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(65)} />
);
const _70 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(70)} />
);
const _75 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(75)} />
);
const _76 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(76)} />
);
const _80 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(80)} />
);
const _82 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(82)} />
);
const _85 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(85)} />
);
const _90 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(90)} />
);
const _100 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(100)} />
);
const _150 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(150)} />
);
const _180 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(180)} />
);
const _200 = (props: TouchableProps) => (
  <Touchable {...props} height={pixel(200)} />
);

export const Margin = {
  BottomSpace: MarginBottomSpace,
  HalfBottomSpace: MarginHalfBottomSpace,
  Custom: MarginCustom,
  CustomWidth: MarginCustomWidth,
  _1,
  _2,
  _3,
  _4,
  _5,
  _6,
  _7,
  _8,
  _9,
  _10,
  _11,
  _12,
  _13,
  _14,
  _15,
  _16,
  _17,
  _18,
  _20,
  _22,
  _23,
  _24,
  _25,
  _26,
  _27,
  _28,
  _30,
  _32,
  _33,
  _35,
  _36,
  _38,
  _40,
  _42,
  _44,
  _45,
  _46,
  _48,
  _50,
  _54,
  _55,
  _56,
  _60,
  _64,
  _65,
  _70,
  _75,
  _76,
  _80,
  _82,
  _85,
  _90,
  _100,
  _150,
  _180,
  _200,
};
