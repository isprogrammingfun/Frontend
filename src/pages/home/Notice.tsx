import React from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import styled from 'styled-components/native';
import {Header, Margin, NText, SRowContainer} from '../../components';
import {colors} from '../../components';

const Divider = styled.View`
  width: 80%;
  border-width: 1px;
  margin-top: 8px;
  border-color: ${props => props.borderColor};
`;
export default function Notice({navigation}: any) {
  const notWatchedTextArr = [
    '홍길동님! 오늘 나날을 기록해보세요!',
    '나날 기록을 회고하며 나를 완성해보세요',
    '나날 기록을 회고하며 나를 완성해보세요. 나날 기록을\n회고하며 나를 완성해보세요',
  ];
  const watchedTextArr = [
    '나날 기록을 회고하며 나를 완성해보세요',
    '나날 기록을 회고하며 나를 완성해보세요',
    '나날 기록을 회고하며 나를 완성해보세요',
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView>
        <Header
          hasGoBack={true}
          onPressGoBack={() => navigation.goBack()}
          headerCenterCmpnt={
            <>
              <NText.SB18 text="알림" color={colors.black} />
            </>
          }
        />
        {/* 알림 텍스트 */}
        <View style={{paddingHorizontal: 29}}>
          <>
            {notWatchedTextArr.map((text, index) => {
              return (
                <View key={'notWatchedTextArr' + index}>
                  <Margin._17 />
                  <NText.SM14 text={text} color={colors.black} />
                  <Margin._6 />
                  <SRowContainer>
                    <Divider borderColor={colors.primary} />
                    <Margin.CustomWidth margin={9} />
                    <NText.SM11 text="05/15 23:57" color={colors.primary} />
                  </SRowContainer>
                </View>
              );
            })}
            {watchedTextArr.map((text, index) => {
              return (
                <View key={'watchedTextArr' + index}>
                  <Margin._17 />
                  <NText.SM14 text={text} color={colors.textUnavailableGray} />
                  <Margin._6 />
                  <SRowContainer>
                    <Divider borderColor={colors.lineGray} />
                    <Margin.CustomWidth margin={9} />
                    <NText.SM11 text="05/15 23:57" color={'#CFCFCF'} />
                  </SRowContainer>
                </View>
              );
            })}
          </>
        </View>
        <Margin._200 />
        <Image
          source={require('../../assets/image/nanal_icon.png')}
          resizeMode="contain"
          style={{width: 57, height: 57, alignSelf: 'center'}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
