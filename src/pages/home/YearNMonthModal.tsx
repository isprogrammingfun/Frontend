/* eslint-disable react-native/no-inline-styles */
import dayjs from 'dayjs';
import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  BaseModal,
  colors,
  Divider,
  Margin,
  NText,
  SRowContainer,
} from '../../components';

interface Props {
  isVisible: boolean;
  onBackdropPress: () => void;
  onPressPrevYear: () => void;
  onPressNextYear: () => void;
  year: number;
  month: number;
  setMonth: (v: number) => void;
  now: dayjs.Dayjs;
  setNow: (v: dayjs.Dayjs) => void;
}
export default function YearNMonthModal({
  isVisible,
  onBackdropPress,
  onPressPrevYear,
  onPressNextYear,
  year,
  month,
  setMonth,
  now,
  setNow,
}: Props) {
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

  return (
    <BaseModal isVisible={isVisible} onBackdropPress={onBackdropPress}>
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
            <Icon name="caret-back-outline" size={20} color={colors.primary} />
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
                  onPress={() => {
                    setMonth(element.monthNumber);
                    const monthDiff = month - element.monthNumber;
                    if (monthDiff > 0)
                      return setNow(now.subtract(monthDiff, 'month'));
                    else return setNow(now.add(Math.abs(monthDiff), 'month'));
                  }}>
                  <NText.SM15
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
  );
}
