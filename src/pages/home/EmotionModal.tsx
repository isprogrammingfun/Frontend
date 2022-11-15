/* eslint-disable react-native/no-inline-styles */
import {type} from 'os';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
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
  onBackdropPress: () => void;
  keywordArr: string[];
  emotionBlockNum: number;
  setEmotionBlockNum: (v: number) => void;
  emotionBlock: string[];
  setEmotionBlock: Dispatch<SetStateAction<never[]>>;
  setIsVisibleEmotionModal: (v: boolean) => void;
}
export default function EmotionModal({
  isVisibleEmotionModal,
  onBackdropPress,
  keywordArr,
  emotionBlockNum,
  setEmotionBlockNum,
  emotionBlock,
  setEmotionBlock,
  setIsVisibleEmotionModal,
}: Props) {
  // setEmotionBlock({keyword: keywordArr, emotion: DataType});

  const DataType = [
    '행복',
    '여유',
    '안심',
    '슬픔',
    '복잡',
    '즐거움',
    '의욕',
    '쏘쏘',
    '아쉬움',
    '화남',
    '기대',
    '놀람',
    '외로움',
    '짜증',
    '힘듦',
    '뿌듯',
    '상쾌',
    '불안',
    '부담',
    '피곤',
  ];

  const onPressComplete = () => {
    setEmotionBlockNum(0);
    if (emotionBlock) {
      setIsVisibleEmotionModal(false);
    }
  };

  // useEffect(() => {
  //   console.log(emotionBlock);
  // }, [emotionBlock]);

  const renderItem = ({item, index}: {item: string; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          emotionBlock.push(item);
          setEmotionBlockNum(emotionBlockNum + 1);
          if (emotionBlock.length > 3) {
            Alert.alert('키워드는 3개만 고를 수 있습니다.');
          }
        }}>
        <ImageBackground
          source={require('../../assets/image/emotion_bg.png')}
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
      onBackdropPress={onBackdropPress}
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
                emotionBlockNum > 0
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
          data={DataType}
          renderItem={renderItem}
          numColumns={5}
          ItemSeparatorComponent={() => <Margin._13 />}
        />
        <Margin.BottomSpace />
      </View>
    </BaseModal>
  );
}
