import React, { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RFValue } from 'react-native-responsive-fontsize';
import { HistoryCard } from '../../Components/HistoryCard';
import { VictoryPie } from 'victory-native';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { 
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month, 
} from './styles';
import { categories } from '../../Utils/categories';
interface TransactionData{
  type: 'positive'| 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
};
interface CategoryData{
  key: string;
  name: string;
  totalFormated: string;
  total:number;
  color: string;
  percent: string;
}
export function Resume(){
  const [isloading, setIsLoading] = useState(true)
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([]);
  const [ selectedDate, setSelectedDate] = useState(new Date());

  function handleChangeDate(action: 'next' | 'prev'){
    if(action === 'next'){
      const newDate = addMonths( selectedDate, 1);
      setSelectedDate(newDate)
      console.log(newDate)
    }else{
      const newDate = subMonths( selectedDate, 1);
      setSelectedDate(newDate)
    }
  };
  const theme = useTheme();
  async function loadDate(){
      const datakey = '@wlfinances:transactions';
    const response = await AsyncStorage.getItem(datakey);
    const responseFormated =  response ? JSON.parse(response) : [];
    const expensives = responseFormated
    .filter((expensive: TransactionData) => 
    expensive.type === 'negative' &&
    new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
    new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
    )

    // console.log(expensives)
    const expensivesTotal = expensives.reduce( (acumullator: number, expensive: TransactionData)=>{
      return acumullator + Number(expensive.amount);

    },0);
    console.log(expensivesTotal)
    const totalByCategory: CategoryData[] = [];
    //forEach nao delvove um objeto
    categories.forEach(category => {
      let categorySum = 0;

      //agora dentro do category ireu pecorre so os meu gastos
      expensives.forEach((expensive: TransactionData) => {
        if(expensive.category === category.key){
          categorySum += Number(expensive.amount);
        }
      });
     if(categorySum > 0){
      const totalFormated = categorySum
      .toLocaleString('pt-BR',{
        style: 'currency',
        currency: 'BRL'
      })
      
      const percent = `${(categorySum / expensivesTotal * 100).toFixed(0)}%`

      totalByCategory.push({
        key: category.key,
        name: category.name,
        color: category.color,
        total: categorySum,
        totalFormated,
        percent,
        
      })
     }
    })
    setTotalByCategories(totalByCategory)
  };
  useEffect( ()=>{
    loadDate()
  }, [selectedDate])
  return(
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 24,
        paddingBottom: useBottomTabBarHeight(),
      }}
    >
      <Header>
        <Title>Resumo por categorias</Title>
      </Header>
      <Content>
        <MonthSelect>
          <MonthSelectButton onPress={ ()=> handleChangeDate('prev')}>
            <MonthSelectIcon name="chevron-left"/>
          </MonthSelectButton>

          <Month>{format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}</Month>

          <MonthSelectButton onPress={ ()=> handleChangeDate('next')}>
            <MonthSelectIcon name="chevron-right"/>
          </MonthSelectButton>
        </MonthSelect>


       <ChartContainer>
       <VictoryPie 
          data={totalByCategories}
          x="percent"
          y="total"
          colorScale={totalByCategories.map(category => category.color)}
          style={{
            labels:{
              fontSize:`${ RFValue(18)}px`,
              fontWeight: 'bold',
              fill: theme.colors.shape,
            }
          }}
          labelRadius={50}
        />
       </ChartContainer>
        {
          totalByCategories.map( item => (
            <HistoryCard
            key={item.color}
            title={item.name}
            amount={item.totalFormated}
            color={ item.color }
            />
          ))
        }
      </Content>
    </Container>
  )
}