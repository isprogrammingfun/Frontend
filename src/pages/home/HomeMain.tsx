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
import NotRecordModal from './NotRecordModal';
import YearNMonthModal from './YearNMonthModal';
import {getCalendarColumns} from '../../components/calendar';
import dayjs from 'dayjs';

export default function HomeMain({navigation}: any) {
  // state
  const {
    now,
    setNow,
    year,
    setYear,
    month,
    setMonth,
    day,
    setDay,
    filledColumns,
    thisWeekStartDay,
  } = getCalendarColumns();

  const [isYearNMonthModalVisible, setIsYearNMonthModalVisible] =
    useState<boolean>(false);
  const [isNotRecordModalVisible, setIsNotRecordModalVisible] =
    useState<boolean>(false);

  // vals
  const DayArr = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

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
                key={'dayColumn' + i}
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
            {filledColumns.map((day, index) => {
              const date = day.get('date');
              const thisMonth = dayjs().add(1, 'month').get('month');
              // 이번주
              const thisWeek =
                month === thisMonth &&
                (date === thisWeekStartDay ||
                  date === thisWeekStartDay + 1 ||
                  date === thisWeekStartDay + 2 ||
                  date === thisWeekStartDay + 3 ||
                  date === thisWeekStartDay + 4 ||
                  date === thisWeekStartDay + 5 ||
                  date === thisWeekStartDay + 6);
              // 이번주 && 일기 안쓴 날 TODO 일기 안쓴 날 가져오기
              const thisWeekNnotRecord = thisWeek && date === 18;

              return (
                <TouchableOpacity
                  onPress={() => console.log(date)}
                  key={'dateColumn' + index}
                  style={{
                    height: 92,
                    width: '13%',
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    borderBottomWidth: 0.5,
                    borderLeftWidth: 0.5,
                    borderColor: '#EFEFEF',
                    paddingTop: 9,
                    paddingLeft: 6,
                    backgroundColor: thisWeek
                      ? 'rgba(255, 245, 229, 0.7)'
                      : thisWeekNnotRecord
                      ? 'rgba(255, 165, 22, 0.36)'
                      : colors.white,
                  }}>
                  <NText.B12
                    text={day.get('date')}
                    color={thisWeek ? colors.textMiddle : colors.lightgray}
                  />

                  {/* 주의 첫날에만 */}
                  {/* {fixIndex && (
                      <Image
                        source={require('../../assets/image/calendar_bg.png')}
                        style={{width: 310, height: 48}}
                      />
                    )} */}

                  {/* 기록 안한 날 + 버튼 */}
                  {thisWeekNnotRecord && (
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
        setNow={setNow}
        now={now}
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
