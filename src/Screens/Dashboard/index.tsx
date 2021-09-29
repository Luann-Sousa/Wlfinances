import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
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

//interface higlightDateProps
interface HighlightDataProps{
  total: string;
};

//interface higlightDate
interface HighlightData{
  entries : HighlightDataProps;
  expensives : HighlightDataProps;
  toti: HighlightDataProps;
}
export function Dashboard(){ 
 const datakey = '@wlfinances:transactions';
 const [ transactions, setTransanctions ] = useState<DataListProps[]>([]);
 const [ highlightData, setHighlightDate ] = useState({} as HighlightData )

 async function loadingTransactions() {
   const response = await AsyncStorage.getItem(datakey);
   const transactions = response ? JSON.parse(response) : [];
   let entriesSTotal = 0;
   let expensiveTotal = 0;
   const formatTransaction: DataListProps[] = transactions.map((item: DataListProps)=>{
     if(item.type === 'positive'){
        entriesSTotal += Number(item.amount);
     }else{
       expensiveTotal += Number(item.amount);
     };
    const amount = Number(item.amount).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    const date = Intl.DateTimeFormat('pt-BR',{
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    }).format(new Date(item.date))
    return {
      id: item.id,
      name: item.name,
      amount,
      type: item.type,
      category: item.category,
      date,
    }
   });
   setTransanctions(formatTransaction);
   const toti = entriesSTotal - expensiveTotal;
   setHighlightDate({
    entries:{
      total: entriesSTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    } ,
    expensives:{
       total: expensiveTotal.toLocaleString('pt-BR', {
         style: 'currency',
         currency: 'BRL'
       })
     },
     toti:{
      total: toti.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    },
     
   })
 };

useEffect( ()=> {
  loadingTransactions();
}, []);
//recarrega nossa lista apos fizer um create
useFocusEffect(useCallback( ()=> {
  loadingTransactions();
}, []))



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
            amount={highlightData.entries?.total}
            lastTransaction="Última entrada dia 23 de setembro"
            

          />
          <HighlightCard 
            type="down"
            title="Saídas"
            amount={highlightData.expensives?.total}
            lastTransaction="Última Saída dia 01 de setembro"
          />
          <HighlightCard 
            type="total"
            title="Total"
            amount={highlightData.toti?.total}
            lastTransaction="01 á 26 de setembro"
            />
      </HighlightCards>
    
          <Transactions>
            <Title>Listagem</Title>
            <TransactionsList 
              data={ transactions }
              keyExtractor={ item => item.id }
              renderItem={ ({ item })=> <TransactionCard data={ item }/>} 
            />
         
          </Transactions>
    </Container>
  
  );
};