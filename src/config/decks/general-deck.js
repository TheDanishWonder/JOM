import { getRandomPlayer, getRandomSip } from './utils'

const generalCards = [
  () => `Buffalo! Anyone drinking with their right hand must take ${getRandomSip()} sips from now on.`,
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} pick a mate. Everytime you drink, so does the other person.`
  },
  (players) => {
    const player1 = getRandomPlayer(players)
    const player2 = getRandomPlayer(players.filter(current => current !== player1))
    return `${player1} your new name is ${player2} and visa versa. Anyone incorrectly using your old name take ${getRandomSip()} sips.`
  },
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} every time ${player} drink you cheer them on and vise versa, for the next ${getRandomSip()} rounds.`
  },
  () => `All the boys in the group, take ${getRandomSip()} sips.`,
  () => `All the girls in the group, take ${getRandomSip()} sips.`,
  () => `Everybody drinks ${getRandomSip()} sips if your fathers name contains the letter "${getRandomString(1)}"`,
  () => `Everybody drinks ${getRandomSip()} sips if your mothers name contains the letter "${getRandomString(1)}"`,
  () => `Everybody drinks ${getRandomSip()} sips if had sex with a person whos name contains the letter "${getRandomString(1)}"`,
  () => `Everybody drinks ${getRandomSip()} sips if you have a colleague whos name contains the letter "${getRandomString(1)}"`,
  () => `Everybody drinks ${getRandomSip()} sips if the person you wanna get down and dirty with name contains the letter "${getRandomString(1)}"`,
]

function getRandomString(length) {
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

export default generalCards
