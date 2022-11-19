import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Platform,
  FlatList,
} from 'react-native';
import {colors, Header, NText, Margin} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import YearNMonthModal from '../home/YearNMonthModal';
import {getCalendarColumns} from '../../components/calendar';

export default function RetroMain() {
  // state
  const {now, setNow, year, setYear, month, setMonth} = getCalendarColumns();
  const [isYearNMonthModalVisible, setIsYearNMonthModalVisible] =
    useState<boolean>(false);
  const retrospectData = [
    {id: '1', goal: '자아탐색'},
    {id: '2', goal: '관계고민'},
    {id: '3', goal: '성취확인'},
  ];

  // func
  const onBackdropPress = () => {
    setIsYearNMonthModalVisible(false);
  };
  const onPressPrevYear = () => {
    setYear(year - 1);
    setNow(now.subtract(1, 'year'));
  };
  const onPressNextYear = () => {
    setYear(year + 1);
    setNow(now.add(1, 'year'));
  };
  const onPressYearNMonthModal = () => {
    setIsYearNMonthModalVisible(true);
  };
  const Item = ({goal}) => <NText.SB12 text={goal} />;
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <Header
        backgroundColor={colors.white}
        headerRetroCmpnt={
          <>
            <NText.SB18 text="회고" color={colors.textTop} />
          </>
        }
      />
      <Margin._25 />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={onPressYearNMonthModal}
          style={{
            borderRadius: 7,
            width: 147,
            height: 37,
            borderColor: colors.lineGray,
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 9,
            marginLeft: 30,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <NText.SB15 text={`${year}년 ${month}월`} color={'#5E5E5E'} />
          <Margin.CustomWidth margin={17} />
          <Ionicons
            name="chevron-down-outline"
            size={22}
            color={colors.textUnavailableGray}
          />
        </TouchableOpacity>
        <Margin.CustomWidth margin={26} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <NText.SB12 text="다음 회고일 까지" />
          <NText.SB12 text=" D-3" color={colors.primary} />
        </View>
      </View>
      <Margin._15 />
      <View>
        <Image
          source={require('../../assets/image/banner.png')}
          resizeMode="cover"></Image>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 9,
            bottom: 0,
            left: 0,
            right: 0,
            height: 68,
            backgroundColor: colors.primaryLight,
            zIndex: 0,
          }}
        />
        <TouchableOpacity
          // onPress={onPressNotRecordModal}
          style={{
            position: 'absolute',
            top: 39,
            left: 32,
            height: 74,
            width: 56,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="add-outline" color={colors.primary} size={30} />
        </TouchableOpacity>
        <SafeAreaView style={{position: 'absolute', top: 39, left: 116}}>
          <FlatList
            data={retrospectData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </SafeAreaView>
        {/* <View
          style={{
            top: 19,
            left: 132,
          }}>
          <NText.SB10 text="1차 회고" />
        </View>
        <TouchableOpacity
          // onPress={onPressNotRecordModal}
          style={{
            position: 'absolute',
            top: 39,
            left: 116,
            height: 74,
            width: 68,
            backgroundColor: colors.white,
            opacity: 0.5,
            borderRadius: 4,
            ...Platform.select({
              ios: {
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.15,
                shadowRadius: 0.4,
              },
              android: {
                elevation: 2,
              },
            }),
            justifyContent: 'center',
            alignItems: 'center',
            // opacity: 0.5,
          }}>
          <Ionicons name="add-outline" color={colors.primary} size={30} />
        </TouchableOpacity> */}
      </View>
      {/* 달 & 월 모달 */}
      <YearNMonthModal
        isVisible={isYearNMonthModalVisible}
        onBackdropPress={onBackdropPress}
        onPressNextYear={onPressNextYear}
        onPressPrevYear={onPressPrevYear}
        year={year}
        month={month}
        setMonth={setMonth}
        setNow={setNow}
        now={now}
      />
    </SafeAreaView>
  );
}
