import React from 'react';
// import { RectButtonProps } from 'react-native-gesture-handler';
import { TouchableOpacityProps } from 'react-native';
//tipagen do button com interface
interface Props extends TouchableOpacityProps {
  title: string;
};

import { 
  Container,
  Title
} from './styles';
export function Buttton({ title, ...rest}: Props){
  return(
    <Container  {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};