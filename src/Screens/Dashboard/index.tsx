import React, { useState, useEffect, useCallback } from "react";
import { ActivityIndicator, Text } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
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
  LoadContainer,

} from './styles';
//interface data
export interface DataListProps extends TransactionCardProps{
  id: string;
};

//interface higlightDateProps
interface HighlightDataProps{
  total: string;
  lastTransaction : string;
};

//interface higlightDate
interface HighlightData{
  entries : HighlightDataProps;
  expensives : HighlightDataProps;
  toti: HighlightDataProps;
}
export function Dashboard(){ 
 const [isloading, setIsloading] = useState(true)
 const [ transactions, setTransanctions ] = useState<DataListProps[]>([]);
 const [ highlightData, setHighlightDate ] = useState({} as HighlightData )

 const thema = useTheme();
 function getLastTransactionDate(
  collection: DataListProps[],
  type: 'positive' | 'negative'
){
  const lastTransaction = new Date(
  Math.max.apply(Math, collection
  .filter(transaction => transaction.type === type)
  .map(transaction => new Date(transaction.date).getTime())))

  return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long' })}`;
}
 async function loadingTransactions() {
   const datakey = '@wlfinances:transactions';
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
   const lastTransactionEntries = getLastTransactionDate(transactions, 'positive');
   const lastTransactionExpensives = getLastTransactionDate(transactions, 'negative');
   const totalInterval = `01 a ${lastTransactionEntries}`
   const toti = entriesSTotal - expensiveTotal;
   setHighlightDate({
    entries:{
      total: entriesSTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }),
      lastTransaction: `Útilma entrada ${lastTransactionEntries}`,
    } ,
    expensives:{
       total: expensiveTotal.toLocaleString('pt-BR', {
         style: 'currency',
         currency: 'BRL'
       }),
       lastTransaction: `Útilma saida ${lastTransactionExpensives}`,
     },
     
     toti:{
      total: toti.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        
      }),
      lastTransaction: totalInterval,
    },
     
   })
  //  setIsloading(false);
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
      
        <>
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
            lastTransaction={highlightData.entries?.lastTransaction}
            

          />
          <HighlightCard 
            type="down"
            title="Saídas"
            amount={highlightData.expensives?.total}
            lastTransaction={highlightData.expensives?.lastTransaction}
          />
          <HighlightCard 
            type="total"
            title="Total"
            amount={highlightData.toti?.total}
            lastTransaction={highlightData.toti?.lastTransaction}
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
          </>
    
    </Container>
  
  );
};