import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useRootContext} from '../../RootProvider';

export default function Onboarding_Description() {
  const rootContext = useRootContext();
  const onPressStart = () => {
    // rootContext.setUser({token: 'data', username: 'sooyeon'});
  };
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Text>온보딩 설명 화면</Text>
      <Button title="홈으로 가는 버튼" onPress={onPressStart} />
    </SafeAreaView>
  );
}
