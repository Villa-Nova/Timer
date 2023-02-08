import Sounds from "./sounds.js"

export default function Timer({//Essas são as dependências em forma de objeto que a Timer no index precisa para a timer.
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut;//Não faz mais sentido essa const ficar no index.
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {
    //Se newMinutes for undefined então(?) coloque minutes se não(:) newMinutes mesmo.
    newMinutes = newMinutes === undefined ? minutes : newMinutes//Isso é um ternario, funciona como if
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  };
  
  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  };
  
  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      
      updateDisplay(minutes, 0);
  
      if (minutes <= 0 && seconds <= 0) {
        resetControls();
        updateDisplay();
        Sounds().timerEnd();//Se uma função esta retornando um obj diretamente, Eu posso executar esse obj
        return
      };
      
      if(seconds <= 0) {
        seconds = 60
        --minutes
      };
  
      updateDisplay(minutes, String(seconds - 1));
      
      countdown();
    }, 1000);
  };

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  };

  function hold() {
    clearTimeout(timerTimeOut);
    //clearTimeout espera por um id numérico.
    //Ele pega o ultimo numero da minha timerTimeOut e segura ele, por isso que a aplicação pausa.
  };

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  };
};

/* ------------------------------------------------------------------------------------------------------------------------------------ */
//Minha função Timer é uma factury.
//Factury é uma função que faz o retorno de um object
//Poderia exportar só com um export, porém teria que usar dps o "export {Timer}", pois viraria um export name.

//Criei um object no return
//Quando a propriedade tem o mesmo nome do valor eu coloco somente a propriedade (shortrand propert object).
//O return n exige q eu crie uma variavel e atribua a ela o meu object, basta eu criar o escopo do objeto e retornalo.