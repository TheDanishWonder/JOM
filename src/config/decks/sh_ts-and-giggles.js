import { Card } from "react-native-paper";
import generalDeck from "./general-deck";
import { getRandomPlayer, getRandomSip, getRandomNumb } from "./utils";

export default {
  icon: "cards-playing-outline",
  description: "Good party starter",
  cards: [
    ...generalDeck,

    // Player based cards
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} keep walking until the next ${getRandomSip()} have been taken.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Name alcohol brands. Loser must drink ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Name phone brands. Loser must drink ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Name shoe brands. Loser must drink ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Name capitals on europe. Loser must drink ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} keep standing on one leg until the next ${getRandomSip()} have been taken.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Starting with ${player}. Start rhyming words (1 word each). Loser must drink ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} take a sip for every country you've been to.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} must speak in high pitch voice until the next ${getRandomSip()} have been taken. If you forgot take ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} Must make 5 animal noices in 10 seconds. If task is failed, take ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} perform your favorite sex position with the person to the right of you, if they refuse take, ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} name 5 sex positions in 10 seconds, if you cant take ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} like the first picture on Instagram of the person you last kissed, if you refuse take ${
        getRandomSip()
      }.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} choose a person to slap your ass, if you refuse take ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} pretend to have a orgasm and give away ${getRandomSip()}, if you refuse take ${getRandomSip()}.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} show everyone how you normally dance, or finish your drink`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} choose a dance opponent. The rest of the party will vote, the loser takes ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} which player would you prefer to get a intimate relationship with your younger sibling, give your new family member ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} post a video on instagram story with @SmashedDrinkingGame showing some love`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} go and follow SmashedDrinkingGame on Instagram.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, as many people you can convince to go and follow SmashedDrinkingGame on Instagram, as many you can give out`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} which parts of your body do you shave? take a sip for each body part`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} fill some of everyones drink in a cup and drink it, if you refuse finish your own drink`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} which player dresses the best, give them ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} which player do you think is the best at sex, give them ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} bite the ear of the player to your left, if the player refuses take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} post a picture of yourself in a silly pose on Instagram with the caption #SmashedDrinkingGame`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} name everyone at the party, take a sip for every wrong name you say`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} imitate an animal. The first person to guess it gives out ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} demonstrate your favorite sex position with another player, take ${getRandomSip()} with them afterwards`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} check which player smells the best, the winner gives out ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} take a sip out of everyones drink, the player with the best drink gives out ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} get up and twerk. Take a sip for each player that is not impressed by your twerking-skills`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} who has the nicest hair, give them ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} if you were to direct a hardcore porn, which two players would you hire? pay them with ${getRandomSip()} each`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} which player would you like to see breakdance? if they accept, finish your drink`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} tell everyone about your worst sexual experience and give out ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give one of the other players a lap dance, take ${getRandomSip()} to find the courage`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} if they consent, take a body shot on the person to your right, if they refuse take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} choose the next song, those who think it sucks, take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `the person to the left of ${player}, take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} name as many Olympic Gold Medal Winners as you can, give out the same amount of`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} to the player you know the least`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name synonyms for the word 'penis' first person to repeat an answer take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name synonyms for the word 'butt' first person to repeat an answer take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name synonyms for the word 'breast' first person to repeat an answer take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} is now DJ and can skip this song and queue the next ${getRandomNumb()} songs`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} is now DJ and can skip this song and queue the next ${getRandomNumb()} songs`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Tag, you're it! The person who is "it" touches a random player who drinks and is now "it" ${player}, you're "it".`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, choose something you like, those who dont like it have to take ${getRandomSip()}. You take ${getRandomSip()} if nobody drinks`;
    },
    // 50
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, choose something you like, those who dont like it have to take ${getRandomSip()}. You take ${getRandomSip()} if nobody drinks`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `FINISH THE WORD.. Starting with ${player}, say a letter, the next person adds a letter, the person who finish the word takes ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `FINISH THE WORD.. Starting with ${player}, say a letter, the next person adds a letter, the person who finish the word takes ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, if you got home before 5 in the morning on your last night out take ${getRandomSip()}, if not give out ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name movies that doesnt have a happy ending, first person to repeat an answer take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name movies about the end of the world, first person to repeat an answer take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name celebrities with sex-tapes, first person to repeat an answer take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name sports without a ball, first person to repeat an answer take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name famous criminals, first person to repeat an answer take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} to the player you think is academically the smartest.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} to the player you think is the kindest.`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} to the most beautilful player (show em some love <3 )`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} to a player who has less to drink than you... if you can't finish your drink (Can't be that much... CHUG! CHUG! CHUG!)`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} choose between giving out ${getRandomSip()} to the shortest player, or 1 sip to everyone`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, you just turned 76, hide your teeth for the next ${getRandomNumb()} rounds, drink if your fake teeth falls out`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, Take a sip out of your drink without using your arms or hands (The drinking gods believes in you)`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, take as many as there are boobs in the room, 1 boob = 1 sip (And stop staring dude..)`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `Go around the room and spell the first name of each player, ${player}, you're up! the first person to fail takes ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name things you get fired for, first person to say something the rest don't agree with take ${getRandomSip()}`;
    },
    // 70
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name things to do when bored, first person to say something the rest don't agree with take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `starting with ${player} name popular rappers, first person to repeat an answer or cant come up with one take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} say, "In my search history, there is...", next person adds a search. Each player repeats all the searches and adds on a new search. first to fail take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} say, "In my grandmas closet, there is...", next person adds a item. Each player repeats all the items and adds on a new item. first to fail take ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player} give out ${getRandomSip()} to a player who is more tan than you... if you can't finish your drink`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, in the name of love, give out ${getRandomSip()} to a player you like the most`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, give out as many as there are single people around the table`;
    },
    // 76
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, mine a scene from a movie, first person to guess the movie gives out ${getRandomSip()}`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, name ${getRandomNumb() + 4} states in the US, take ${getRandomSip()} if you cant`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, name ${getRandomNumb() + 4} currencies, take ${getRandomSip()} if you cant`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, read the last dm you recieved out loud, take ${getRandomSip()} if you refuse`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, drink as many as there are years between you and the youngest player at the table`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, what’s the most embarrasing thing you’ve done while drunk? Everyone cheers to embarrasing stories`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, what’s something you’ve done while drunk that you would never do sober? Everyone cheers to drunk-us having fun when sober-us dont want to`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, how many people in the room would you be willing to kiss? Take the amount of people in and continue playing`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, what’s your favorite drink? Take as many as there are letters in the first word`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, if you HAD to play matchmaker, which two players would make a good couple? Everyone cheers for the newly weds`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, do you have a hidden talent? If you do, have someone video it and post it to your story with the hashtag #smasheddrinkinggame, drink ${getRandomSip()} if you dont`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, try to put your whole fist in your mouth, drink ${getRandomSip()} if you cant`;
    },
    // 90
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, pole dance with an imaginary pole for the next ${getRandomNumb()} rounds, drink ${getRandomSip()} if you forget to dance`;
    },
    (players) => {
      const player = getRandomPlayer(players);
      return `${player}, if you can name ${getRandomNumb()} Justin Bieber songs, give out ${getRandomSip()} elsewhere drink them yourself`;
    },




    // All players cards
    () => `If you are playing with an ex, take ${getRandomSip()}.`,
    () => `If you have ever fantasized about someone in the room take ${getRandomSip()}`,
    () => `The person that can do the most push-ups in a row give out ${getRandomSip() + 2}`,
    () => `Everyone who has hooked up with someone through a dating app take ${getRandomSip()}`,
    () => `those who have measured therir penis take ${getRandomSip()}`,
    () => `Everyone that has been blindfolded during sex take ${getRandomSip()}`,
    () => `those with a bodycount over 5 take ${getRandomSip()}`,
    () => `The player that has had sex with the oldest person give away ${getRandomSip()}`,
    () => `Everyone that sleeps naked take ${getRandomSip()}`,
    () => `For the next ${getRandomSip()} rounds, its not allowed to mention names, take ${getRandomSip()} sip if you fail.`,
    () => `The person or persons with the most exes take ${getRandomSip()}`,
    () => `The person or persons who has been single for the longest, give out ${getRandomSip()}.`,
    () => `The oldest person take ${getRandomSip()}. (dont forget your bedtime)`,
    () => `Everyone that is getting laid tonight take ${getRandomSip()}. ( ${safeSexJoke} )`,
    () => `Everyone that got laid yesterday give ${getRandomSip()} out. ( ${safeSexJoke} )`,
    () => `Take a sip for every piece of clothing you got on.`,
    () => `Everyone is now named the last person they kissed.`,
    () => `Next one to finish their drink, decides who has to chug their drink.`,
    () => `If you got red on take ${getRandomSip()}.`,
    () => `If your name contains one of these letters "${getRandomString(1)}-${getRandomString(1)}-${getRandomString(1)}-${getRandomString(1)}-${getRandomString(1)}", take ${getRandomSip()}.`,
    () => `If you have shoes on, take ${getRandomSip()}.`,
    () => `If you ever got pulled over by the police, take ${getRandomSip()} per time you got pulled over, chug saves.`,
    () => `last player that has touch their drink, take ${getRandomSip()}. (Everyone else drinks too since your drink is already in your hand CHEERS!) )`,
    () => `If you own a dog, give ${getRandomSip()}, if you own a cat, take ${getRandomSip()} out.`,
    () => `If you got red on take ${getRandomSip()}.`,
    () => `If you have ever been on TV or the radio, take ${getRandomSip()}.`,
    () => `If you have ever cheated on a test, take ${getRandomSip()}.`,
    () => `If you have ever gotten stitches, take ${getRandomSip()}.`,
    () => `Take ${getRandomSip()} if you have ever accidentally said “I love you” to someone.`,
    () => `Take ${getRandomSip()} if you have ever sung karaoke in front of people.`,
    () => `If you have ever made a child cry, take ${getRandomSip()}.`,
    () => `If you are a ginger, take ${getRandomSip()}.`,
    () => `If you have ever send someone to the hospital, take ${getRandomSip()}.`,
    () => `People with blue eyes, take ${getRandomSip()}.`,
    () => `If you have ever said "new year, new me" and only went to the gym for a week after, take ${getRandomSip()}.`,
    () => `Anyone who hasnt played Smashed before tonight, take ${getRandomSip()}. (CHEEEERS!!)`,
    () => `The person who looks the fittest, take ${getRandomSip()}. (damn show off! ;) )`,
    () => `Whoever suggested to play smashed, give out ${getRandomSip()}. (Excellent idea!)`,
    () => `If you have friends who prefer to call instead of text, give out ${getRandomSip()}. (other players must know these people)`,
    () => `BOTTOMS UP!!! If you have an ${getRandomString(1)} in your first name, down your drink`,
    () => `If you have an ${getRandomString(1)} in your last name, give out ${getRandomSip()}`,
    () => `The last person who went to the bathroom, take ${getRandomSip()}.`,
    () => `The first person to find any white object, give out ${getRandomSip()}. (Can't be a shirt.. dont be boring)`,
    () => `Take ${getRandomSip()} if, in a restaurant, someone from your table has complained about their food`,
    () => `Drink as many as there are f*ckable people in the room ( ${safeSexJoke} )`,
    () => `The last player that have celebrated their birthday, give out ${getRandomSip()}. (Happy belated birthday)`,
    () => `Anyone who has given to charity, give out ${getRandomSip()}.`,
    () => `Take ${getRandomSip()} if you have ever thought that there was a way to find out who peed in the pool`,
    () => `Take ${getRandomSip()} if you have ever french-kissed a person of the same gender`,
    () => `Take ${getRandomSip()}, if you masturbated in the past 3 days`,
    () => `HANDS UP! Last person with their hands in the air take ${getRandomSip()}`,
    () => `Take ${getRandomSip()}, if you ever heard a reltive doing the nasty`,
    () => `First person to pull out a condom, give out ${getRandomSip()} ( ${safeSexJoke} )`,
    () => `If you were drunk yesterday, take ${getRandomSip()}`,
    () => `Anyone wearing black underwear, take ${getRandomSip()}`,
    () => `CULTURAL TIME!!! the player that have been to the museum most recently, give out ${getRandomSip()}`,
    () => `If you have ever told a child that Santa Claus doesnt exist, take ${getRandomSip()}`,
    () => `If you are planning on getting drunk tonight, take ${getRandomSip()}`,
    () => `Anyone that is under 24, take ${getRandomSip()}`,
    () => `Anyone that are currently member of a gym, take ${getRandomSip()}`,

    
    // 54

    // 144
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
