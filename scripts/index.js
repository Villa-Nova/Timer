//DOM: Document Object Model
//A DOM é uma programação direcionada para eventos. Event-driven
/*
- Programação Imperativa: Maneira de pensar que todo programador tem no começo. Consiste em você dar ordens passo a passo do que vc está programando e como vai ser realizado.
- Programção Declartiva: Maneira mais avançada onde você não fala o passo a passo, só ordena que deve acontecer x.
    React é mais declartivo.
*/
//Quando eu escrevo play. tudo que aparece em azul são propriedades e em roxo são funcionalidades
//Quando uso o classlist eu n preciso colocar o ponto na classe que vou add pois ele já sabe q se trata de uma classe.

//Refatorar: organizar melhor o seu código. Mudar o código para deixar mais legível e performático se alterar a funcionalidade.

/* 
- Formula: String().padStart(Number, "String");
- Transformei em string para acessar a função padddingStart. Existe o padEnd que colocaria o zero no fim.
- O primeiro numero é quantas coisas eu quero ver, e o segundo é oq eu quero q ele mostre.
- trabalha com tempo, dps de x tempo ele executa a callback
- primeira propriedade é uma function e a segunda é o tempo que ele vai demorar pra executar.
- funciona em milessegundos. 1000 é um. 
*/

//TextContent é uma propriedade que faz basicamente a mesma coisa que innerText e innerHTML(Os 3 tem suas diferenças).
//Essa mudança é possivel pois ele é um elemento html, sendo assim é um objeto para a Dom, contendo propriedades como qualquer outro.
//Tbm posso usar essas tres propriedes para verificar o conteudo no devtools.

/* 
- setTimeOut no js serve para executar uma função callback dps de um tempo que eu determinei.
- essa função trabalha com milessegundos, ent 1000 vale 1.
- essa função me retorna um numero, então é do tipo number.
*/

//recurção, é quando uma função chama ela mesma, igual eu fiz com o countdown

//Quando uma função acha um retorno vazio ela para instantaneamente

//EcmaScript - 2015 ES6 modules

/* Traduções */
//countdown = contagem regressiva
//timerTimeOut = tempo limite do cronômetro
//factury = Fabrica

/* ------------------------------------------------------------------------------------------------------------------------------------ */
import Controls from "./controls.js";
import Timer from "./timer.js"
import Sounds from "./sounds.js";
import Events from "./events.js";
import { elements } from "./elements.js";

const {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} = elements;//Isso é uma desestruturação de elemento, eu só coloco dentro dessa chave oq eu quero usar

//Modules
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,//Eu redefini o nome no meu module Controls, de resetControls para reset então coloco ele aq para usar no timer sem mudar o nome de la ou criar uma nova fabrica lá
});
//Aq eu realizo a minha injeção de dependência.
//executo a função Timer que por sua vez está recebendo um objeto.
//Esse objeto são os parametro(dependências) que a Timer precisa para funcionar.
//Timer foi atribuida a timer.

const sound = Sounds();

const event = Events({
  controls,
  timer,
  sound,
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff
});