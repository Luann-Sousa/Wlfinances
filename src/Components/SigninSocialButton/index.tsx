import React from 'react';
// import { RectButtonProps } from 'react-native-gesture-handler';
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface Props extends TouchableOpacityProps{
  title: string;
  svg: React.FC<SvgProps>;
}
import {
  Container,
  ImageContainer,
  Text
  
}from './styles';

export function SigninSocialButton({
  title,
  svg: Svg,
  ...rest
}: Props){
  return(
    <Container {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Text> { title }</Text>
    </Container>
  )
}