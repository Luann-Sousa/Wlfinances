import React from "react";
import { 
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  Category,
  CategoryName,
  Date,
 } from './style';

 //tipo category
 interface Categoryy{
  name: string;
  icon: string;
 };

 //interface do nosso TransactionCard
 export interface TransactionCardProps{
    type: 'positive'| 'negative';
    title: string;
    amount: string;
    category: Categoryy;
    date: string;
 };

 //interface data 
 interface Props{
   data: TransactionCardProps;
 };
 
export function TransactionCard({ data }: Props){
  return(
    <Container>
      <Title>{ data.title }</Title>
      <Amount type={data.type}>
         { data.type === 'negative' && '- '}
         { data.amount }
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};