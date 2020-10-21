import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'account-clock',
  description: 'Spill the tea or drink',
  cards: [
    (players) => {
      const player = getRandomPlayer(players);
      return  `${player} say, "In my search history, there is...", next person adds a search. Each player repeats all the searches and adds on a new search. first to fail take ${getRandomSip()} sips`;
    },
    () =>
      `First person to pull out a condom, give out ${getRandomSip()} sips (${randomJoke})`,
  ]
}


function getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}


const condomJokes = [
  "Cover your stump before you hump",
  "Dont be silly, protect your willy",
  "Dont be a loner, cover your boner",
  "You cant go wrong if you shield your dong",
  "If you slip between her thighs, be sure to condomize",
  "Sex is cleaner with a packaged wiener",
  "If you cant shield your rocket, leave it in your pocket",
  "While your undressing Venus, dress up your penis",
  "Even If shes eager, protect her beaver",
  "Cover that lumber before you pump her",
];

const randomJoke = condomJokes[Math.floor(Math.random()*condomJokes.length)];
