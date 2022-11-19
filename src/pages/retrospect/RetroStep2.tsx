/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {NText, colors, Margin} from '../../components';
import {useRootContext} from '../../RootProvider';

export default function RetroStep2() {
  const rootContext = useRootContext();
  const [retroPurpose, setRetroPurpose] = useState([
    '자아탐색',
    '관계고민',
    '성취확인',
    '감정정리',
  ]);

  const renderItem = ({item, index}: {item: string; index: number}) => {
    const retro1 = item === '자아탐색';
    const retro2 = item === '관계고민';
    const retro3 = item === '성취확인';
    const retro4 = item === '감정정리';

    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 40,
          paddingHorizontal: 40,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: colors.sectionGray,
          marginLeft: (retro2 && 27) || (retro4 && 27),
        }}>
        <Image
          source={
            retro1
              ? require('../../assets/image/retro1.png')
              : retro2
              ? require('../../assets/image/retro2.png')
              : retro3
              ? require('../../assets/image/retro3.png')
              : require('../../assets/image/retro4.png')
          }
          style={{width: 38, height: 38}}
          resizeMode="contain"
        />
        <Margin._18 />
        <NText.SM15 text={item} color={colors.textMiddle} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <NText.SB15 text="02" color={colors.primary} />
      <Margin._9 />
      <NText.SB23
        text={`이번주 회고의 목적을\n선택해주세요.`}
        color={colors.textTop}
      />
      <Margin._32 />
      <FlatList
        data={retroPurpose}
        renderItem={renderItem}
        numColumns={2}
        ItemSeparatorComponent={() => <Margin._26 />}
        style={{alignSelf: 'center'}}
      />
      <Margin.BottomSpace />
    </View>
  );
}
