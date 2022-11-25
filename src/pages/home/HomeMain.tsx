/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {useRootContext} from '../../RootProvider';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native';
import {colors, Margin, NText} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotRecordModal from './NotRecordModal';
import YearNMonthModal from './YearNMonthModal';
import {getCalendarColumns, SAT_IDX, SUN_IDX} from '../../components/calendar';
import dayjs from 'dayjs';
import DiaryEditModal from './DiaryEditModal';

type DataType = {
  existDiaryDate: number;
};

export default function HomeMain({route, navigation}: any) {
  // state
  const rootContext = useRootContext();
  const [data, setData] = useState<DataType[]>([]);
  const [prevRetroDate, setPrevRetroDate] = useState<number>(0);
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
  const [isVisibleDiaryEditModal, setIsVisibleDiaryEditModal] =
    useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState(false);

  // vals
  const DayArr = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

  // func
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
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

  // useEffect
  useEffect(() => {
    rootContext.api
      .get('http://15.165.88.145:8080/diary', {
        params: {
          currentDate: now.toDate(),
          selectDate: now.toDate(),
        },
      })
      .then(res => {
        setData(res.data.result.existDiaryDate);
        setPrevRetroDate(res.data.result.prevRetroDate);
      })
      .catch(err => console.log(err));
  }, [refreshing, setRefreshing]);

  console.log(data); // for test
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 25,
          paddingTop: 25,
        }}>
        <NText.SB23
          text={`${rootContext.user.username}님의 나날`}
          color={'#2C2C2C'}
        />
        <Margin.CustomWidth margin={70} />
        <Image
          source={require('../../assets/image/retro_complete.png')}
          style={{width: 27, height: 9}}
          resizeMode="contain"
        />
        <Margin.CustomWidth margin={10} />
        <NText.SB15 text={`X ${data.length}`} color="#5E5E5E" />
        <Margin.CustomWidth margin={20} />
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
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
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
          <TouchableOpacity onPress={() => setIsVisibleDiaryEditModal(true)}>
            <NText.B10 text="오늘은 회고의 날" color={colors.primary} />
          </TouchableOpacity>
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
                (date === prevRetroDate ||
                  date === prevRetroDate + 1 ||
                  date === prevRetroDate + 2 ||
                  date === prevRetroDate + 3 ||
                  date === prevRetroDate + 4 ||
                  date === prevRetroDate + 5 ||
                  date === prevRetroDate + 6);
              const rocordDate = data.includes(date);
              const thisWeekNnotRecord = thisWeek && !data.includes(date);

              return (
                <TouchableOpacity
                  onPress={() => {
                    console.log(date);
                    setDay(date);
                    if (!thisWeekNnotRecord) {
                      setIsVisibleDiaryEditModal(true);
                    }
                  }}
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
                    backgroundColor:
                      thisWeek && !thisWeekNnotRecord
                        ? 'rgba(255, 245, 229, 0.7)'
                        : thisWeek && thisWeekNnotRecord
                        ? 'rgba(255, 165, 22, 0.36)'
                        : colors.white,
                  }}>
                  <NText.B12
                    text={day.get('date')}
                    color={
                      thisWeek ? colors.textMiddle : colors.textUnavailableGray
                    }
                  />

                  {rocordDate && !thisWeekNnotRecord && (
                    <Image
                      source={require('../../assets/image/circle.png')}
                      style={{
                        width: 8,
                        height: 8,
                        alignSelf: 'center',
                        marginTop: 20,
                        marginRight: 8,
                        tintColor: !thisWeek && colors.primaryMiddle,
                      }}
                      resizeMode="contain"
                    />
                  )}

                  {/* 주의 첫날에만 */}
                  {!thisWeekNnotRecord && (
                    <Image
                      source={
                        day.get('d') === SUN_IDX
                          ? require('../../assets/image/sunday.png')
                          : day.get('d') === SAT_IDX
                          ? require('../../assets/image/saturday.png')
                          : require('../../assets/image/weekday.png')
                      }
                      style={{
                        width: 46,
                        height: 92,
                        position: 'absolute',
                        top: 0,
                        tintColor: thisWeek && colors.primary,
                      }}
                      resizeMode="contain"
                    />
                  )}

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
      {/* 일기 수정 모달 TODO record가 있을 때(기록) 가져오기 */}
      <DiaryEditModal
        year={year}
        month={month}
        day={day}
        isVisibleDiaryEditModal={isVisibleDiaryEditModal}
        onBackdropPress={() => setIsVisibleDiaryEditModal(false)}
        emotionBlock={['행복', '의욕', '뿌듯']}
      />
    </SafeAreaView>
  );
}
