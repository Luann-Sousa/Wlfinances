import React, { useState } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
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
  const [ transactionType, setTransactionType] = useState('');
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);
  const [ category, setCategory ] = useState({
    key: 'categoy',
    name: 'Categoria',
  });

  const { 
    control, 
    handleSubmit,
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(schema)
  });

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
    function handleRegisterValue(form: FormDate){
      if(!transactionType){
        return Alert.alert('Selecione o tipo da transação');
      };
      if(category.key === 'category'){
        return Alert.alert('Selecione a categoria');
      };
      const data = {
        name: form.name,
        amount: form.amount,
        transactionType,
        category: category.key
      };
      console.log(data)
    };
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