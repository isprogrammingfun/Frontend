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
export default function RetroStep4({text, setText, textNum}: Props) {
  const rootContext = useRootContext();
  const [select, setSelect] = useState<boolean>(false);
  const [question, setQuestion] = useState(
    `다음주는 어떤 감정으로\n살고 싶어요?`,
  );
  const [help, setHelp] = useState(
    `그 감정을 가지려면 어떤 행동과 생각을 \n해야할지도 생각해보아요.`,
  );
  const [isHelpModalVisible, setIsHelpModalVisible] = useState<boolean>(false);
  const [showEmotionComponent, setShowEmotionComponent] =
    useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<string>('');
  // func
  const onPressHelpModal = () => {
    setIsHelpModalVisible(true);
  };
  const ShowEmotion = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Margin._12 />
        <NText.SB12
          text="나는 이때 어떤 감정을 느꼈을까?"
          color={colors.UnavailableGray}
        />
        <NText.SB12
          text="그 당시를 떠올리며 더 생생한 회고록을 작성해봐요!"
          color={colors.UnavailableGray}
        />
      </View>
    );
  };
  const renderItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (showEmotionComponent) {
            setShowEmotionComponent(false);
          } else {
            setSelectItem(item);
            setShowEmotionComponent(true);
          }
        }}
        style={{
          borderRadius: 4,
          backgroundColor:
            selectItem === item ? colors.primary : colors.sectionGray,
          paddingHorizontal: 13,
          paddingVertical: 5,
        }}>
        <NText.SM13
          text={item}
          color={selectItem === item ? colors.white : colors.textTop}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <SRowContainer justifyContent="space-between" marginHorizontal={31}>
        <FlatList
          data={Data.map(i => i.keyword)}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Margin.CustomWidth margin={8} />}
          horizontal={true}
          style={{marginTop: 19}}
        />
      </SRowContainer>
      <Margin._14 />
      <Divider borderColor={colors.lineGray} style={{width: 330}} />
      {showEmotionComponent && <ShowEmotion />}
      <Margin._28 />
      <ScrollView style={{height: '100%'}}>
        <SRowContainer>
          <NText.SB23 text={rootContext.user.username} color="#000000" />
          <NText.SB23 text={'님,'} color="#000000" />
          <TouchableOpacity
            onPress={onPressHelpModal}
            style={{
              width: '70%',
              alignItems: 'flex-end',
            }}>
            <Image
              source={require('../../assets/image/help.png')}
              style={{
                width: 33,
                height: 33,
              }}
            />
          </TouchableOpacity>
        </SRowContainer>
        <Margin._3 />
        <NText.SB23
          text={`${question}`}
          color="#000000"
          style={{textAlign: 'left'}}
        />
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

        {/* 도움말 모달 */}
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
