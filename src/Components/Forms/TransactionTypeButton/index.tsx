import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  Container,
  Title,
  Icon,
  Button,
} from './styles';
//iterface extends props de touchaOpacyt
interface Props extends RectButtonProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
};

//varivael deixar os icones dinânmicos
const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
};

export function TransactionTypeButton({ type, title, isActive,...rest }: Props){
  return(
    <Container 
       type={ type }
       isActive={ isActive }
      
    >
      <Button 
        {...rest }
      > 
        <Icon 
        name={ icons[type] }
        type={ type }
        />
      </Button>
      <Title>{ title }</Title>
    </Container>
  );
};