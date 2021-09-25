import React from 'react';
import {
  Container,
  Category,
  Icon,
} from './style';

//tipage selected
interface Props{
  title: string;
  OnPress: ()=> void;
};

export function CategorySelectButton({ title, OnPress }: Props){
  return(
    <Container onPress={ OnPress }>
      <Category>{ title }</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};