/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Buttons, colors, Margin, NText, SRowContainer} from '../../components';
import {useRootContext} from '../../RootProvider';

export default function DiaryStep4() {
  const navigation = useNavigation();
  const [record, setRecord] = useState<boolean>(true);
  const rootContext = useRootContext();

  // func
  const onPressComplete = () => {
    // TODO api post 요청

    // homeMain으로 이동
    navigation.navigate('HomeMain', {record: record});
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/image/center_nanal_bg.png')}
        style={{width: '100%', height: 176, marginTop: 115}}
        resizeMode="contain"
      />
      <Margin._22 />

      {/* 텍스트 */}
      <SRowContainer>
        <NText.SB20 text={rootContext.user.username} color={colors.primary} />
        <NText.SB20 text="님" color={colors.textTop} />
      </SRowContainer>
      <Margin._3 />
      <NText.SB20 text="오늘의 일기가 저장되었어요" color={colors.textTop} />
      <Margin._80 />
      <TouchableOpacity onPress={onPressComplete}>
        <Buttons.PrimaryBtn text="홈으로" width={240} height={50} />
      </TouchableOpacity>
    </View>
  );
}
