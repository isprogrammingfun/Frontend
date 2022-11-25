/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {NText, colors, Margin} from '../../components';
import {useRootContext} from '../../RootProvider';

export default function RetroStep2() {
  const rootContext = useRootContext();
  const navigation = useNavigation();
  const [selected, setSelected] = useState<boolean>(false);
  const [retroPurpose, setRetroPurpose] = useState([
    {name: '자아탐색', selected: false},
    {name: '관계고민', selected: false},
    {name: '성취확인', selected: false},
    {name: '감정정리', selected: false},
  ]);
  const onPressPurpose = item => {
    console.log(item);
    setSelected(true);
  };

  const renderItem = ({item, index}: {item: string; index: number}) => {
    const retro1 = item === '자아탐색';
    const retro2 = item === '관계고민';
    const retro3 = item === '성취확인';
    const retro4 = item === '감정정리';

    return (
      <TouchableOpacity
        onPress={() => onPressPurpose(item)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 40,
          paddingHorizontal: 40,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: colors.sectionGray,
          marginLeft: (retro2 && 27) || (retro4 && 27),
          backgroundColor:
            selected && item === '감정정리'
              ? colors.primaryLight
              : colors.white,
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
        <NText.SM15
          text={item}
          color={
            selected && item === '감정정리' ? colors.primary : colors.textMiddle
          }
        />
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
        data={retroPurpose.map(i => i.name)}
        renderItem={renderItem}
        numColumns={2}
        ItemSeparatorComponent={() => <Margin._26 />}
        style={{alignSelf: 'center'}}
      />
      <Margin.BottomSpace />
    </View>
  );
}
