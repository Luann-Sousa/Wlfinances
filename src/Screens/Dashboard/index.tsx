import React from "react";
import { HighlightCard } from "../../Components/HighlightCard";
import { TransactionCard,  TransactionCardProps } from "../../Components/TransactionCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LougoutButton,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,

} from './styles';
//interface data
export interface DataListProps extends TransactionCardProps{
  id: string;
};
export function Dashboard(){
 
//tipos card
const data: DataListProps[] =[{
  id: '1',
  type: 'positive',
  title:"Desenvolvimento de Apps",
  amount:"R$ 12.00,00",
  category:{
      name: "Vendas",
      icon: 'dollar-sign'
  },
  date:"03/09/2021"
},
{
  id: '2',
  type: 'negative',
  title:"Hambugueria Erli ",
  amount:"R$25,00",
  category:{
      name: "Alimentação",
      icon: 'coffee'
  },
  date:"16/09/2021"
},
{
  id: '3',
  type: 'negative',
  title:"Aluguel da casa",
  amount:"R$ 450,00",
  category:{
      name: "Saídas",
      icon: 'shopping-bag'
  },
  date:"21/09/2021"
}];

//tipagem BorderlessButton

  return(
    <Container>
      <Header>
      <UserWrapper>
        <UserInfo>
          <Photo 
            source={{ uri: 'https://avatars.githubusercontent.com/u/78818354?v=4'}}/>
          <User>
            <UserGreeting>Óla, </UserGreeting>
            <UserName>$Valor</UserName>
          </User>
        </UserInfo>
      <LougoutButton onPress={ ()=> {}}>
         <Icon name="power"/>
      </LougoutButton>
      </UserWrapper>
      </Header>
    
        <HighlightCards >
          <HighlightCard 
            type="up"
            title="Entrada"
            amount="R$ 17.400,00"
            lastTransaction="Última entrada dia 23 de setembro"
            

          />
          <HighlightCard 
            type="down"
            title="Saídas"
            amount="R$ 1.259,00"
            lastTransaction="Última Saída dia 01 de setembro"
          />
          <HighlightCard 
            type="total"
            title="Total"
            amount="R$ 16.141,00"
            lastTransaction="01 á 26 de setembro"
            />
      </HighlightCards>
    
          <Transactions>
            <Title>Listagem</Title>
            <TransactionsList 
              data={ data }
              keyExtractor={ item => item.id }
              renderItem={ ({ item })=> <TransactionCard data={ item }/>} 
            />
         
          </Transactions>
    </Container>
  
  );
};