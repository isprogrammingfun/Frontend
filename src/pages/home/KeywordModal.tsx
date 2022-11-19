/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {
  BaseModal,
  Buttons,
  colors,
  Divider,
  Margin,
  NText,
} from '../../components';

interface Props {
  isVisible: boolean;
  onBackdropPress: () => void;
  keywordArr: string[];
  onPressNext: (v: number) => void;
}
export default function KeywordModal({
  isVisible,
  onBackdropPress,
  keywordArr,
  onPressNext,
}: Props) {
  // func
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
    <BaseModal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View
        style={{
          paddingTop: 32,
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Image
          source={require('../../assets/image/right_nanal.png')}
          style={{
            width: 318,
            height: 175,
            position: 'absolute',
            bottom: 0,
            right: -20,
            resizeMode: 'contain',
          }}
        />
        <NText.SB13 text="키워드 작성 마무리" color={colors.textButtonGray} />
        <Margin._25 />
        <Divider borderColor={colors.lineGray} />
        <Margin._24 />
        <View>
          <NText.SM15
            text="적고 싶은 키워드를 모두"
            color={colors.textTop}
            style={{alignSelf: 'center'}}
          />
          <NText.SM15 text="작성하였는지 확인해보세요" color={colors.textTop} />
        </View>
        <Margin._30 />
        <FlatList
          data={keywordArr}
          renderItem={renderItem}
          numColumns={3}
          ItemSeparatorComponent={() => <Margin._12 />}
        />
        <Margin._36 />
        <TouchableOpacity onPress={onPressNext}>
          <Buttons.PrimaryBtn text="다음 단계로 가기" width={270} height={50} />
        </TouchableOpacity>
        <Margin._9 />
        <TouchableOpacity onPress={onBackdropPress}>
          <NText.SM11
            text="조금 더 생각해볼래요"
            color={colors.textButtonGray}
            style={{
              textDecorationLine: 'underline',
            }}
          />
        </TouchableOpacity>
        <Margin.BottomSpace />
      </View>
    </BaseModal>
  );
}
