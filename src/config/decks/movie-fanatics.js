import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'theaters',
  description: 'A game for all movie lovers',
  cards: [
    ...generalDeck,
    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, if you watched Twilight, take ${getRandomSip()} sips.`
    },
    () => `Name all the titles in the Fast and Furious serie, if you cant take ${getRandomSip()} sips.`,
  ]
}
