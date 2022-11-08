import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, Header, Margin, NText, SRowContainer} from '../../components';

export default function DiaryMain({route, navigation}: any) {
  const {year, month, day} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar />
      <Header
        hasGoBack={true}
        onPressGoBack={() => navigation.goBack()}
        headerCenterCmpnt={
          <>
            <NText.SB18
              text="일기쓰기"
              color={colors.textTop}
              style={{marginTop: 3}}
            />
          </>
        }
        headerRightCmpnt={
          <>
            <TouchableOpacity style={{paddingRight: 24}}>
              <NText.SB16 text="다음" color={colors.textUnavailableGray} />
            </TouchableOpacity>
          </>
        }
      />
      <Margin._12 />
      <View
        style={{
          borderRadius: 7,
          borderWidth: 1,
          borderColor: colors.lineGray,
          paddingHorizontal: 25,
          paddingVertical: 7,
          alignItems: 'center',
          marginHorizontal: 115,
        }}>
        <NText.SM12
          text={`${year}년 ${month}월 ${day}일`}
          color={colors.textMiddle}
        />
      </View>
      <Margin._11 />
      <SRowContainer justifyContent="center" alignItems="center">
        <NText.B12 text={'홍길동'} color={colors.primary} />
        <NText.R12
          text={'님! 오늘은 어떤 하루 였는지, 무슨 일을 했고'}
          color={colors.textUnavailableGray}
        />
      </SRowContainer>
      <NText.R12
        text={'어떠한 감정을 느꼈는지 마음껏 써주세요.'}
        color={colors.textUnavailableGray}
        style={{textAlign: 'center'}}
      />
      <NText.R12
        text={'자세하게 쓸수록 당신의 감정 창고가 채워집니다.'}
        color={colors.textUnavailableGray}
        style={{textAlign: 'center'}}
      />
    </SafeAreaView>
  );
}
