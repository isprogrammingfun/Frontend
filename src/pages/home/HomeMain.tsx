/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {colors, Margin, NText} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import NotRecordModal from './NotRecordModal';
import YearNMonthModal from './YearNMonthModal';

const timeTableHeight = 92;
const EyeWash = styled.TouchableOpacity`
  height: ${timeTableHeight};
  width: 13%;
  border-left-width: 1px;
  border-top-width: 1px;
  border-color: #efefef;
  padding-top: 9px;
  padding-left: 6px;
`;

export default function HomeMain({navigation}: any) {
  const week: number[] = [];
  const days: number[] = [];
  const DayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [isYearNMonthModalVisible, setIsYearNMonthModalVisible] =
    useState<boolean>(false);
  const [isNotRecordModalVisible, setIsNotRecordModalVisible] =
    useState<boolean>(false);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [day, setDay] = useState<number>(0);
  const monthLastDate = new Date(year, month, 0);
  const calendaronthLastDate = monthLastDate.getDate();
  const monthStartDate = new Date(year, month, 1);
  const calendarMonthStartDate = monthStartDate.getDate();
  const calendarWeekCount = Math.ceil(
    (calendarMonthStartDate + calendaronthLastDate) / 7,
  );

  for (let i = 0; i < calendarWeekCount; i++) {
    // 주 계산
    week.push(i);
  }

  for (let i = 1; i <= calendaronthLastDate + 1; i++) {
    if (calendarMonthStartDate < calendaronthLastDate) {
      days.push(i);
    }
  }

  // func
  const onBackdropPress = () => {
    setIsYearNMonthModalVisible(false);
  };
  const onPressPrevYear = () => {
    setMonth(0);
    setYear(year - 1);
  };
  const onPressNextYear = () => {
    setMonth(0);
    setYear(year + 1);
  };
  const onPressNotRecordModal = () => {
    setIsNotRecordModalVisible(true);
  };
  const onPressYearNMonthModal = () => {
    setIsYearNMonthModalVisible(true);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 25,
          paddingTop: 25,
        }}>
        <NText.SB23 text="홍길동님의 나날" color={'#2C2C2C'} />
        <Margin.CustomWidth margin={55} />
        <Image
          source={require('../../assets/image/retro_complete.png')}
          style={{width: 27, height: 9}}
        />
        <Margin.CustomWidth margin={10} />
        <NText.SB15 text="X 19" color="#5E5E5E" />
        <Margin.CustomWidth margin={30} />
        <TouchableOpacity onPress={() => navigation.navigate('Notice')}>
          <Ionicons
            name="notifications-outline"
            size={22}
            color={colors.textUnavailableGray}
          />
        </TouchableOpacity>
      </View>
      <Margin._15 />

      {/* 날짜 */}
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

      {/* 캘린더 */}
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          marginHorizontal: 5,
          paddingVertical: 55,
        }}>
        {/* 회고의 날 */}
        <View
          style={{
            padding: 8,
            backgroundColor: colors.primaryLight,
            width: 88,
            height: 30,
            borderRadius: 6,
            position: 'absolute',
            top: 0,
            right: 28,
          }}>
          <NText.B10 text="내일은 회고의 날" color={colors.primary} />
        </View>
        <Image
          source={require('../../assets/image/pros_4.png')}
          style={{
            width: 45,
            height: 25,
            position: 'absolute',
            top: 30,
            right: 28,
          }}
        />
        <View style={{flex: 1}}>
          {/* 요일 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderTopWidth: 0.5,
              borderLeftWidth: 0.5,
              marginHorizontal: 25,
              paddingVertical: 12,
              borderColor: '#EFEFEF',
              borderRightWidth: 0.5,
            }}>
            {DayArr.map((v, i) => (
              <NText.B10
                text={v}
                color={
                  i === DayArr.length - 1
                    ? colors.primary
                    : colors.textUnavailableGray
                }
              />
            ))}
          </View>
          {/* 날짜 */}
          <View
            style={{
              borderColor: '#EFEFEF',
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 25,
              width: '96%',
              flexWrap: 'wrap',
            }}>
            <EyeWash>
              <NText.B12 text="30" color={colors.textUnavailableGray} />
              <Image
                source={require('../../assets/image/calendar_bg.png')}
                style={{width: 310, height: 48}}
              />
            </EyeWash>
            <EyeWash>
              <NText.B12 text="31" color={colors.textUnavailableGray} />
            </EyeWash>
            {days.map((v, i) => {
              const firstIndex = i === 0;
              const fixIndex = i === 6 || i === 13 || i === 20 || i === 27;
              const notRecordIndex = i === 25;
              const prosWeek =
                i === 20 ||
                i === 21 ||
                i === 22 ||
                i === 23 ||
                i === 24 ||
                i === 26;
              return (
                !firstIndex && (
                  <TouchableOpacity
                    onPress={() => setDay(i)}
                    key={'daysColumn' + i}
                    style={{
                      height: timeTableHeight,
                      width: '13%',
                      borderTopWidth: 0.5,
                      borderRightWidth: 0.5,
                      borderBottomWidth: 0.5,
                      borderLeftWidth: 0.5,
                      borderColor: '#EFEFEF',
                      paddingTop: 9,
                      paddingLeft: 6,
                      backgroundColor:
                        (prosWeek && 'rgba(255, 245, 229, 0.7)') ||
                        (notRecordIndex && 'rgba(255, 165, 22, 0.7)'),
                    }}>
                    <NText.B12
                      text={i.toString()}
                      color={
                        prosWeek || notRecordIndex
                          ? colors.textMiddle
                          : colors.lightgray
                      }
                    />
                    {fixIndex && (
                      <Image
                        source={require('../../assets/image/calendar_bg.png')}
                        style={{width: 310, height: 48}}
                      />
                    )}
                    {/* 기록 안한 날 + 버튼 */}
                    {notRecordIndex && (
                      <TouchableOpacity
                        onPress={onPressNotRecordModal}
                        style={{
                          height: 39,
                          width: 37,
                          marginTop: 2,
                          backgroundColor: colors.white,
                          borderTopRightRadius: 6,
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Ionicons
                          name="add-outline"
                          color={colors.primary}
                          size={30}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                )
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* 달 & 월 모달 */}
      <YearNMonthModal
        isVisible={isYearNMonthModalVisible}
        onBackdropPress={onBackdropPress}
        onPressNextYear={onPressNextYear}
        onPressPrevYear={onPressPrevYear}
        year={year}
        month={month}
        setMonth={setMonth}
      />
      {/* 기록 안한 날 모달 */}
      <NotRecordModal
        isVisible={isNotRecordModalVisible}
        onBackdropPress={() => setIsNotRecordModalVisible(false)}
        year={year}
        month={month}
        day={day}
      />
    </SafeAreaView>
  );
}
