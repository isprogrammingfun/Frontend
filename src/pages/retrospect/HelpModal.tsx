/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  BaseModal,
  colors,
  Divider,
  Margin,
  NText,
  SRowContainer,
} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface Props {
  isVisible: boolean;
  onBackdropPress: () => void;
  question: string;
  help: string;
}
export default function HelpModal({
  isVisible,
  onBackdropPress,
  question,
  help,
}: Props) {
  return (
    <BaseModal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 10,
            paddingTop: 15,
            paddingBottom: 20,
            backgroundColor: colors.white,
            borderRadius: 6,
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
          <Margin._25 />
          <SRowContainer>
            <TouchableOpacity onPress={onBackdropPress}>
              <Ionicons
                name="close"
                size={30}
                color={colors.textMiddle}
                style={{paddingLeft: 15}}
              />
            </TouchableOpacity>
            <Margin.CustomWidth margin={40} />
            <NText.SB15
              text={`${question}`}
              color={colors.textTop}
              style={{textAlign: 'center'}}
            />
          </SRowContainer>
          <Margin._25 />
          <Divider borderColor={colors.lineGray} />
          <Margin._24 />
          <NText.SB13
            text={`${help}`}
            color={colors.textButtonGray}
            style={{textAlign: 'center'}}
          />
          <Margin._56 />
        </View>
      </>
    </BaseModal>
  );
}
