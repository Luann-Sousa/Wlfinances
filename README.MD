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
