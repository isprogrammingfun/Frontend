/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {BaseModal, colors, Divider, Margin, NText} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
];

export default function RetroStep8() {
  // state
  const [isVisibleMemoryModal, setIsVisibleMemoryModal] =
    useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [selectedNum, setSelectedNum] = useState<number>(0);

  const [allItems, setAllItems] = useState([
    {
      id: 1,
      name: '그때 그대로 의미있었던 행복한 기억',
    },
    {
      id: 2,
      name: '나를 힘들게 했지만 도움이 된 기억',
    },
    {
      id: 3,
      name: '돌아보니, 다른 의미로 다가온 기억',
    },
    {
      id: 3,
      name: '놓아주어도 괜찮은 기억',
    },
  ]);
  const onPressItem = () => {
    setIsVisibleMemoryModal(true);
  };

  // 키워드
  const renderItem = ({item, index}: {item: string; index: number}) => {
    const allSelected = selectedNum === 3;
    return (
      <TouchableOpacity
        onPress={onPressItem}
        style={{
          borderRadius: 4,
          backgroundColor: allSelected ? colors.primaryLight : colors.white,
          paddingHorizontal: 13,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: colors.sectionGray,
        }}>
        <NText.SM13 text={item} color={colors.textTop} />
      </TouchableOpacity>
    );
  };

  const onPressSelect = item => {
    if (item === selectedItem) {
      setSelectedItem('');
    } else {
      setSelectedItem(item);
    }
  };

  // 모달
  const renderItem2 = ({item, index}: {item: string; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressSelect(item)}
        style={{
          backgroundColor: selectedItem.includes(item)
            ? colors.primary
            : colors.primaryLight,
          marginHorizontal: 30,
          paddingVertical: 15,
          paddingHorizontal: 19,
          borderRadius: 6,
          width: '100%',
          alignSelf: 'center',
        }}>
        {selectedItem.includes(item) ? (
          <>
            <NText.SB15 text={item} color={colors.white} />
          </>
        ) : (
          <>
            <NText.SM15 text={item} color={colors.textUnavailableGray} />
          </>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View>
        <NText.SB23
          text={`아래의 기록들이\n어떻게 기록되면 좋겠나요?`}
          color={colors.black}
        />
        <Margin._30 />
        <FlatList
          data={Data.map(i => i.keyword)}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Margin.CustomWidth margin={8} />}
          horizontal={true}
        />
      </View>

      {/* 기억 창고 모달 */}
      {isVisibleMemoryModal && (
        <>
          <BaseModal
            isVisible={isVisibleMemoryModal}
            onBackdropPress={() => {
              setIsVisibleMemoryModal(false);
              setSelectedItem('');
            }}
            style={{
              width: '100%',
              height: 350,
              justifyContent: 'flex-end',
              marginBottom: 0,
              alignSelf: 'center',
            }}>
            <View
              style={{
                paddingHorizontal: 19,
                paddingTop: 32,
                paddingBottom: 20,
                backgroundColor: colors.white,
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  alignSelf: 'stretch',
                }}>
                <Ionicons
                  name="close-outline"
                  size={30}
                  color={colors.navButton}
                />
                <NText.SB13
                  text="기억 창고"
                  color={colors.textButtonGray}
                  style={{marginLeft: 10}}
                />
                <TouchableOpacity
                  onPress={() => {
                    setIsVisibleMemoryModal(false);
                    setSelectedItem('');
                    setSelectedNum(selectedNum + 1);
                  }}>
                  <NText.SB15
                    text="선택 완료"
                    color={
                      selectedItem ? colors.primary : colors.textUnavailableGray
                    }
                  />
                </TouchableOpacity>
              </View>
              <Margin._20 />
              <Divider borderColor={colors.lineGray} />
              <Margin._10 />
              <NText.SM12
                text="기억창고가 열렸습니다"
                color={colors.textUnavailableGray}
              />
              <NText.SM12
                text="더 적합한 칸을 클릭해주세요"
                color={colors.textUnavailableGray}
              />
              <Margin._18 />
              <FlatList
                data={allItems.map(i => i.name)}
                renderItem={renderItem2}
                ItemSeparatorComponent={() => <Margin._13 />}
              />
              <Margin.BottomSpace />
            </View>
          </BaseModal>
        </>
      )}
    </>
  );
}
