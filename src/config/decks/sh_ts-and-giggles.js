import generalDeck from "./general-deck";
import { getRandomPlayer, getRandomSip } from "./utils";

export default {
  icon: "dice-6",
  description: "A game for the hell of it",
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
  ],
};
