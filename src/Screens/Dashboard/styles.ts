import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${( { theme } )=> theme.colors.background_color};
`;
export const Title = styled.Text`
  font-family: ${( { theme})=> theme.fonts.regular};
  font-size: 16px;
  color: ${( { theme } )=> theme.colors.title};
`;