import React, { useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
 const datakey = '@wlfinances:transactions';
 const [ data, setData ] = useState<DataListProps[]>();

 async function loadingTransactions(){
  const response = await AsyncStorage.getItem(datakey);
  const transactions = response ? JSON.parse(response): [];
  setData(transactions);
 };
 
 useEffect( ()=> {
  loadingTransactions()
 }, []);

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