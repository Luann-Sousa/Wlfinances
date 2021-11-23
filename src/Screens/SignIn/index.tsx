import React, { useState } from 'react';
import {  ActivityIndicator, Alert, Platform } from 'react-native';
import { useAuth } from '../../Hooks/auth';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from  '../../assets/logo.svg';
import { SigninSocialButton } from '../../Components/SigninSocialButton';
import{
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles'
export function SignIn(){
  const theme = useTheme();
  const [isLoading, setIsLoading ] = useState(false);
  const { signInWithGoogle } = useAuth()
  
  async function handleSignInWithGoogle() {
    setIsLoading(true);
    try {
     return await signInWithGoogle();
    } catch (error) {
  
      Alert.alert('Não foi possivel connectar a conta Google')
    }finally{
      setIsLoading(true);
    }
  };
  return(
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
          width={RFValue(120)}
          height={RFValue(68)}
          />
          <Title>
            Controle suas {'\n'}
            finaças de forma  {'\n'}
            muito simples  {'\n'}
          </Title>
        </TitleWrapper>
        
        <SignInTitle>
          Faça seu login com
          uma das consultas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
            <SigninSocialButton
              title="Entrar com Google"
              svg={GoogleSvg}
              onPress={handleSignInWithGoogle}
            />
          {
            Platform.OS === 'ios' &&
              <SigninSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
            />
          }
        </FooterWrapper>

        { 
        isLoading && <ActivityIndicator color={ theme.colors.shape} size='large' style={{ marginTop: 20}}/>
        }
      </Footer>
    </Container>
  )
}