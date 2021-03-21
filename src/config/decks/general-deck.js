import { getRandomPlayer, getRandomSip, getRandomNumb } from './utils'

const generalCards = [

  (players) => {
    const player = getRandomPlayer(players)
    return `${player} Queue the next ${getRandomNumb()} songs.`
  },
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} Queue the next ${getRandomNumb()} songs.`
  },
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} Queue the next ${getRandomNumb()} songs.`
  },
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} Queue your favorite party song.`
  },
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} Queue your favorite party song.`
  },
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} if Mambo No.5 have been played tonight give out ${getRandomSip()} . If not, everybody gets ${getRandomSip()}, and queue up this banger.`
  },
    (players) => {
    const player = getRandomPlayer(players)
    return `${player} if Yeah! have been played tonight give out ${getRandomSip()} . If not, everybody gets ${getRandomSip()}, and queue up this banger.`
  },
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} if I Gotta Feeling have been played tonight give out ${getRandomSip()} . If not, everybody drinks, and queue it up, cause i got a feeling...`
  },
  (players) => {
    const player1 = getRandomPlayer(players)
    const player2 = getRandomPlayer(players.filter(current => current !== player1))
    return `${player1} your new name is ${player2} and visa versa. Anyone incorrectly using your old name recieve ${getRandomSip()} .`
  },
  (players) => {
    const player1 = getRandomPlayer(players)
    const player2 = getRandomPlayer(players.filter(current => current !== player1))
    return `${player1} your new name is ${player2} and visa versa. Anyone incorrectly using your old name recieve ${getRandomSip()} .`
  },
  () => `Everybody recieves ${getRandomSip()} if your first name contains the letter "${getRandomString(1)}"`,
  () => `Everybody recieves ${getRandomSip()} if your last name contains the letter "${getRandomString(1)}"`,
  () => `Everybody recieves ${getRandomSip()} if your fathers name contains the letter "${getRandomString(1)}"`,
  () => `Everybody recieves ${getRandomSip()} if your mothers name contains the letter "${getRandomString(1)}"`,
  () => `Everybody recieves ${getRandomSip()} if had sex with a person whos name contains the letter "${getRandomString(1)}"`,
  () => `Everybody recieves ${getRandomSip()} if you have a colleague whos name contains the letter "${getRandomString(1)}"`,
  () => `Everybody recieves ${getRandomSip()} if the person you wanna get down and dirty with name contains the letter "${getRandomString(1)}"`,
  () => `Everybody recieves ${getRandomSip()} if the song playing is from the 2010's`,
  () => `Everybody recieves ${getRandomSip()} if the song playing is from the 00's`,
]

function getRandomString(length) {
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUV";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

export default generalCards
