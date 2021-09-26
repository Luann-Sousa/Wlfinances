import React from 'react';
import { FlatList } from 'react-native';
import { Buttton } from '../../Components/Forms/Button';
import { categories } from '../../Utils/categories';
import { 
  Conatiner,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Sepataror,
  Footer,
} from './styles';

//interface gategory
interface Category{
  key: string;
  name: string;
};
//interface Props
interface Props{
  category: Category;
  setCategory: ( category: Category) => void;
  closeSelectCategory: () => void;
};

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props){
  
  //function selected category
  function handleCategorySelect(category: Category){
    setCategory(category)
  };
  return(
    <Conatiner>
      <Header> 
        <Title>Categorias</Title>
      </Header>
      <FlatList 
        data={categories}
        keyExtractor={ ( item )=> item.key}
        renderItem={ ({ item })=>(
          <Category
            onPress={()=> handleCategorySelect(item)}
            isActive={ category.key === item.key }
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={ ()=> <Sepataror />}

      />

      <Footer>
        <Buttton 
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Conatiner>
  )
}
