import generalDeck from "./general-deck";
import { getRandomPlayer, getRandomSip } from "./utils";

export default {
  icon: "dice-6",
  description: "Good party starter",
  cards: [
    ...generalDeck,

    // Player based cards
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} keep walking until the next ${getRandomSip()} cards are completed.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Name alcohol brands. Loser must drink ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Name phone brands. Loser must drink ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Name shoe brands. Loser must drink ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Name capitals on europe. Loser must drink ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} keep standing on one leg for the next ${getRandomSip()} cards.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Start rhyming words (1 word each). Loser must drink ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} take a sip for every country you've been to.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} must speak in high pitch voice for the next ${getRandomSip()} rounds. If you forgot take ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Must make 5 animal noices in 10 seconds. If task is failed, take ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} perform your favorite sex position with the person to the right of you, if they refuse take, ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} name 5 sex positions in 10 seconds, if you cant take ${getRandomSip()} sips.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} like the first picture on Instagram of the person you last kissed, if you refuse take ${
        getRandomSip() + 4
      } sips.`;
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
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Choose a dance opponent. The rest of the party will vote, the loser takes ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Which player would you prefer to get a intimate relationship with your younger sibling, give your new family member ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Post a video on instagram story with @SmashedDrinkingGame showing some love`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Go and like SmashedDrinkingGame on Instagram.`;
    },
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
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Which player do you think is the best at sex, give them ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Bite the ear of the player to your left, if the player refuses take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Post a picture of yourself in a silly pose on Instagram with the caption #SmashedDrinkingGame`;
    },
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
      return `${player} Demonstrate your favorite sex position with another player, take ${getRandomSip()} sips with them afterwards`;
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
      return `${player} Who has the nicest hair, give them ${getRandomSip()} sips`;
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
      return `${player} Tell everyone about your worst sexual experience and give out ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Give one of the other players a lap dance, take ${getRandomSip()} sips to find the courage`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Take a body shot on the person to your right, if they refuse take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} choose the next song, those who think it sucks, take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `The person to the left of ${player}, take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Name as many Olympic Gold Medal Winners as you can, give out the same amount of sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} sips to the player you know the least`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name synonyms for the word 'penis' first person to repeat an answer take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name synonyms for the word 'butt' first person to repeat an answer take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name synonyms for the word 'breast' first person to repeat an answer take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} is now DJ and can skip this song and queue the next ${getRandomSip()} songs`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} is now DJ and can skip this song and queue the next ${getRandomSip()} songs`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Tag, you're it! The person who is "it" touches a random player who drinks and is now "it" ${player}, you're "it".`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, choose something you like, those who dont like it have to take ${getRandomSip()} sips. You take ${getRandomSip()} sips if nobody drinks`;
    },
    // 50
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, choose something you like, those who dont like it have to take ${getRandomSip()} sips. You take ${getRandomSip()} sips if nobody drinks`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `FINISH THE WORD.. Starting with ${player}, say a letter, the next person adds a letter, the person who finish the word takes ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `FINISH THE WORD.. Starting with ${player}, say a letter, the next person adds a letter, the person who finish the word takes ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, if you got home before 5 in the morning on your last night out take ${getRandomSip()} sips, if not give out ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name movies that doesnt have a happy ending, first person to repeat an answer take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name movies about the end of the world, first person to repeat an answer take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name celebrities with sex-tapes, first person to repeat an answer take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name sports without a ball, first person to repeat an answer take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name famous criminals, first person to repeat an answer take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} sips to the player you think is academically the smartest.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} sips to the player you think is the kindest.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} sips to the most beautilful player (show em some love <3 )`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} sips to a player who has less to drink than you... if you can't finish your drink (Can't be that much... CHUG! CHUG! CHUG!)`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} choose between giving out ${getRandomSip()} sips to the shortest player, or 1 sip to everyone`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, you just turned 76, hide your teeth for the next ${getRandomSip()} rounds, drink if your fake teeth falls out`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, Take a sip out of your drink without using your arms or hands (The drinking gods believes in you)`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, take as many sips as there are boobs in the room, 1 boob = 1 sip (And stop staring dude..)`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Go around the room and spell the first name of each player, ${player}, you're up! the first person to fail takes ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name things you get fired for, first person to say something the rest don't agree with take ${getRandomSip()} sips`;
    },
    // 70
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name things to do when bored, first person to say something the rest don't agree with take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} say, "In my search history, there is...", next person adds a search. Each player repeats all the searches and adds on a new search. first to fail take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} say, "In my grandmas closet, there is...", next person adds a item. Each player repeats all the items and adds on a new item. first to fail take ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} sips to a player who is more tan than you... if you can't finish your drink`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, In the name of love, give out ${getRandomSip()} sips to a player you like the most`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, give out as many sips as there are single people around the table`;
    },
    // 76
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, mine a scene from a movie, first person to guess the movie gives out ${getRandomSip()} sips`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, Name ${getRandomSip() + 4} states in the US, take ${getRandomSip()} sips if you cant`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, Name ${getRandomSip() + 4} currencies, take ${getRandomSip()} sips if you cant`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, Read the last dm you recieved out loud, take ${getRandomSip()} sips if you refuse`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, Drink as many sips as there are years between you and the youngest player at the table`;
    },



    // All players cards
    () => `If you are playing with an ex, take ${getRandomSip()} sips.`,
    () => `If you have ever fantasized about someone in the room take ${getRandomSip()} sips`,
    () => `The person that can do the most push-ups in a row give out ${getRandomSip() + 2} sips`,
    () => `Everyone who has hooked up with someone through a dating app take ${getRandomSip()} sips`,
    () => `those who have measured therir penis take ${getRandomSip()} sips`,
    () => `Everyone that has been blindfolded during sex take ${getRandomSip()} sips`,
    () => `those with a bodycount over 5 take ${getRandomSip()} sips`,
    () => `The player that has had sex with the oldest person give away ${getRandomSip()} sips`,
    () => `Everyone that sleeps naked take ${getRandomSip()} sips`,
    () => `For the next ${getRandomSip()} rounds, its not allowed to mention names, take ${getRandomSip()} sip if you fail.`,
    () => `The person or persons with the most exes take ${getRandomSip()} sips`,
    () => `The person or persons who has been single for the longest, give out ${getRandomSip()} sips.`,
    () => `The oldest person take ${getRandomSip()} sips. (dont forget your bedtime)`,
    () => `Everyone that is getting laid tonight take ${getRandomSip()} sips. ( ${safeSexJoke} )`,
    () => `Everyone that got laid yesterday give ${getRandomSip()} sips out. ( ${safeSexJoke} )`,
    () => `Take a sip for every piece of clothing you got on.`,
    () => `Everyone is now named the last person they kissed.`,
    () => `Next one to finish their drink, decides who has to chug their drink.`,
    () => `If you got red on take ${getRandomSip()} sips.`,
    () => `If your name contains one of these letters "${getRandomString(1)}-${getRandomString(1)}-${getRandomString(1)}-${getRandomString(1)}-${getRandomString(1)}", take ${getRandomSip()} sips.`,
    () => `If you have shoes on, take ${getRandomSip()} sips.`,
    () => `If you ever got pulled over by the police, take ${getRandomSip()} sips per time you got pulled over, chug saves.`,
    () => `last player that has touch their drink, take ${getRandomSip()} sips. (Everyone else drinks too since your drink is already in your hand CHEERS!) )`,
    () => `If you own a dog, give ${getRandomSip()} sips, if you own a cat, take ${getRandomSip()} sips out.`,
    () => `If you got red on take ${getRandomSip()} sips.`,
    () => `If you have ever been on TV or the radio, take ${getRandomSip()} sips.`,
    () => `If you have ever cheated on a test, take ${getRandomSip()} sips.`,
    () => `If you have ever gotten stitches, take ${getRandomSip()} sips.`,
    () => `Take ${getRandomSip()} sips if you have ever accidentally said “I love you” to someone.`,
    () => `Take ${getRandomSip()} sips if you have ever sung karaoke in front of people.`,
    () => `If you have ever made a child cry, take ${getRandomSip()} sips.`,
    () => `If you are a ginger, take ${getRandomSip()} sips.`,
    () => `If you have ever send someone to the hospital, take ${getRandomSip()} sips.`,
    () => `People with blue eyes, take ${getRandomSip()} sips.`,
    () => `If you have ever said "new year, new me" and only went to the gym for a week after, take ${getRandomSip()} sips.`,
    () => `Anyone who hasnt played Smashed before tonight, take ${getRandomSip()} sips. (CHEEEERS!!)`,
    () => `The person who looks the fittest, take ${getRandomSip()} sips. (damn show off! ;) )`,
    () => `Whoever suggested to play smashed, give out ${getRandomSip()} sips. (Excellent idea!)`,
    () => `If you have friends who prefer to call instead of text, give out ${getRandomSip()} sips. (other players must know these people)`,
    () => `BOTTOMS UP!!!, if you have an ${getRandomString(1)} in your first name, down your drink`,
    () => `If you have an ${getRandomString(1)} in your last name, give out ${getRandomSip()} sips`,
    () => `The last person who went to the bathroom, take ${getRandomSip()} sips.`,
    () => `The first person to find any white object, give out ${getRandomSip()} sips. (Can't be a shirt.. dont be boring)`,
    () => `Take ${getRandomSip()} sips if, in a restaurant, someone from your table has complained about their food`,
    () => `Drink as many sips as there are f*ckable people in the room ( ${safeSexJoke} )`,
    () => `The last player that have celebrated their birthday, give out ${getRandomSip()} sips. (Happy belated birthday)`,
    () => `Anyone who has given to charity, give out ${getRandomSip()} sips.`,
    () => `Take ${getRandomSip()} sips if you have ever thought that there was a way to find out who peed in the pool`,
    () => `Take ${getRandomSip()} sips if you have ever french-kissed a person of the same gender`,
    () => `Take ${getRandomSip()} sips, if you masturbated in the past 3 days`,
    () => `HANDS UP! Last person with their hands in the air take ${getRandomSip()} sips`,
    () => `Take ${getRandomSip()} sips, if you ever heard a reltive doing the nasty`,
    () => `First person to pull out a condom, give out ${getRandomSip()} sips ( ${safeSexJoke} )`,
    () => `If you were drunk yesterday, take ${getRandomSip()} sips`,
    () => `Anyone wearing black underwear, take ${getRandomSip()} sips`,


    // 129
  ],
};

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

const safeSexJoke = condomJokes[Math.floor(Math.random() * condomJokes.length)];
