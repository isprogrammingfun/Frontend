import React from 'react';
import {Button, SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {SRowContainer} from '../../components/universal/Basic';

const LoginContainer = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 45px;
  margin: 10px 10px;
  background-color: ${props => props.backgroundColor};
  border-radius: 15px;
`;

export default function LoginPage() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <ScrollView>
        <SRowContainer>
          <Button title="카카오 로그인" />
          <Button title="구글 로그인" />
          <Button title="네이버 로그인" />
        </SRowContainer>
      </ScrollView>
    </SafeAreaView>
  );
}
