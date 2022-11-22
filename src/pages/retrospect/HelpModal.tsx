/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {BaseModal, colors, Divider, Margin, NText, SRowContainer,} from '../../components';
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
            paddingHorizontal: 19,
            paddingTop: 32,
            paddingBottom: 20,
            backgroundColor: colors.white,
            alignItems: 'center',
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
          <View
            style={{
              width: 317,
              height: 270,
            }}>
            <SRowContainer>
              <TouchableOpacity
                onPress={onBackdropPress}
                style={{marginLeft: 24}}>
                <Ionicons name="close" size={30} color={colors.textMiddle} />
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: 36,
                  width: 166,
                  height: 48,
                  paddingHorizontal: 2,
                  paddingTop: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <NText.SB15 text={`${question}`} color={colors.textTop} />
              </View>
            </SRowContainer>
            <Margin._25 />
            <Divider borderColor={colors.lineGray} />
            <Margin._24 />
            <View
              style={{
                width: 216,
                height: 110,
                marginLeft: 50,
                marginRight: 50,
                paddingTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <NText.SB13 text={`${help}`} color={colors.textButtonGray} />
            </View>
          </View>
        </View>
      </>
    </BaseModal>
  );
}
