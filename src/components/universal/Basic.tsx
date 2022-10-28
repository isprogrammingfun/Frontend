import {ViewStyle} from 'react-native';
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

export const SRowContainer = styled.View`
  ${rowViewCss}
`;
