import React, { useContext, useState, useEffect } from 'react';
import { createContext, ReactNode } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

//tipagaem do conteudo que nosso AuthProvider ira receber
interface AuthProviderProps {
  children: ReactNode;
};

//iremos ja criar nosso Usuario sendo um Obejeto
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};
//tipagaem do conteudo que nossa estado ira receber e passamos oque iremos armazerna no estado
interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signInWhitApple(): Promise<void>;
  
};
//tipagem dos dados do usuario do google
interface AuthorizationResponse {
  params:{
    access_token: string;
  },
  type: string;
}

//passamos nossa tipagem pra  AuthContext falando que ele recebe um obejto com a seguinte tipagem
const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps ){
  // const  user = {
  //   id: "1",
  //   name: "Luann",
  //   email: "luann2021@gmail.com.b"
  // };
  const [ user, setuserData ] = useState<User>({} as User)
  const datakey = '@wlfinances:user';
  //fazendo authenticacao com a GOOGLE
  async function signInWithGoogle(){
    // vamos usar try e cath pois como estamos lidando com authenticação e não sabemos 
    //o retorno ai e interessante usar esse cara caso a aplicacao crash  ou trave nossa 
    // aplicacao continua firme e forte ai vamos tentar fazer algo que e o try caso der errado vamos 
    // capturar o erro mas so que o erro nao faz sentindo eu trar no meu contexto vai mais sentido trata-lo 
    //onde esse function foi chamada por isso vamos laçar o error com Trhow new Error pra quem chamo 
    try {
      
      const CLIENT_ID = '839956036333-rp63mo5rcmrg7uh77fg249v4vhgdklgo.apps.googleusercontent.com';// credencial da CTP
      const REDIRECT_URI = 'https://auth.expo.io/@programadorwl/wlfinances';//quando usuario for auntenticado pra onde precisa voltar
      const RESPONSE_TYPE = 'token';//tipo de resposta
      const SCOPE = encodeURI('profile email');//oque queremos acessar do usuario passamos essa funcao pra no url entendere ira tirar nossos espaços

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`; //endpoit da authenticaçao da google
     const { params, type } = await  AuthSession.startAsync({ authUrl}) as AuthorizationResponse;

     if( type === 'success'){
      const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
      const userInfo = await response.json();
      console.log(userInfo.name);
      setuserData({
        id: userInfo.id,
        name: userInfo.given_name,
        email: userInfo.email,
        avatar: userInfo.picture,
      })

      console.log("User"+user);
      
     console.log( await AsyncStorage.setItem( datakey, JSON.stringify(user)));                      
    }
  

    } catch (error) {
      // throw new Error(error)
      console.log(error)
    }
  };

  async function signInWhitApple(){
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL
        ]
      });

      if(credential){
        const userLoggedAplle = {
          id: credential.user,
          name: credential.fullName!,
          email: credential.email,
          avatar: undefined,
        };
        console.log(userLoggedAplle)
       await AsyncStorage.setItem('@wlfinances: user', JSON.stringify(userLoggedAplle))
      }
    } catch (error) {
      
    }
  };
  useEffect( ()=> {
    async function loadingSorageDate(){
      const userStorad = await AsyncStorage.getItem(datakey);
      if(userStorad){
        const user = JSON.parse(userStorad) as User;
        setuserData(user)
      }
    };
    loadingSorageDate()
  },[])
  return(
   <AuthContext.Provider value={{
     user,
     signInWithGoogle,
     signInWhitApple
   }}>
      { children }
   </AuthContext.Provider>
  );
};

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth,  };