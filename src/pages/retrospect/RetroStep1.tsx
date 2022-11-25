/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import {NText, colors, Margin} from '../../components';
import {useRootContext} from '../../RootProvider';

interface Props {
  selectedKeywords: string[];
}

export default function RetroStep1({selectedKeywords}: Props) {
  const rootContext = useRootContext();

  const [allItems, setAllItems] = useState([
    {
      id: 1,
      name: '행복',
      selected: false,
    },
    {
      id: 2,
      name: '여유',
      selected: false,
    },
    {
      id: 3,
      name: '안심',
      selected: false,
    },
    {
      id: 4,
      name: '슬픔',
      selected: false,
    },
    {
      id: 5,
      name: '복잡',
      selected: false,
    },
    {
      id: 6,
      name: '즐거움',
      selected: false,
    },
    {
      id: 7,
      name: '의욕',
      selected: false,
    },
    {
      id: 8,
      name: '쏘쏘',
      selected: false,
    },
    {
      id: 9,
      name: '아쉬움',
      selected: false,
    },
    {
      id: 10,
      name: '화남',
      selected: false,
    },
    {
      id: 11,
      name: '기대',
      selected: false,
    },
    {
      id: 12,
      name: '놀람',
      selected: false,
    },
    {
      id: 13,
      name: '외로움',
      selected: false,
    },
    {
      id: 14,
      name: '짜증',
      selected: false,
    },
    {
      id: 15,
      name: '힘듦',
      selected: false,
    },
    {
      id: 16,
      name: '뿌듯',
      selected: false,
    },
    {
      id: 17,
      name: '상쾌',
      selected: false,
    },
    {
      id: 18,
      name: '불안',
      selected: false,
    },
    {
      id: 19,
      name: '부담',
      selected: false,
    },
    {
      id: 20,
      name: '피곤',
      selected: false,
    },
  ]);

  const renderItem = ({item, index}: {item: string; index: number}) => {
    const first = item === '부담' || item === '복잡';
    const second =
      item === '즐거움' ||
      item === '행복' ||
      item === '의욕' ||
      item === '쏘쏘';
    const third =
      item === '상쾌' ||
      item === '뿌듯' ||
      item === '불안' ||
      item === '피곤' ||
      item === '힘듦';
    // const fourth =
    //   item === '여유' ||
    //   item === '놀람' ||
    //   item === '짜증' ||
    //   item === '아쉬움';
    return (
      <View>
        <ImageBackground
          source={
            first
              ? require('../../assets/image/first.png')
              : second
              ? require('../../assets/image/second.png')
              : third
              ? require('../../assets/image/third.png')
              : require('../../assets/image/emotion_bg.png')
          }
          style={{
            width: 52,
            height: 52,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 13,
          }}>
          <NText.SM13
            text={item}
            color={
              first
                ? colors.white
                : second
                ? colors.primary
                : third
                ? colors.primary
                : colors.textUnavailableGray
            }
          />
        </ImageBackground>
      </View>
    );
  };

  return (
    <View>
      <NText.SB15 text="01" color={colors.primary} />
      <Margin._9 />
      <NText.SB23
        text={`${rootContext.user.username}님께서 선택하신\n이번주의 감정어들을\n보여드릴게요.`}
        color={colors.textTop}
      />
      <Margin._32 />
      <FlatList
        data={allItems.map(i => i.name)}
        renderItem={renderItem}
        numColumns={5}
        ItemSeparatorComponent={() => <Margin._13 />}
      />
      <Margin.BottomSpace />
    </View>
  );
}
