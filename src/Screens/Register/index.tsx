import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';
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
}
export function Register(){
  const [ transactionType, setTransactionType] = useState('');
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);
  const [ category, setCategory ] = useState({
    key: 'categoy',
    name: 'Categoria',
  });

  const { control, handleSubmit, } = useForm();

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
      const data = {
        name: form.name,
        amount: form.amount,
        transactionType,
        category: category.key
      };
      console.log(data)
    };
  return(
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
              />
              <InputForm 
                name="amount"
                control={ control }
                placeholder="Preço"
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
  );
};