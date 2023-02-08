export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true%22");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true%22");
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true%22");
  //meu new audio é uma função contrutora que retorna um valor para o meu buttonPress
  //É a mesma coisa que um elemento html

  bgAudio.loop

  function pressButton() {
    buttonPressAudio.play();
  };

  function timerEnd() {
    kitchenTimer.play();
  };

  return {
    pressButton,
    timerEnd,
    bgAudio,
  };
};