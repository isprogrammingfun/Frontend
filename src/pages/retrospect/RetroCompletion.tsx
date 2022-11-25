import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {colors, Margin, NText, SRowContainer} from '../../components';
import {useRootContext} from '../../RootProvider';
import RetroMain from './RetroMain';
import {useNavigation} from '@react-navigation/native';

export default function RetroCompletion() {
  const rootContext = useRootContext();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <ImageBackground
        source={require('../../assets/image/retro_finish.png')}
        style={{
          width: 529,
          height: 250,
          marginTop: 150,
          position: 'absolute',
          top: 50,
          left: -110,
        }}
        resizeMode="contain"
      />
      <SRowContainer justifyContent="center" marginTop={450}>
        <NText.SB20 text={rootContext.user.username} color={colors.primary} />
        <NText.SB20 text={'님!'} color={colors.textTop} />
      </SRowContainer>

      <NText.SB20
        text={'회고가 완료되었어요'}
        color={colors.textTop}
        style={{textAlign: 'center'}}
      />
    </SafeAreaView>
  );
}
