import React from 'react';
import { TouchableOpacityProps} from 'react-native';
import {
  Container,
  Title,
  Icon,
} from './styles';
//iterface extends props de touchaOpacyt
interface Props extends TouchableOpacityProps {
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
       type={type}
       isActive={isActive}
       {...rest}
    >
      <Icon 
      name={icons[type]}
      type={type}
      />
      <Title>{title}</Title>
    </Container>
  );
};