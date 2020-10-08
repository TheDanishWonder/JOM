import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'pipe-disconnected',
  description: 'A game for the jocks of the world',
  cards: [
    ...generalDeck,
    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, if you ever got send of during a game, take ${getRandomSip()} sips.`
    },
    () => `if you have ever invaded the field of a sport event, give ${getRandomSip()} sips out.`,
  ]
}