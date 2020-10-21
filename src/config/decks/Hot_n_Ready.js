import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'beer',
  description: 'Bros before hoes',
  cards: [
    ...generalDeck,


    (players) => {
        const player = getRandomPlayer(players);
        return `${player} take off 3 pieces of clothing, if you refuse take ${getRandomSip() + 4} sips.`;
      },
      (players) => {
        const player = getRandomPlayer(players);
        return `${player} Choose two other players and kiss each other at the same time, if one player refuses take ${getRandomSip()} sips`;
      },

    () => `Everyone that is getting laid tonight take ${getRandomSip()} sips.`,
    () => `Everyone that are open to a threesome give ${getRandomSip()} sips out`,
  ]
}