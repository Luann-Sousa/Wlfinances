## COLOCANDO TYPESCRIPT EM UM PROJETO EXPO NA VERSÃO MAIOR QUE 4.0.62 ATUALIZADA NO DIA 11 DE JUN 2021- 18:33:28 - 0700

\*Breaking changes
\*\*www.github.com/expo/expo-example-cli/blob/master/CHANGELOG.md

<p> > [expo-cli] Add expo-cli (#npm install --global expo-cli) </p>
<p> > [init-expo] Start project expo --name (#expo init nameproject)</p>
<p> > [cli] Remove bart typescript template(#3562)</p>

<h1>Acesse A documentação ....</h1>
<span>**https://docs.expo.dev/guides/typescript/</span>

<p>*Ir ate a raiz do seu projeto ok, após isso você precisárar criar uma arquivo de configuração "TypeScript"[tsconfig.json]</p>
<p>*Preciso executar seguinte comando no meu terminal [ ->expo start ].</p>
<p>-quando der o seguinte comando acima "expo start" ele automaticamente irá indentificar na nossa raiz o arquivo [ TypeScript -> tsconfig.json], e ai ele irá gerar nosso templemte todo corretamente.</p>
<p>* Opções que irão aparecer selecione [ -> @types/react-native]</p>
- install typescript.</br>
- install @typescript/react.</br>
- install @typescript/react-native.</br>
<p></p>
<p>*Se você ir ate ao seu "tsconfig.json irá perceber que foram adicionados algumas coisas você agora so precisa colaborar indo ate o arquivo e acrecentando uma props seguindo o seguinte valor [stric: true]"</p>

## INTSLANDO DEPEDENCIAS PARA TER UMA OTIMA PRODUTIVIDADE EM NOSSO AMBIEMTE DE DESENVOLVIMENTO.

<p>*Styled-components [ -> yarn add styled-compements | yarn add @types/styled-components-react-native] => lib bastante utilizada para estilizar nossas aplicação quanto ela seja mobile or desktop.</p>
<p>-falando um pouco sobre mais..., essa lib nos dar total liberdade de trabarlamos da mesma forma que trabalhamos desenvolvendo aplição web's , e tabem conseguimos ter um divisão perfeita, e isolar nossos componentes de seus aspecto funcional ou ate msm visual do compoente, conseguimos orgarnizar tudo isso por issa ela e um exelente lib, temos poder de trabalhar com forma dinâminca conseguimos assim acessar propiedades dentro do styled-componet para gente estilizar algum componete que esteja baseado em um estado podemos dizer assim [ -> A logo $Valor tem que ficar vermelha quando usuario estiver logado na aplicação, mais emfim vamos praticar].</p>

## VAMOS COLOCAR UM ESTILO GLOBAL EM NOSSA APLICACAO E SETANDO AS CORES QUE IREMOS UTILIZA NO PROJETO

<p>*Ir ate a pasta src criar uma pasta chamada Global que no caso e onde nosso estilos de todas nossa aplicacao vai ficar
dentro dela cria outra pasta chamada Styles e sim dentro dela ficará seu codigo de configuração de estilo global.</p>

-Site de cores corvert hexadecimal rgb => "https://calculareconverter.com.br/hex-to-rgb/"|"https://www.rapidtables.com/convert/color/hex-to-rgb.html"</br>

## VAMOS COLOCAR FONTES EM NOSSA APLICAÇÃO PONTO MUITO IMPORTANTE.

<p>*Font' s Poppins</p>
--Onde iremos pegar nossas fonte gratuitamente rsrs [ -> https://fonts.google.com/]
** expo install expo-font @expo-google-fontes/poppins
** expo install expo-app-loading => para lidar com carregamento no expo de forma vamos dizer amigavel rs.

## Desmistificando a densidade de pixel!

A densidade de pixels normalmente é chamada de PPI (Pixels Per Inch, Pixels por polegada).Quanto maior o PPI, mais detalhes aparecem na imagem. O aplicativo Densidade de pixels permite manipular diferentes parâmetros e saber como eles afetam a densidade de pixels.
\*\*yarn add react-native-responsive-fontsize

# PARA TRABALHA TELA IPHINE

yarn add react-native-iphone-x-helper

## TRABALHANDO COM COMPONENTS NATIVO DA NOSSA APLICACAO

Gesture Handler tem como objetivo substituir o sistema de toque integrado do React Native, chamado Gesture Responder System .

A motivação para construir esta biblioteca foi abordar as limitações de desempenho do sistema Gesture Responder do React Native e fornecer mais controle sobre os componentes nativos integrados que podem lidar com gestos. Recomendamos esta palestra de Krzysztof Magiera, na qual ele explica problemas com o sistema de resposta.

## React-Hooks-Form

npm install @hookform/resolvers yup

## NAVEGAÇÕES ENTRE TELAS

https://reactnavigation.org/

1*yarn add @react-navigation/native
3*yarn add @react-navigation/bottom-tabs

## ASYNC STORAGE

- Hoje iremos aprender o nossa ferramenta AsyncStorage, para que ela serve ? então podemos dizer que o AsyncStorage

* seria para voce está persistindo ( armazenandon ) os dados no dispositivo do úsuario.

- O AsyncStorage e uma ferramenta com ótima estrategia de armazenamento, quando sua aplicação não tem muitas regras -e relacionamento envolvido, pois o sistema de armazenamento e simples e baseado em "CHAVE E VALOR"( key-value)
  -assicrono e persistente. Isso e uma estragia ótima comparada Armazenamento no estado, pois os dados que estão armazenados nos estados ele ficam ali apenas em tempo execução da aplicação.

1\* EXEMPLO DE COMO O ASYNC STORAGE FUNCIONA

- ele sempre amarzenara seu dados usando uma estrutura parecida com json podmeos dizer asim "chave_value"
  -colecao_key => nome da colecao , uma cois bem usada, quando voce quer buscar, criar ou ate deletar algo voce tem que ter essa chave. Voce pergunta mais por que preciso dessa chave ? então podemos dizer que essa chave e a indentificacao da colecao que voce deseja esta querendo buscar, criar ou ate deletar dados simples assim.

@gofinances:transactions
[
{
chave: valor,
chave: valor,
}
]

\*quando devemos criar um colecao no dispositivo do usuario seria uma boa pratica criar assim ..

1\* https://docs.expo.dev/versions/latest/sdk/async-storage/
-expo install @react-native-async-storage/async-storage

## PARA TRABALARMOS COM GRAFICO VAMOS USA UMA LIBE CHAMA VicotryPie

yarn add add victory-native
yarn add react-native-svg
https://formidable.com/open-source/victory/docs/victory-pie/
Victory é um ecossistema opinativo, mas totalmente substituível, de componentes React combináveis ​​para a construção de visualizações de dados interativos. O tutorial a seguir explica como configurar um gráfico básico. Para as próximas etapas, consulte nossas seções de Perguntas frequentes e Galeria . Para exemplos mais avançados, verifique nossos guias .

## PARA DEIXAR NOSSA APLICAÇAO PERFOMATICA E BOM USAR O SVG

**por padrão o react-native nao consegue lidar com SVG em seu processor de biulder com a exeção do react-vector-icon
que por padrão ja usa o svg tranquilamente
--https://github.com/kristerkari/react-native-svg-transformer
yarn add --dev react-native-svg-transformer
**lembre-se apos istaldo precisa fazer uma configuração no nosso metro.js segue abaixo
metro.config.js:

// expo v40:
const { getDefaultConfig } = require("@expo/metro-config");

// expo v41:
// remove the @ (see: https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
const {
resolver: { sourceExts, assetExts }
} = await getDefaultConfig(\_\_dirname);
return {
transformer: {
babelTransformerPath: require.resolve("react-native-svg-transformer")
},
resolver: {
assetExts: assetExts.filter(ext => ext !== "svg"),
sourceExts: [...sourceExts, "svg"]
}
};
})();

## FAZENDO LOGIN COM A GOOGLE IREMOS NA DOC DO EXPO

Autenticação
O Expo pode ser usado para fazer login em muitos provedores populares no iOS, Android e web! A maioria desses guias utiliza a AuthSessionAPI JS pura , consulte esses documentos para obter mais informações sobre a API.
Aqui estão algumas regras
https://docs.expo.dev/guides/authentication/

\*\* VAMOS UTILIZAR UM TIPO DE CONEXÃO CHAMADA O Auth que com o tipo de conexao que noS permite fazer autheticaçao com a GOOGLE OU COM A APPLE PARA OBETER AS INFORMAÇÃOES DO USUARIO EXEMPLEO "nome, email, avatar ....."

\*\*NO CASO DA GOOGLE PRECISAMOS CRIAR UM APLICATIVO DENTRO DO CTP => CLOUD PLATORFORM PARA PEGAMOS ALGUMAS KEY QUE IREMOS PRECISAR PARA AUTHENTICA COM SEVIRDO DA GOOGLE
https://console.cloud.google.com/apis/credentials?pli=1

Cliente OAuth criado
A ID do cliente e o secret estão sempre disponíveis em "Credenciais" na página "APIs e serviços".
O OAuth é limitado a 100 logins de escopo confidencial até a verificação da tela de consentimento do OAuth. O processo de verificação pode levar vários dias.
669694730873-6hrql529g0523db9j60e0km80654tbbg.apps.googleusercontent.com
Seu ID de cliente
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

**\*\***documentaçao de authenticacao
https://developers.google.com/identity/protocols/oauth2

\*\*\*precisa instalar essa dependencia
expo-randomé uma dependência de mesmo nível e deve ser instalada junto expo-auth-session.

## PARA LIRDAMOS COM DADOS SENSIVEIS DE NOSSA APLICACAO IREMOS USAR A LIB DO BABEL

\*\*yarn add babel-plugin-inline-dotenv
babel-plugin-inline-dotenv
Carregue seu .envarquivo e substitua process.env.MY_VARIABLEpelo valor que você definiu.
Na verdade, ele substitui process.env.MY_VARIABLEpor:
