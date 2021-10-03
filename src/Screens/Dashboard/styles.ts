import styled from "styled-components/native";
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue  } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { DataListProps } from '.'


export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${( { theme } )=> theme.colors.background_color};
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${( { theme })=> theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const UserWrapper = styled.View`
  width: 100%;

  margin-top: -90px;
  padding: 0 20px;
  /* margin-top:${getStatusBarHeight() + RFValue(28)}px; */

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;
export const User = styled.View`
  margin-left: 17px;
`;
export const UserGreeting = styled.Text`
  color: ${( { theme })=> theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${( {theme})=> theme.fonts.regular};
`;
export const UserName = styled.Text`
color: ${( { theme })=> theme.colors.shape};

font-size: ${RFValue(18)}px;
font-family: ${( {theme})=> theme.fonts.bold};
`;
export const LougoutButton = styled(BorderlessButton)`
`;
export const Icon = styled(Feather)`
  color: ${( { theme } )=> theme.colors.secudary};
  font-size: ${RFValue(24)}px;
`;
export const HighlightCards = styled.ScrollView.attrs({
  horizontal:true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle:{ paddingHorizontal: 24},
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(23)}px;
`;
export const Transactions = styled.View`
  flex: 1;
  padding: 0px 24px;
  margin-top: ${RFPercentage(26)}px;
  /* background-color: red; */
`;
export const Title = styled.Text`
  font-family: ${( { theme})=> theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${( { theme } )=> theme.colors.title};
  
  margin-bottom: 16px;
`;
export const TransactionsList = styled(
  FlatList as new ()=> FlatList<DataListProps>
  ).attrs({
  showsVerticalScrollIndicator:false,
  contentContainerStyle: {paddingBottom: getBottomSpace()}
})`
  
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;