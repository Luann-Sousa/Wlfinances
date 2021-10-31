import React from 'react';
import {  Alert } from 'react-native';
import { useAuth } from '../../Hooks/auth';
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
  const { signInWithGoogle } = useAuth()
  
  async function handleSignInWithGoogle() {
   
    try {
      await signInWithGoogle();
    } catch (error) {
  
      Alert.alert('Não foi possivel connectar a conta Google')
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
            <SigninSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
            />
        </FooterWrapper>
      </Footer>
    </Container>
  )
}