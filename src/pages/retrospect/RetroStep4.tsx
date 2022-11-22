/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {colors, Margin, NText, SRowContainer, Divider} from '../../components';
import {useRootContext} from '../../RootProvider';
import HelpModal from './HelpModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface Props {
  text: string;
  setText: (v: string) => void;
  textNum: number; // 글자수
}
// interface Props {
//   keywordArr: {
//     id: number;
//     name: string;
//     selected: boolean;
//   }[];
//   emotionArr: {
//     name: string;
//   }[];
// }
const Data = [
  {
    id: '1',
    keyword: '회의 준비',
    emotion: [{feel: '행복'}, {feel: '의욕'}, {feel: '뿌듯'}],
  },
  {
    id: '2',
    keyword: '카페',
    emotion: [{feel: '즐거움'}, {feel: '피곤'}, {feel: '뿌듯'}],
  },
  {
    id: '3',
    keyword: '살빠짐',
    emotion: [{feel: '복잡'}, {feel: '쏘쏘'}, {feel: '놀람'}],
  },
  {
    id: '4',
    keyword: '쪽잠',
    emotion: [{feel: '슬픔'}, {feel: '복잡'}, {feel: '짜증'}],
  },
];
export default function RetroStep4({
  text,
  setText,
  textNum,
// keywordArr,
// emotionArr,
}: Props) {
  const rootContext = useRootContext();
  const [select, setSelect] = useState<boolean>(false);
  const [question, setQuestion] = useState(
    '이번주에 가장 많이 느꼈던 감정은 무엇인가요?',
  );
  const [help, setHelp] = useState(
    '감정을 한가지만 고르기 힘들다면 여러가지를 골라주세요. 그 중 어떤 감정들이 가장 자주 있었는지, 강력했는지, 혹은 인상적이었는지도 알려주세요.',
  );
  const [isHelpModalVisible, setIsHelpModalVisible] = useState<boolean>(false);
  // func
  const onPressHelpModal = () => {
    setIsHelpModalVisible(true);
  };
  const ShowEmotion = () => {
    return (
      <View
        style={{
          marginTop: 14,
          height: 30,
          backgroundColor: colors.lineGray,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Divider borderColor={colors.lineGray} style={{width: 330}} />
        <Margin._12 />
        <NText.SB12 text="나는 이때 어떤 감정을 느꼈을까?" />
      </View>
    );
  };
  return (
    <View>
      <SRowContainer justifyContent="space-between" marginHorizontal={31}>
        <FlatList
          marginTop={19}
          data={Data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={ShowEmotion}
                style={{
                  borderRadius: 4,
                  backgroundColor:
                    select === true ? colors.primary : colors.sectionGray,
                  paddingHorizontal: 13,
                  paddingVertical: 5,
                }}>
                <NText.SM13
                  text={item.keyword}
                  color={select === true ? colors.white : colors.textTop}
                />
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => <Margin.CustomWidth margin={8} />}
          horizontal={true}
        />
      </SRowContainer>
      <Margin._14 />
      <Divider borderColor={colors.lineGray} style={{width: 330}} />
      <Margin._28 />
      <ScrollView style={{height: '100%'}}>
        <SRowContainer>
          <View style={{width: 263, height: 106}}>
            <NText.SB12 text={rootContext.user.username} color="#000000" />
            <NText.SB23 text={' 님,'} color="#000000" />
            <NText.SB23
              text={`${question}`}
              color="#000000"
              style={{textAlign: 'left'}}
            />
          </View>
          <TouchableOpacity onPress={onPressHelpModal} style={{marginTop: 12}}>
            <Ionicons
              name="help-circle-outline"
              size={33}
              color={colors.primary}
            />
          </TouchableOpacity>
          <Margin._3 />
        </SRowContainer>
        <Margin._18 />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              marginTop: 13,
              backgroundColor: colors.primaryLight,
              height: 412,
            }}>
            <NText.SM12
              text={`(${textNum}자 / 300자)`}
              color={colors.textUnavailableGray}
              style={{position: 'absolute', top: 10, right: 10}}
            />
            <TextInput
              value={text}
              onChangeText={v => setText(v)}
              maxLength={300}
              multiline={true}
              returnKeyLabel={'완료'}
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
              style={{
                flexShrink: 1,
                paddingHorizontal: 21,
                paddingTop: 40,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
        <HelpModal
          isVisible={isHelpModalVisible}
          onBackdropPress={() => setIsHelpModalVisible(false)}
          question={question}
          help={help}
        />
      </ScrollView>
    </View>
  );
}
