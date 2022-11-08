import styled from 'styled-components/native';

export const Divider = styled.View`
  width: 100%;
  padding-right: 19px;
  padding-left: 19px;
  border-width: 1px;
  border-color: ${props => props.borderColor};
  align-self: center;
`;
