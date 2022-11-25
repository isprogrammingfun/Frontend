/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Platform,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  colors,
  Header,
  NText,
  Margin,
  SRowContainer,
  Divider,
} from '../../components';
import YearNMonthModal from '../home/YearNMonthModal';
import GoRecordModal from './GoRecordModal';
import {getCalendarColumns} from '../../components/calendar';
import {useRootContext} from '../../RootProvider';

export default function RetroMain() {
  const navigation = useNavigation();

  // state
  const {now, setNow, year, setYear, month, setMonth} = getCalendarColumns();
  const [isYearNMonthModalVisible, setIsYearNMonthModalVisible] =
    useState<boolean>(false);

  const [IsGoRecordModalVisible, setIsGoRecordModalVisible] =
    useState<boolean>(false);

  const retrospectData = [
    {id: '1', goal: '자아탐색'},
    {id: '2', goal: '관계고민'},
    {id: '3', goal: '성취확인'},
    {id: '4', goal: '자아탐색'},
    {id: '5', goal: '성취확인'},
  ];

  const category = [
    {id: '1', cate: '그때 그대로 의미 있었던 행복한 기억'},
    {id: '2', cate: '나를 힘들게 했지만 도움이 된 기억'},
    {id: '3', cate: '돌아보니 다른 의미로 다가온 기억'},
  ];

  const retroWeekDay = [
    {id: '1', cate: '노천막걸리'},
    {id: '2', cate: 'Nanal'},
  ];

  const [day, setDay] = useState(0);
  const [week, setWeek] = useState(1);

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
  const onPressGoRecordModal = () => {
    setIsGoRecordModalVisible(true);
  };

  const CheckRetroDate = () => {
    if (day === 0) {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <NText.SB12 text="오늘은" color={colors.textMiddle} />
            <Margin.CustomWidth margin={3} />
            <NText.SB12 text={'정기 회고일'} color={colors.primary} />
            <Margin.CustomWidth margin={3} />
            <NText.SB12 text="입니다." color={colors.textMiddle} />
          </View>
          <NText.SB12
            text="나를 돌아보러 가볼까요?"
            color={colors.textMiddle}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <NText.SB12 text="다음 회고일 까지" color={colors.textMiddle} />
          <Margin.CustomWidth margin={3} />
          <NText.SB12 text={`D-${day}`} color={colors.primary} />
        </View>
      );
    }
  };

  const AddRetroButton = () => {
    if (day === 0) {
      return (
        <TouchableOpacity
          onPress={onPressGoRecordModal}
          style={{
            marginTop: 39,
            marginLeft: 32,
            height: 74,
            width: 56,
            backgroundColor: colors.primary,
            borderRadius: 4,
            // ...Platform.select({
            //   ios: {
            //     shadowColor: '#000000',
            //     shadowOffset: {
            //       width: 0,
            //       height: 0,
            //     },
            //     shadowOpacity: 0.15,
            //     shadowRadius: 0.4,
            //   },
            //   android: {
            //     elevation: 0.5,
            //   },
            // }),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="add-outline" color={colors.white} size={30} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          // onPress={onPressNotRecordModal}
          style={{
            marginTop: 39,
            marginLeft: 32,
            height: 74,
            width: 56,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 4,
            ...Platform.select({
              ios: {
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.15,
                shadowRadius: 0.4,
              },
              android: {
                elevation: 0.5,
              },
            }),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="add-outline" color={colors.buttonGray} size={30} />
        </TouchableOpacity>
      );
    }
  };

  const renderItem1 = ({item}) => {
    return (
      <View>
        <View style={{paddingLeft: 16, paddingRight: 32, height: 16}}>
          <NText.SB10 text={`${item.id}차 회고`} color={colors.buttonGray} />
        </View>
        <Margin._4 />
        <TouchableOpacity
          // onPress={onPressNotRecordModal}
          style={{
            // position: 'absolute',
            // top: 20,
            height: 74,
            width: 68,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 4,
            // ...Platform.select({
            //   ios: {
            //     shadowColor: '#000000',
            //     shadowOffset: {
            //       width: 0,
            //       height: 0,
            //     },
            //     shadowOpacity: 0.15,
            //     shadowRadius: 0.4,
            //   },
            //   android: {
            //     elevation: 0.5,
            //   },
            // }),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              item.goal === '자아탐색'
                ? require('../../assets/image/retro1.png')
                : item.goal === '관계고민'
                ? require('../../assets/image/retro2.png')
                : item.goal === '성취확인'
                ? require('../../assets/image/retro3.png')
                : require('../../assets/image/retro4.png')
            }
            style={{width: 18, height: 18}}
            resizeMode="contain"
          />
          <Margin._12 />
          <NText.SB12 text={item.goal} color={colors.textMiddle} />
        </TouchableOpacity>
      </View>
    );
  };

  const retroData = ({item, index}: {item: string; index: number}) => {
    return (
      <SRowContainer>
        <View
          style={{
            backgroundColor: colors.sectionGray,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          <NText.SB12 text={item} color={colors.textTop} />
        </View>
      </SRowContainer>
    );
  };
  const renderItem2 = ({item}) => {
    const happyDay = item === '그때 그대로 의미 있었던 행복한 기억';
    return (
      <View
        style={{
          flexDirection: 'column',
          marginLeft: 30,
          marginRight: 30,
          height: 277,
          width: 316,
          borderColor: colors.lineGray,
          borderWidth: 1,
          borderRadius: 5,
          borderStyle: 'solid',
        }}>
        <Margin._19 />
        <NText.SM15
          text={item.cate}
          color={colors.textTop}
          style={{alignSelf: 'center'}}
        />
        <Margin._13 />
        <Divider borderColor={colors.lineGray} style={{width: 298}} />
        <Margin._15 />
        {/* <FlatList
          data={retroWeekDay.map(i => i.cate)}
          renderItem={retroData}
          horizontal={true}
          ItemSeparatorComponent={() => <Margin.CustomWidth margin={5} />}
        /> */}
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <Header
        backgroundColor={colors.white}
        hasGoBack={false}
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
        <CheckRetroDate />
      </View>
      <Margin._15 />
      <Image
        source={require('../../assets/image/banner.png')}
        style={{width: '100%', height: 98}}
        resizeMode="stretch"
      />
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
        <SRowContainer justifyContent="space-between">
          <AddRetroButton />
          <Margin.CustomWidth margin={28} />
          <FlatList
            marginTop={19}
            data={retrospectData}
            renderItem={renderItem1}
            ItemSeparatorComponent={() => <Margin.CustomWidth margin={13} />}
            horizontal={true}
          />
        </SRowContainer>
        <FlatList
          marginTop={29}
          data={category}
          renderItem={renderItem2}
          ItemSeparatorComponent={() => <Margin.CustomWidth margin={13} />}
          horizontal={true}
        />
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
      {/* 회고 기록 모달 */}
      <GoRecordModal
        isVisible={IsGoRecordModalVisible}
        onBackdropPress={() => setIsGoRecordModalVisible(false)}
        year={year}
        month={month}
        week={week}
      />
    </SafeAreaView>
  );
}
