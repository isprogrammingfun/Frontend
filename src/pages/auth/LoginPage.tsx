import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';

export default function LoginPage() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <ScrollView>
        <Text>서비스명</Text>
        <TextInput />
      </ScrollView>
    </SafeAreaView>
  );
}
