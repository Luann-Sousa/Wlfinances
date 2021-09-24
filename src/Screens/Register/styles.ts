import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${( {theme})=> theme.colors.background_color};
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${( { theme})=> theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding: 19px;
`;
export const Fields = styled.View`
`;
export const Title = styled.Text`
  font-family: ${( {theme})=> theme.fonts.regular};
  color: ${( { theme})=> theme.colors.shape};
`;
export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;

  padding: 24px;
`;
export const TransactionTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  
  margin-top: 8px;
  margin-bottom: 16px;
`;