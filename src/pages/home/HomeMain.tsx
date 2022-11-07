import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  BaseModal,
  colors,
  Margin,
  NText,
  SRowContainer,
} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const Divider = styled.View`
  width: 100%;
  padding-right: 19px;
  padding-left: 19px;
  border-width: 1px;
  border-color: ${props => props.borderColor};
  align-self: center;
`;
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
  const monthArray = [
    {monthNumber: 1, monthName: '1월'},
    {monthNumber: 2, monthName: '2월'},
    {monthNumber: 3, monthName: '3월'},
    {monthNumber: 4, monthName: '4월'},
    {monthNumber: 5, monthName: '5월'},
    {monthNumber: 6, monthName: '6월'},
    {monthNumber: 7, monthName: '7월'},
    {monthNumber: 8, monthName: '8월'},
    {monthNumber: 9, monthName: '9월'},
    {monthNumber: 10, monthName: '10월'},
    {monthNumber: 11, monthName: '11월'},
    {monthNumber: 12, monthName: '12월'},
  ];

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());
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

  const onPressPrevYear = () => {
    setMonth(0);
    setYear(year - 1);
  };
  const onPressNextYear = () => {
    setMonth(0);
    setYear(year + 1);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 25,
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
        onPress={() => setModalVisible(true)}
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
              return (
                !firstIndex && (
                  <TouchableOpacity
                    onPress={() => console.log(i)}
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
                    }}>
                    <NText.SB15 text={i.toString()} color={'#B5B5B5'} />
                    {fixIndex && (
                      <Image
                        source={require('../../assets/image/calendar_bg.png')}
                        style={{width: 310, height: 48}}
                      />
                    )}
                  </TouchableOpacity>
                )
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* 모달 */}
      <BaseModal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        {/* 달 */}
        <View
          style={{
            borderRadius: 11,
            backgroundColor: colors.white,
            padding: 22,
          }}>
          <NText.SM11 text="Year" color={colors.textUnavailableGray} />
          <SRowContainer justifyContent="space-between" alignItems="center">
            <TouchableOpacity
              style={{
                height: 50,
                width: '33%',
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={onPressPrevYear}>
              <Icon
                name="caret-back-outline"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>
            <NText.SM18 text={year} color={colors.black} />
            <TouchableOpacity
              style={{
                height: 50,
                width: '33%',
                justifyContent: 'center',
                alignItems: 'flex-end',
                paddingRight: 20,
              }}
              onPress={onPressNextYear}>
              <Icon
                name="caret-forward-outline"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>
          </SRowContainer>
          <Margin._13 />
          <Divider borderColor={colors.lineGray} />
          <Margin._13 />
          <NText.SM11 text="Month" color={colors.textUnavailableGray} />
          {/* 월 */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 1,
            }}>
            {monthArray.map((element, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    width: '25%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity
                    onPress={() => setMonth(element.monthNumber)}>
                    {/** TODO 글씨체 수정 */}
                    <NText.SM14
                      text={element.monthName}
                      color={
                        element.monthNumber === month
                          ? colors.white
                          : colors.black
                      }
                      style={{
                        backgroundColor:
                          element.monthNumber === month
                            ? colors.primary
                            : colors.lineGray,
                        padding: 7,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </BaseModal>
    </SafeAreaView>
  );
}
