import generalDeck from "./general-deck";
import { getRandomPlayer, getRandomSip } from "./utils";

export default {
  icon: "dice-6",
  description: "Good party starter",
  cards: [
    ...generalDeck,
    () => `If you are playing with an ex, take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} keep walking until the next ${getRandomSip()} cards are completed.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Name car manufacturers. Loser must drink ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} keep standing on one leg for the next 7 cards.`;
    },
    () => `If you have ever made a child cry, take ${getRandomSip()} sips.`,
    () => `If you are a ginger, take ${getRandomSip()} sips.`,
    () =>
      `If you have ever send someone to the hospital, take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Start rhyming words. Loser must drink ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} take a sip for every country you've been to.`;
    },
    () =>
      `If you have ever been on TV or the radio, take ${getRandomSip()} sips.`,
    () => `If you have ever cheated on a test, take ${getRandomSip()} sips.`,
    () => `If you have ever gotten stitches, take ${getRandomSip()} sips.`,
    () =>
      `Take ${getRandomSip()} sips if you have ever accidentally said “I love you” to someone.`,
    () =>
      `Take ${getRandomSip()} sips if you have ever sung karaoke in front of people.`,
      (players) => {
        const player = getRandomPlayer(players);
        return `${player} must speak in high pitch voice for the next ${getRandomSip()} rounds. If forgot take ${getRandomSip()} sips.`;
      },
      (players) => {
        const player = getRandomPlayer(players);
        return `${player} Must make ${getRandomSip()} animal noices in 10 seconds. If task is failed, take ${getRandomSip()} sips.`;
      },
    () => `If your name contains one of these letters "letter-al", take ${getRandomSip()} sips.`,
    () => `If you have shoes on, take ${getRandomSip()} sips.`,
    () => `If you ever got pulled over by the police, take ${getRandomSip()} sips per time you got pulled over, chug saves.`,
    () => `last player that has touch the floor, take ${getRandomSip()} sips.`,
    () => `If you own a dog, take ${getRandomSip()} sips, if you own a cat, give ${getRandomSip()} sips out.`,
    () => `If you own a cat, take ${getRandomSip()} sips, if you own a dog, give ${getRandomSip()} sips out.`,
    () => `If you got red on take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} perform your favorite sex position with the person to the right of you, if they refuse take, ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} name ${getRandomSip()} sex positions, if you cant take ${getRandomSip()} sips.`;
    },
    () => `Take a sip for every piece of clothing you got on.`,
    () => `Everyone is now named the last person they kissed.`,
    () => `Next one to finish their drink, decides who has to chug their drink.`,
    () => `If you got red on take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} take of 3 pieces of clothing, if you refuse take ${getRandomSip() + 4} sips.`;
    },
    () => `For the next ${getRandomSip()} rounds, its not allowed to mention names, take ${getRandomSip()} sip if you fail.`,
    () => `The person or persons with the most exes take ${getRandomSip()} for every ex you have had, chug saves.`,
    () => `The person or persons who has been single for the longest give out ${getRandomSip()} sips.`,
    () => `The oldest person take ${getRandomSip()} sips. (dont forget your bedtime)`,
    () => `The person or persons with the most exes take ${getRandomSip()} sips.`,
    () => `Everyone that is getting laid tonight take ${getRandomSip()} sips.`,
    () => `Everyone that got laid yesterday give ${getRandomSip()} sips out.`,
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} like the first picture on Instagram of the person you last kissed, if you refuse take ${getRandomSip() + 4} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} choose a person to slap your ass, if you refuse take ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Pretend to have a orgasm and give away ${getRandomSip()} sips, if you refuse take ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Show everyone how you normally dance, or finish your drink`;
    },
    () => `Everyone that are open to a threesome give ${getRandomSip()} sips out`,
    () => `Everyone that sleeps naked take ${getRandomSip()} sips`,
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Choose two other players and kiss each other at the same time, if one player refuses take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Choose a dance opponent. The rest of the party will vote, the loser takes ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Which player would you prefer to get into a intimate relationship with your younger sibling, give your new family member ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Post a video on instagram story with @SmashedDrinkingGame showing some love`;
    },
    () => `The player that has had sex with the oldest person give away ${getRandomSip()} sips`,
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Which parts of your body do you shave? take a sip for each body part`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Fill some of everyones drink in a cup and drink it, if you refuse finish your own drink`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Which player dresses the best, give them ${getRandomSip()} sips`;
    },
    () => `those with a bodycount over 5 take ${getRandomSip()} sips`,
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Which player do you think gives the most head, give them ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Bite the ear of the player to your left, if the player refuses take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Post a picture of yourself in a sexy pose on Instagram with #SmashedDrinkingGame ${getRandomSip()} sips`;
    },
    () => `those who have measured therir penis take ${getRandomSip()} sips`,
    () => `Everyone that has been blindfolded during sex take ${getRandomSip()} sips`,
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Name everyone at the party, take a sip for every wrong name you say`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Imitate an animal. The first person to guess it gives out ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Demonstrate your favorite sex position with another player take ${getRandomSip()} sips with them afterwards`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Check which player smells the best, the winner gives out ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Take a sip out of everyones drink, the player with the best drink gives out ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Get up and twerk. Take a sip for each player that is not impressed by your twerking-skills`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Who has the nicest booty, give them ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} If you were to direct a hardcore porn, which two players would you hire? pay them with ${getRandomSip()} sips each`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Which player would you like to see breakdance? if they accept, finish your drink`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Say "Where does the Titanic rest", first one to respond downs their drink with you`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Tell everyone about your worst sexual experience and give out ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Give one of the other players a lap dance`;
    },
    () => `Everyone who has hooked up with someone through a dating app take ${getRandomSip()} sips`,
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Take a body shot on the person to your right`;
    },
    () => `If you have ever fantasized about someone in the room take ${getRandomSip()} sips`,
    () => `The person that can do the most push-ups in a row give out ${getRandomSip() + 4} sips`,

  ],
};
