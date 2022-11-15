import React from 'react';
import {View} from 'react-native';
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
}
export default function KeywordModal({isVisible, onBackdropPress}: Props) {
  return (
    <BaseModal>
      <View style={{paddingTop: 32}}>
        <NText.SB13 text="키워드 작성 마무리" color={colors.textButtonGray} />
        <Margin._25 />
        <Divider />
        <Margin._24 />
        <View style={{alignItems: 'center'}}>
          <NText.SM15 text="적고 싶은 키워드를 모두" color={colors.textTop} />
          <NText.SM15 text="작성하였는지 확인해보세요" color={colors.textTop} />
        </View>
        <Margin._30 />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 84,
            height: 33,
            borderRadius: 7,
            backgroundColor: colors.sectionGray,
          }}>
          <NText.SB13 text={'하위'} color={colors.textMiddle} />
        </View>
        <Margin._36 />
        <Buttons.PrimaryBtn text="다음 단계로 가기" width={242} height={50} />
        <Margin._9 />
        <NText.SM11 text="조금 더 생각해볼래요" color={colors.textButtonGray} />
      </View>
    </BaseModal>
  );
}
