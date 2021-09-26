import React, { useState, useEffect } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buttton } from '../../Components/Forms/Button';
import { CategorySelectButton } from '../../Components/Forms/CategorySelectButton';
import { InputForm } from '../../Components/Forms/InputForm';
import { TransactionTypeButton } from '../../Components/Forms/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import { 
  Container,  
  Header,
  Fields,
  Title,
  Form,
  TransactionTypes,
} from './styles';

//tipando dados que vao ser enviado quando chamar a requisicao
interface FormDate {
  name: string;
  amount: string
};
//schema formularios react-hook-forms
const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number().typeError('Informe um valor númerico').positive('O valor não pode ser negativo').required('O valor é obrigatório')
});
export function Register(){
  const navigation = useNavigation();
  const [ transactionType, setTransactionType] = useState('');
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);
  const [ category, setCategory ] = useState({
    key: 'categoy',
    name: 'Categoria',
  });

  const { 
    control, 
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm({
    resolver: yupResolver(schema)
  });
  //chave que o async storage esta usando na coletions
  const datakey = '@wlfinances:transactions';

  //function sabe o tipo do button
  function handleTransactionsTypesSelect(type: 'up' | 'down'){
    setTransactionType(type);
  };

  //function abre modal
  function handleOpenCloseSelectCategoryModal(){
    setCategoryModalOpen(true);
  };
    //function abre modal
    function handleCloseSelectCategoryModal(){
      setCategoryModalOpen(false);
    };

    //fuction quando enviar requisicao
   async function handleRegisterValue(form: FormDate){
      if(!transactionType){
        return Alert.alert('Selecione o tipo da transação');
      };
      if(category.key === 'category'){
        return Alert.alert('Selecione a categoria');
      };
      const newTransactions = {
        id: String(uuid.v4()),
        name: form.name,
        amount: form.amount,
        transactionType,
        category: category.key,
        date: new Date()
      };
      console.log(newTransactions)
    //asyncStorage
    try {
      const data = await AsyncStorage.getItem(datakey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormated = [
          ...currentData,
          newTransactions,
      ];
      await AsyncStorage.setItem( datakey, JSON.stringify(dataFormated));
      reset();
      setTransactionType('');
      setCategory({
        key: '',
        name: ''
      });
      
      // navigation.navigate("listagem")
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar")
    };
    };
    useEffect( ()=> {
        async function loaDingDate(){
          const transactions = await AsyncStorage.getItem(datakey);
          console.log(JSON.parse(transactions!))
        };
        loaDingDate();
          // async function loadRemoveAlll(){
        //   const transactions = await AsyncStorage.removeItem(datakey);
        //   console.log(transactions)
        // };
        // loadRemoveAlll();
    },[]);
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

         <Form>
            <Fields>
              <InputForm 
                 name="name"
                 control={ control }
                 placeholder="Nome"
                 autoCapitalize="sentences"
                 autoCorrect={false}
                 error={errors.name && errors.name.message}
              />
              <InputForm 
                name="amount"
                control={ control }
                placeholder="Preço"
                keyboardType="numeric"
                error={errors.amount && errors.amount.message}
              />
              <TransactionTypes>
                <TransactionTypeButton 
                   type="up"
                   title="Income"
                   onPress={()=> handleTransactionsTypesSelect('up')}
                   isActive={transactionType === 'up'}
                />
                <TransactionTypeButton 
                  type="down"
                  title="Outcome"
                  onPress={()=> handleTransactionsTypesSelect('down')}
                  isActive={transactionType === 'down'}
                />
              </TransactionTypes>
              <CategorySelectButton 
                title={category.name}
                OnPress={ handleOpenCloseSelectCategoryModal}
              />
            </Fields>

          <Buttton 
            onPress={handleSubmit(handleRegisterValue)}
            title="Enviar"/>
       </Form>
       <Modal visible={ categoryModalOpen }>
         <CategorySelect 
          category = {category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
         />
       </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};