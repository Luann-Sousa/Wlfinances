import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

//tipagen do button com interface
interface Props extends RectButtonProps {
  title: string;
  onPress: ()=> void;
};

import { 
  Container,
  Title
} from './styles';
export function Buttton({ title, onPress, ...rest}: Props){
  return(
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};