/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

import {colors, Header, NText, Margin} from '../../components';
import YearNMonthModal from '../home/YearNMonthModal';
import {getCalendarColumns} from '../../components/calendar';

export default function RetroMain() {
  const navigation = useNavigation();
  // state
  const {now, setNow, year, setYear, month, setMonth} = getCalendarColumns();
  const [isYearNMonthModalVisible, setIsYearNMonthModalVisible] =
    useState<boolean>(false);
  const retrospectData = [
    {id: '1', goal: '자아탐색'},
    {id: '2', goal: '관계고민'},
    {id: '3', goal: '성취확인'},
    {id: '4', goal: '자아탐색'},
    {id: '5', goal: '성취확인'},
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
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={{paddingLeft: 16, paddingRight: 29}}>
          <NText.SB10 text={`${item.id}차 회고`} color={colors.buttonGray} />
          <TouchableOpacity
            // onPress={onPressNotRecordModal}
            style={{
              position: 'absolute',
              top: 20,
              height: 74,
              width: 68,
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
        <TouchableOpacity
          onPress={() => navigation.navigate('RetroAllStep')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <NText.SB12 text="다음 회고일 까지" color={colors.textMiddle} />
          <Margin.CustomWidth margin={3} />
          <NText.SB12 text="D-3" color={colors.primary} />
        </TouchableOpacity>
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
        <View
          style={{
            position: 'absolute',
            top: 19,
            left: 116,
            height: 94,
            width: 259,
          }}>
          <FlatList
            data={retrospectData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
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
