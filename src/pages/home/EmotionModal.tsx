/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BaseModal, NText, colors, Margin, Divider} from '../../components';

// type KeywordArr = {
//   keyword: string[];
//   emotion: string[];
// };
interface Props {
  isVisibleEmotionModal: boolean;
  keywordArr: string[];
  emotionBlock: string[];
  setEmotionBlock: (v: string[]) => void;
  setIsVisibleEmotionModal: (v: boolean) => void;
}
export default function EmotionModal({
  isVisibleEmotionModal,
  keywordArr,
  emotionBlock,
  setEmotionBlock,
  setIsVisibleEmotionModal,
}: Props) {
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
    },
    {
      selected: false,
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
  ]);

  const selectedItemList = item => {
    if (emotionBlock.length < 3) {
      setEmotionBlock([...emotionBlock, item]);
      let temp = allItems.filter(parentItem => parentItem.id !== item.id);
      item.selected = !item.selected;
      temp = temp.concat(item);
      temp.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      setAllItems(temp);
    }
  };

  const onPressComplete = () => {
    if (emotionBlock) {
      setIsVisibleEmotionModal(false);
    }
  };

  const renderItem = ({item, index}: {item: string; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          selectedItemList(item);
          emotionBlock.push(item);
          if (emotionBlock.length > 3) {
            Alert.alert('키워드는 3개만 고를 수 있습니다.');
          }
        }}>
        <ImageBackground
          source={
            emotionBlock.includes(item)
              ? require('../../assets/image/emotion_color_bg.png')
              : require('../../assets/image/emotion_bg.png')
          }
          style={{
            width: 52,
            height: 52,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 13,
          }}>
          <NText.SM13 text={item} color={colors.textUnavailableGray} />
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <BaseModal
      isVisible={isVisibleEmotionModal}
      onBackdropPress={() => {
        setIsVisibleEmotionModal(false);
        setEmotionBlock([]); // 일기쓰기에 보이는 키워드 step 3
      }}
      style={{
        width: '100%',
        height: 350,
        justifyContent: 'flex-end',
        marginBottom: 0,
        alignSelf: 'center',
      }}>
      <View
        style={{
          paddingHorizontal: 19,
          paddingTop: 32,
          paddingBottom: 20,
          backgroundColor: colors.white,
          alignItems: 'center',
          borderRadius: 6,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
          }}>
          <Ionicons name="close-outline" size={30} color={colors.navButton} />
          <NText.SB13
            text="감정 블록 선택"
            color={colors.textButtonGray}
            style={{marginLeft: 10}}
          />
          <TouchableOpacity onPress={onPressComplete}>
            <NText.SB15
              text="선택 완료"
              color={
                emotionBlock.length > 0
                  ? colors.primary
                  : colors.textUnavailableGray
              }
            />
          </TouchableOpacity>
        </View>
        <Margin._20 />
        <Divider borderColor={colors.lineGray} />
        <Margin._10 />
        <NText.SM12
          text="키워드와 관련된 감정어를 선택해주세요!"
          color={colors.textUnavailableGray}
        />
        <NText.SM12
          text="최대 3개의 감정어를 고를 수 있습니다."
          color={colors.textUnavailableGray}
        />
        <Margin._18 />
        <FlatList
          data={allItems.map(i => i.name)}
          renderItem={renderItem}
          numColumns={5}
          ItemSeparatorComponent={() => <Margin._13 />}
        />
        <Margin.BottomSpace />
      </View>
    </BaseModal>
  );
}
