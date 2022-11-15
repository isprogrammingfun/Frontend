/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Image, ImageBackground, View} from 'react-native';
import styled from 'styled-components/native';
import {colors, Margin, NText, SRowContainer} from '../../components';
import EmotionModal from './EmotionModal';

interface Props {
  text: string;
  setText: (v: string) => void;
  step: number;
  textNum: number; // 글자수
  keywordArr: string[];
}

const KeywordBlock = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 6px;
  height: 50px;
`;

export default function DiaryStep3({step, keywordArr}: Props) {
  const [isVisibleEmotionModal, setIsVisibleEmotionModal] =
    useState<boolean>(false);
  const [emotionBlock, setEmotionBlock] = useState([]);
  const [emotionBlockNum, setEmotionBlockNum] = useState<number>(0);
  return (
    <>
      <SRowContainer justifyContent="center" alignItems="center">
        <NText.SB12 text={'홍길동'} color={colors.primary} />
        <NText.SM12
          text={'님! 오늘 하루 어떤 감정들을 느꼈는지 돌아볼'}
          color={colors.textUnavailableGray}
        />
      </SRowContainer>
      <Margin._3 />
      <NText.SM12
        text={'차례에요. 일기 키워드와 관련된 감정들을 선택해 주세요!'}
        color={colors.textUnavailableGray}
        style={{textAlign: 'center'}}
      />

      <Margin._40 />
      <View
        style={{
          backgroundColor: colors.primaryLight,
          width: 69,
          height: 23,
          borderRadius: 7,
          padding: 5,
          alignItems: 'center',
          alignSelf: 'flex-end',
          marginRight: 35,
        }}>
        <NText.B10 text="감정어 획득!" color={colors.primary} />
        <Image
          source={require('../../assets/image/pros_4.png')}
          style={{
            width: 45,
            height: 25,
          }}
        />
      </View>
      <Margin._15 />
      <SRowContainer alignItems="center">
        <Image
          source={require('../../assets/image/line.png')}
          style={{width: 320, height: 1.5, marginLeft: 30}}
        />
        <Image
          source={require('../../assets/image/circle.png')}
          style={{width: 12, height: 12, marginRight: 29}}
        />
      </SRowContainer>
      <SRowContainer marginLeft={54} alignSelf="flex-end" marginRight="75">
        <NText.B10 text={`${step}`} color={colors.primary} />
        <NText.B10 text={'/3'} color={colors.lightgray} />
      </SRowContainer>
      <Margin._23 />
      <NText.SM12
        text="키워드 블록을 클릭하면, 20가지 감정어가 나와요!"
        color={colors.textUnavailableGray}
        style={{textAlign: 'center'}}
      />

      <FlatList
        data={keywordArr.slice(0, 5)}
        renderItem={({item, index}: {item: string; index: number}) => {
          return (
            <KeywordBlock
              backgroundColor={
                emotionBlock.length > 0 ? colors.primary : colors.primaryLight
              }
              onPress={() => setIsVisibleEmotionModal(true)}>
              <SRowContainer>
                {emotionBlock.length > 0 ? (
                  <>
                    <NText.SB15
                      text={item}
                      color={colors.white}
                      style={{
                        alignSelf: 'flex-start',
                        marginRight: 100,
                        paddingVertical: 15,
                        paddingHorizontal: 19,
                      }}
                    />
                  </>
                ) : (
                  <>
                    <NText.SM15
                      text={item}
                      color={colors.textUnavailableGray}
                      style={{
                        alignSelf: 'flex-start',
                        marginRight: 90,
                        paddingVertical: 15,
                        paddingHorizontal: 19,
                      }}
                    />
                  </>
                )}
                {emotionBlock.length > 0 && (
                  <>
                    <ImageBackground
                      source={require('../../assets/image/emotion_color_bg.png')}
                      style={{
                        width: 52,
                        height: 52,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <NText.SM13
                        text={emotionBlock[0]}
                        color={colors.textUnavailableGray}
                      />
                    </ImageBackground>
                    <Margin.CustomWidth margin={6} />
                    <ImageBackground
                      source={require('../../assets/image/emotion_color_bg.png')}
                      style={{
                        width: 52,
                        height: 52,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <NText.SM13
                        text={emotionBlock[1]}
                        color={colors.textUnavailableGray}
                      />
                    </ImageBackground>
                    <Margin.CustomWidth margin={6} />
                    <ImageBackground
                      source={require('../../assets/image/emotion_color_bg.png')}
                      style={{
                        width: 52,
                        height: 52,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <NText.SM13
                        text={emotionBlock[2]}
                        color={colors.textUnavailableGray}
                      />
                    </ImageBackground>
                  </>
                )}
              </SRowContainer>
            </KeywordBlock>
          );
        }}
        ListHeaderComponent={() => <Margin._14 />}
        ItemSeparatorComponent={() => <Margin._14 />}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />

      {/* 감정 모달 */}
      <EmotionModal
        isVisibleEmotionModal={isVisibleEmotionModal}
        setIsVisibleEmotionModal={setIsVisibleEmotionModal}
        onBackdropPress={() => {
          setEmotionBlock([]);
        }}
        keywordArr={keywordArr}
        emotionBlock={emotionBlock}
        setEmotionBlock={setEmotionBlock}
        emotionBlockNum={emotionBlockNum}
        setEmotionBlockNum={setEmotionBlockNum}
      />
    </>
  );
}
