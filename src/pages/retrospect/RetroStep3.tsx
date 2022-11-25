/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {NText, colors, Margin, Divider, SRowContainer} from '../../components';
import {useRootContext} from '../../RootProvider';
import dayjs, {Dayjs} from 'dayjs';

interface Props {
  keywordArr: {
    id: string;
    name: string;
    emotion: {
      feel: string;
    }[];
  }[];
  emotionArr: {
    name: string;
  }[];
}

type DataType = {
  keywords: {
    date: Dayjs;
    keyword: string;
    keywordEmotions: string[];
  };
};

export default function RetroStep3({keywordArr, emotionArr}: Props) {
  const rootContext = useRootContext();
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [data, setData] = useState<DataType[]>([]);
  const now = dayjs();

  // useEffect
  useEffect(() => {
    rootContext.api
      .get('/retrospect/keyword', {
        params: {
          currentDate: now.toDate(),
        },
      })
      .then(res => {
        setData(res.data.result.keywords);
        // console.log(res.data.result.keywords);
      })
      .catch(err => console.log(err));
  }, []);

  // 아이템 선택한 리스트
  const selectedItemList = item => {
    let temp = keywordArr.filter(parentItem => parentItem.id !== item.id);
    item.selected = !temp.map(i => i.selected);
    temp = temp.concat(item);
    temp.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    temp = temp.slice(3, 4);
    setSelectedItem([...selectedItem, item]);
    console.log(selectedItem);
  };

  const renderItem = ({item, index}: {item: string; index: number}) => {
    const select = selectedItem.includes(item);
    return (
      <View
        style={{
          flex: 1,
          marginLeft: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            selectedItemList(item);
          }}>
          <SRowContainer alignItems="center">
            <Image
              source={require('../../assets/image/checkbox.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: select ? colors.primary : colors.UnavailableGray,
              }}
            />
            <Margin.CustomWidth margin={14} />
            {select ? (
              <>
                <NText.SB15
                  text={item}
                  color={colors.textTop}
                  style={{flex: 2}}
                />
              </>
            ) : (
              <>
                <NText.SM15
                  text={item}
                  color={colors.textUnavailableGray}
                  style={{flex: 2}}
                />
              </>
            )}
            {emotionArr.map((emotion, index) => {
              return (
                <ImageBackground
                  key={index}
                  source={
                    select
                      ? require('../../assets/image/emotion_color_2_bg.png')
                      : require('../../assets/image/emotion_bg.png')
                  }
                  style={{
                    width: 45,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 13,
                    flex: 1,
                  }}>
                  <NText.SB12
                    text={emotion.name}
                    color={select ? colors.white : colors.textUnavailableGray}
                    style={{paddingRight: 4, paddingTop: 4}}
                  />
                </ImageBackground>
              );
            })}
          </SRowContainer>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <NText.SB15 text="03" color={colors.primary} />
      <Margin._9 />
      <NText.SB23
        text={`아래의 기록들 중,\n꼭 돌아보고 싶은 기억만\n골라주세요`}
        color={colors.textTop}
      />
      <Margin._9 />
      <NText.SB12
        text="*최대 5개까지 선택 가능합니다."
        color={colors.primary}
      />
      <Margin._25 />
      <SRowContainer>
        <NText.SM12
          text={'11월 20일 - 11월 26일'}
          color={colors.textUnavailableGray}
        />
        <Divider
          borderColor={colors.lineGray}
          style={{width: 192, marginLeft: 12}}
        />
      </SRowContainer>
      <Margin._15 />
      <FlatList
        data={keywordArr.map(i => i.name)}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Margin._14 />}
      />
      <Margin._14 />
    </View>
  );
}
