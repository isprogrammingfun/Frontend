import {ImageStyle, ViewStyle} from 'react-native';
import styled, {css} from 'styled-components/native';

const rowViewCss = css`
  flex-direction: row;
  justify-content: ${({justifyContent}: ViewStyle) =>
    justifyContent || 'flex-start'};
  align-items: ${({alignItems}: ViewStyle) => alignItems || 'flex-start'};
  padding-top: ${({paddingTop}: ViewStyle) => paddingTop || 0}px;
  padding-bottom: ${({paddingBottom}: ViewStyle) => paddingBottom || 0}px;
  padding-left: ${({paddingLeft}: ViewStyle) => paddingLeft || 0}px;
  padding-right: ${({paddingRight}: ViewStyle) => paddingRight || 0}px;
  margin-top: ${({marginTop}: ViewStyle) => marginTop || 0}px;
  margin-bottom: ${({marginBottom}: ViewStyle) => marginBottom || 0}px;
  margin-left: ${({marginLeft}: ViewStyle) => marginLeft || 0}px;
  margin-right: ${({marginRight}: ViewStyle) => marginRight || 0}px;
  opacity: ${({opacity}: ViewStyle) => opacity || 1.0};
`;

const bgCss = css`
  background-color: ${({bg}: {bg?: string}) => bg || 'transparent'};
`;
export const ImageIcon = styled.Image`
  width: ${({width}: ImageStyle) => width}px;
  height: ${({height}: ImageStyle) => height}px;
  z-index: ${({zIndex}: ImageStyle) => zIndex || 0};
  margin-top: ${({marginTop}: ImageStyle) => marginTop || 0}px;
  margin-right: ${({marginRight}: ImageStyle) => marginRight || 0}px;
  margin-bottom: ${({marginBottom}: ImageStyle) => marginBottom || 0}px;
  margin-left: ${({marginLeft}: ImageStyle) => marginLeft || 0}px;
  padding-top: ${({paddingTop}: ImageStyle) => paddingTop || 0}px;
  padding-right: ${({paddingRight}: ImageStyle) => paddingRight || 0}px;
  padding-bottom: ${({paddingBottom}: ImageStyle) => paddingBottom || 0}px;
  padding-left: ${({paddingLeft}: ImageStyle) => paddingLeft || 0}px;
  ${bgCss}
`;

export const SRowContainer = styled.View`
  ${rowViewCss}
`;
