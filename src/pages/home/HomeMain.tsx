import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
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
  padding-right: 19;
  padding-left: 19;
  border-width: 1;
  border-color: ${props => props.borderColor};
  align-self: center;
`;
const timeTableHeight = 92;

export default function HomeMain({navigation}: any) {
  const week = [1, 2, 3, 4, 5];

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
  const [selected, setSelected] = useState(monthArray);
  const [data, setData] = useState(monthArray);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const Block = ({v, i}: {v: string; i: number | null}) => (
    <TouchableOpacity
      onLongPress={() => {}}
      onPress={() => {
        setModalVisible(true);
        setSelected(v);
      }}
    />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 25,
        }}>
        <NText.SB23 text="홍길동님의 나날" color={'#2C2C2C'} />
        <Image
          source={require('../../assets/image/retro_complete.png')}
          style={{width: 27, height: 9}}
        />
        <NText.SB15 text="X 19" color="#5E5E5E" />
        <TouchableOpacity onPress={() => navigation.navigate('Notice')}>
          <Ionicons name="notifications-outline" size={22} color="#151515" />
        </TouchableOpacity>
      </View>
      <Margin._15 />
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
      <Margin._28 />
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          marginHorizontal: 5,
          paddingVertical: 10,
        }}>
        <View style={{flex: 1}}>
          {/* 요일 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderTopWidth: 0.5,
              marginHorizontal: 25,
              paddingVertical: 12,
              borderColor: '#EFEFEF',
            }}>
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((v, i) => (
              <Text style={styles.text} key={'daysText' + i}>
                {v}
              </Text>
            ))}
          </View>
          {/* 날짜 */}
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#EFEFEF',
              alignItems: 'center',
              marginHorizontal: 25,
            }}>
            {week.map((v, i) => (
              <View
                style={{
                  flexDirection: 'row',
                  height: timeTableHeight,
                }}
                key={'weekRow' + i}>
                {[0, 1, 2, 3, 4, 5, 6].map((v, i) => (
                  <View
                    key={'daysColumn' + i}
                    style={{
                      width: '14.5%',
                      borderTopWidth: 1,
                      borderColor: '#EFEFEF',
                      paddingTop: 9,
                      paddingLeft: 6,
                      borderLeftWidth: i !== 0 && 0.5,
                    }}>
                    <NText.SB15 text={i.toString()} color={'#B5B5B5'} />
                  </View>
                ))}
              </View>
            ))}
            {data.map((v, i) => {
              return v.monthNumber ? (
                <Block
                  v={v.monthNumber}
                  i={i}
                  day={v.monthName}
                  key={'data' + i + v.monthNumber}
                />
              ) : undefined;
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
              onPress={() => setYear(year - 1)}>
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
              onPress={() => setYear(year + 1)}>
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

const styles = StyleSheet.create({
  text: {
    color: '#B5B5B5',
    fontSize: 12,
    fontWeight: '300',
  },
});
