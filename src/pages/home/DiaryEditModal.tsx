/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  BaseModal,
  NText,
  colors,
  Margin,
  Divider,
  SRowContainer,
} from '../../components';

interface Props {
  year: number;
  month: number;
  day: number;
  isVisibleDiaryEditModal: boolean;
  onBackdropPress: () => void;
  keywordArr: string[];
  emotionBlock: string[];
}
export default function DiaryEditModal({
  year,
  month,
  day,
  isVisibleDiaryEditModal,
  onBackdropPress,
  keywordArr,
  emotionBlock,
}: Props) {
  const renderItem = ({item, index}: {item: string; index: number}) => {
    return (
      <View
        style={{
          width: 84,
          height: 33,
          borderRadius: 7,
          marginRight: 10,
          backgroundColor: colors.sectionGray,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <NText.SB13
          text={item}
          color={colors.textMiddle}
          key={index}
          numberOfLines={3}
        />
      </View>
    );
  };
  return (
    <BaseModal
      isVisible={isVisibleDiaryEditModal}
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
          paddingHorizontal: 31,
          paddingTop: 32,
          backgroundColor: colors.white,
          borderRadius: 20,
        }}>
        <SRowContainer alignItems="center" justifyContent="space-between">
          <Ionicons name="close-outline" size={33} color={colors.navButton} />
          <NText.SB13
            text={`${year}년 ${month}월 ${day}일`}
            color={colors.textButtonGray}
          />

          {/* TODO 수정하기 클릭시 수정 api 요청 */}
          <TouchableOpacity onPress={onBackdropPress}>
            <NText.SB15 text="수정하기" color={colors.primary} />
          </TouchableOpacity>
        </SRowContainer>

        <Margin._18 />
        <Divider borderColor={colors.lineGray} />

        <Margin._27 />
        <NText.SM10 text="일기 내용" color={colors.textUnavailableGray} />
        <Margin._10 />
        <NText.SM13 text="일기 내요옹오오옹" color={colors.textTop} />
        <Margin._20 />

        <Divider borderColor={colors.lineGray} />
        <Margin._20 />

        <NText.SM10 text="기록 키워드" color={colors.textUnavailableGray} />
        <Margin._10 />
        <FlatList
          data={keywordArr}
          renderItem={renderItem}
          numColumns={3}
          ItemSeparatorComponent={() => <Margin._12 />}
        />
        <Margin._20 />
        <Divider borderColor={colors.lineGray} />
        <Margin._20 />

        <NText.SM10 text="감정어 블록" color={colors.textUnavailableGray} />
        <FlatList
          data={keywordArr.slice(0, 5)}
          renderItem={({item, index}: {item: string; index: number}) => {
            return (
              <SRowContainer
                backgroundColor={colors.primary}
                width={'100%'}
                borderRadius={7}>
                <NText.SB15
                  text={item}
                  color={colors.white}
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 19,
                  }}
                />
                <ImageBackground
                  source={require('../../assets/image/emotion_color_bg.png')}
                  style={{
                    width: 52,
                    height: 52,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: -2,
                    right: 115,
                  }}>
                  <NText.SM13 text={emotionBlock[0]} color={colors.primary} />
                </ImageBackground>
                <ImageBackground
                  source={require('../../assets/image/emotion_color_bg.png')}
                  style={{
                    width: 52,
                    height: 52,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: -2,
                    right: 57,
                  }}>
                  <NText.SM13 text={emotionBlock[1]} color={colors.primary} />
                </ImageBackground>
                <ImageBackground
                  source={require('../../assets/image/emotion_color_bg.png')}
                  style={{
                    width: 52,
                    height: 52,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: -2,
                    right: 0,
                  }}>
                  <NText.SM13 text={emotionBlock[2]} color={colors.primary} />
                </ImageBackground>
              </SRowContainer>
            );
          }}
          ListHeaderComponent={() => <Margin._20 />}
          ItemSeparatorComponent={() => <Margin._14 />}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
        <Margin.BottomSpace />
      </View>
    </BaseModal>
  );
}
