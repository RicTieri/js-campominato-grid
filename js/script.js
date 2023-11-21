// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

const gameBox = document.getElementById('game_box');
const playButton = document.querySelector('button');

playButton.addEventListener('click',function (){
  gameBox.innerHTML = ''
  // Ogni cella ha un numero progressivo, da 1 a 100.
  for (let i = 1; i <= 100; i++) {
    gameBox.appendChild(getDivWithClassAndText('game_card', i));
  }
})
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
divElement.addEventListener('click')




function getDivWithClassAndText(className, text){
  const divElement = document.createElement('div');
  divElement.classList.add(className);
  divElement.append(text);
  return divElement
}