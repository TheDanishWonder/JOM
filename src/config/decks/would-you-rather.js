import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'drama-masks',
  description: 'Good ol would you rather',
  cards: [
    ...generalDeck,
    () => `Would you rather be able to detect any lie you hear or get away with any lie you tell`,
    () => `Would you rather never hear music or loose the ability to read`,
    () => `Would you rather see the world and live in poverty or be rich and live in one place`,
    () => `Would you rather not be able to speak or always say all your thoughts out loud`,
    () => `Would you rather lick a dirty transcan or public bathroom floor`,
    () => `beer or cider`,
    () => `Would you rather be the worst player on a team that always wins or the best player on a team that always looses`,
    () => `would you rather make out with a lot or too little tongue`,
    () => `Would you rather never have to shower again or never have to cut your nails`,
    () => `Would you rather sweat jizz or have period blood as snot`,
    () => `Would you rather get a child from a one night stand or never have kids`,
    () => `Would you rather eat your own poo or a dogs poo`,
    () => `red vine or white vine`,
    () => `Would you rather have sex with or without condom`,
    () => `Would you rather have kinky or doll sex`,
    () => `Would you rather be a the pre-party or the after-party`,
    () => `Would you rather hook up with a kinky 7 or a boring 10`,
    () => `bar or club`,
    () => `Would you rather have sex with or without toys`,
    () => `Would you rather day drink or go out at night`,
    () => `Would you rather have hick-ups or sneeze for the rest of your life`,
    () => `Would you rather tell somebody that you gave them an STD or getting told`,
    () => `Would you rather spit or swallow`,
    () => `Would you rather hook up with a thin or think`,
    () => `looks or personality`,
    () => `gymshark or dad-bud`,
    () => `Would you rather have tits on your back or ass on your stomach`,


  ]
}