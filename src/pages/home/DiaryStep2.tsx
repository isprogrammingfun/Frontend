/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, Margin, NText, SRowContainer} from '../../components';

interface Props {
  text: string;
  step: number;
  keyword: string;
  setKeyword: (v: string) => void;
  keywordArr: string[];
  setKeywordArr: (v: string[]) => void;
}

export default function DiaryStep2({
  text,
  step,
  keyword,
  setKeyword,
  keywordArr,
  setKeywordArr,
}: Props) {
  const userName = '홍길동'; // TODO 가져오기
  const [nextStep, setNextStep] = useState<boolean>(false);
  const [isKeyword, setIsKeyword] = useState<boolean>(false);
  {
    /* 생성된 키워드 */
  }

  const renderItem = ({item, index}: {item: string; index: number}) => {
    if (index > 4) {
      Alert.alert('키워드는 최대 5개까지 가능합니다.');
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,
          height: 33,
          borderRadius: 7,
          backgroundColor: colors.sectionGray,
        }}>
        <NText.SB13 text={item} color={colors.textMiddle} />
        <Margin.CustomWidth margin={26} />
        <TouchableOpacity
          onPress={() => {
            keywordArr.concat(keywordArr[index]);
          }}>
          <Ionicons name="close-outline" size={20} color={colors.buttonGray} />
        </TouchableOpacity>
      </View>
    );
  };

  const KeywordView = () => {
    return (
      <KeyboardAvoidingView>
        <FlatList
          data={keywordArr.slice(0, 5)}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Margin.CustomWidth margin={10} />}
          ListHeaderComponent={() => <Margin.CustomWidth margin={29} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </KeyboardAvoidingView>
    );
  };

  const onSubmitEditing = () => {
    setKeywordArr([...keywordArr, keyword]);
    setIsKeyword(true);
    setKeyword('');
  };

  {
    /* 키워드 생성 */
  }
  const MakeKeyword = () => {
    return (
      <SafeAreaView
        style={{
          borderRadius: 5,
          backgroundColor: colors.primaryLight,
          padding: 3,
          width: '30%',
          marginLeft: 29,
        }}>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Ionicons name="add-outline" size={25} color={colors.textTop} />
          <Margin.CustomWidth margin={10} />
          <TextInput
            value={keyword}
            placeholder={'키워드'}
            onChangeText={v => setKeyword(v)}
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={onSubmitEditing}
            maxLength={5}
            autoCorrect={false}
            style={{padding: 3}}
          />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <ScrollView style={{marginBottom: 90}}>
      <View style={{alignItems: 'center'}}>
        <NText.SM12
          text={'앞에서 쓴 내용 중에서 남기고 싶은 단어를 작성해 주시면'}
          color={colors.textUnavailableGray}
        />
        <Margin._3 />
        <NText.SM12
          text={'나날이 키워드화하여 저장해 드립니다.'}
          color={colors.textUnavailableGray}
          style={{textAlign: 'center'}}
        />
        <Margin._3 />
        <SRowContainer justifyContent="center">
          <NText.SM12
            text={'나날과 함께 '}
            color={colors.textUnavailableGray}
          />
          <NText.SB12 text={`${userName}`} color={colors.primary} />
          <NText.SM12
            text={'님의 하루를 정리해 보아요.'}
            color={colors.textUnavailableGray}
          />
        </SRowContainer>

        <Margin._18 />
        <View
          style={{
            backgroundColor: colors.primaryLight,
            width: 57,
            height: 23,
            borderRadius: 7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NText.B10
            text="핵심만 쏙!"
            color={colors.primary}
            style={{textAlign: 'center'}}
          />
        </View>
        <Image
          source={require('../../assets/image/pros_4.png')}
          style={{
            width: 45,
            height: 25,
            position: 'absolute',
            top: 96,
          }}
        />
        <Margin._15 />
        <SRowContainer alignItems="center" justifyContent="center">
          <Image
            source={require('../../assets/image/line.png')}
            style={{width: 320, height: 1.5}}
          />
          <Image
            source={require('../../assets/image/circle.png')}
            style={{width: 12, height: 12}}
          />
        </SRowContainer>
        <SRowContainer justifyContent="center" marginRight="40">
          <NText.B10 text={`${step}`} color={colors.primary} />
          <NText.B10 text={'/3'} color={colors.lightgray} />
        </SRowContainer>
        <Margin._13 />
        <View
          style={{
            marginHorizontal: 29,
            borderWidth: 1,
            borderRadius: 7,
            borderColor: colors.lineGray,
            width: 317,
            height: 287,
            paddingVertical: 19,
            paddingHorizontal: 21,
          }}>
          <NText.SM15
            text={text}
            color={colors.textUnavailableGray}
            style={{width: '95%'}}
          />
        </View>
        <Margin._33 />
        {/* 구분선 */}
      </View>
      <View
        style={{
          borderColor: colors.lineGray,
          borderWidth: 5,
        }}
      />
      <Margin._30 />
      <NText.SM12
        text="생성된 키워드"
        color={colors.textUnavailableGray}
        style={{marginLeft: 36}}
      />
      <Margin._13 />
      {nextStep ? (
        <>
          {isKeyword ? (
            <>
              <KeywordView />
              <Margin._30 />
              <MakeKeyword />
              <Margin.BottomSpace />
            </>
          ) : (
            <>
              <MakeKeyword />
              <Margin.BottomSpace />
            </>
          )}
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              setNextStep(true);
              setKeyword('');
            }}
            style={{
              width: 316,
              height: 50,
              borderRadius: 5,
              backgroundColor: colors.primaryLight,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="add-outline" size={35} color={colors.primary} />
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}
