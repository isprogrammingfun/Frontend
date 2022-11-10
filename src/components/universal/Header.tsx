import React, {useMemo} from 'react';
import {Image, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Source} from 'react-native-fast-image';
import styled from 'styled-components/native';
import {ImageIcon} from './Basic';
import {NText} from './NText';

interface HeaderContainerProps {
  height: number;
  backgroundColor: string;
  hasGoBack: boolean;
}

const headerPaddingHorizontal = 24;
const HeaderContainer = styled.View<HeaderContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${props => props.height};
  padding-left: ${props => (props.hasGoBack ? 0 : headerPaddingHorizontal)};
  padding-right: 14px;
  background-color: ${props => props.backgroundColor};
`;

interface HeaderProps {
  title?: string;
  // optional cmpnt
  subTitle?: string;
  titleImgSource?: Source | number;
  height?: number;
  hasGoBack: boolean;
  hasColorChip?: boolean;
  onPressGoBack?: () => void;
  headerLeftCmpnt?: JSX.Element; // headerCenter, headerRight 사용 안한다고 가정하고 flex: 1 로 잡음.
  headerRightCmpnt?: JSX.Element;
  headerCenterCmpnt?: JSX.Element;
  backgroundColor?: string;
  onPressTitle?: () => void;
  titleColor?: string;
}
export const Header = ({
  title,
  titleImgSource,
  height = 48,
  hasGoBack,
  onPressGoBack,
  headerLeftCmpnt,
  headerRightCmpnt,
  headerCenterCmpnt,
  backgroundColor,
  onPressTitle,
}: HeaderProps) => {
  const goBackBoxView: ViewStyle = useMemo(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
    }),
    [],
  );
  const goBackButtonStyle: ViewStyle = useMemo(
    () => ({
      height,
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 10,
    }),
    [],
  );
  const titleImgStyle: ViewStyle = useMemo(
    () => ({
      justifyContent: 'center',
      paddingRight: 7,
    }),
    [],
  );
  const leftCmpntStyle: ViewStyle = useMemo(
    () => ({
      height,
      flex: 1, // headerCenter, headerRight 사용 안한다고 가정하고 flex: 1 로 잡음.
      justifyContent: 'center',
    }),
    [],
  );
  const centerCmpntStyle: ViewStyle = useMemo(
    () => ({
      position: 'absolute',
      width: '100%',
      height,
      justifyContent: 'center',
      alignItems: 'center',
    }),
    [],
  );
  const rightCmpntStyle: ViewStyle = useMemo(
    () => ({height, justifyContent: 'center'}),
    [],
  );

  return (
    <HeaderContainer
      height={height}
      backgroundColor={backgroundColor}
      hasGoBack={hasGoBack}>
      {/* 뒤로가기 & 타이틀 */}
      <View style={goBackBoxView}>
        {hasGoBack && (
          <TouchableOpacity onPress={onPressGoBack} style={goBackButtonStyle}>
            <Image
              source={require('../../assets/image/left_arrow.png')}
              resizeMode="contain"
              style={{width: 28, height: 28}}
            />
          </TouchableOpacity>
        )}
        {titleImgSource ? (
          <View style={titleImgStyle}>
            <ImageIcon
              source={titleImgSource}
              width={28}
              height={2}
              resizeMode="contain"
            />
          </View>
        ) : null}
        {title ? (
          <>
            <TouchableOpacity onPress={onPressTitle} activeOpacity={1}>
              <NText.SB23 text={title} color={'black'} numberOfLines={1} />
            </TouchableOpacity>
          </>
        ) : null}
      </View>

      {headerLeftCmpnt ? (
        <View style={leftCmpntStyle}>{headerLeftCmpnt}</View>
      ) : null}

      {headerCenterCmpnt ? (
        <View style={centerCmpntStyle} pointerEvents={'none'}>
          {headerCenterCmpnt}
        </View>
      ) : null}

      {headerRightCmpnt ? (
        <View style={rightCmpntStyle}>{headerRightCmpnt}</View>
      ) : null}
    </HeaderContainer>
  );
};
