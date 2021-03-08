import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'pipe-disconnected',
  description: 'Do you know your Disney?',
  cards: [
    () =>
      "Which kind of animal is Kala, who takes care of the little Tarzan?, Answer: Gorilla",
    () =>
      "Which disney cartoon is the only one to take place in Australia?, Answer: The Rescuers Down Under",
    () =>
      "What does WALL-E's abbreviation 'LL' stands for?, Answer: Load Lifter",
    () =>
      "Which original disney character has starred in a movie about Adolf Hitler?, Answer: Donald Duck",
    () => "Which kind of animal is Goofy?, Answer: Dog",
    () =>
      "Which alias does Aladdin use when Genie turns him into a prince, Answer: Prins Ali Ababwa",
    () => "Which car model is Sally from Cars?, Answer: Porche Carrera",
    () =>
      "Which Rock'n'Roll classic, has got its name after the road, that runs through the town in Cars?, Answer: Route 66",
    () =>
      "Who is the only disney princess that isnt actually royalty?, Answer: Mulan",
    () =>
      "What relation does Prince Caspian and Miraz have?, Answer: Miraz is Caspians Uncle",
    () =>
      "Who is the only disney princess, that was inspired by an actual person?, Answer: Pocahonatas",
    () => "Which capital does Remy see as 'My City'?, Answer: Paris",
    () =>
      "What was the first Mickey Mouse cartoon to be produced in color?, Answer: The Band Concert",
    () => "What does Pumba means in Swahili?, Answer: Dusty",
    () =>
      "In 1929 Mickey Mouse spoke his first words, what were they?, Answer: Hot Dogs",
    () =>
      "True or False, Mickey Mouse was not the first cartoon to recieve a star on the Holly Wood hall of fame?, Answer: false",
    () => "What is Mickey Mouse sisters name?, Answer: Amelia Field Mouse",
    () =>
      "What does Koda do when Kenai tells him not to speak?, Answer: He sings",
    () =>
      "Who was the only disney main character, that didnt speak throughout the entire movie?, Answer: Dumbo",
    () =>
      "What school did the characters of High School Musical attend?, Answer: East High",
    () => "What was the name of Maleficents pet raven?, Answer: Diablo",
    () =>
      "What was the name of Ursulas two pet eels?, Answer: Flotsam and Jetsam",
    () =>
      "How many daugthers king triton have in The Little Mermaid?, Answer: 7",
    () =>
      "How many doohinkeys does arial have in the song 'Part of your world'?, Answer: 40 doohinkeys",
    () =>
      "What fraternity did Mike Wazowski become a member of in Monsters University?, Answer: Oozma Kappa",
    () =>
      "What was the name of the city where the movie Monsters Inc took place?, Answer: Monstropolis",
    () => "True or false, Jessie actually to Andy's mom?, Answer: True",
    () =>
      "Which pizza brand shows in Disney Pixar films?, Answer: Pizza Planet",
    () => "what is there 6.469.952 of in 101 Dalmatines?, Answer: spots",
    () =>
      "What kind of dinosaur was Arlo in the movie 'The Good Dinosaur'?, Answer: Apatosaurus",
    () =>
      "In Monsters Inc what does the code '23-19' means??, Answer: 'W-S' (White Sock)",
    () =>
      "What does Mary Poppins needs every second tuesday?, Answer: A day off",
    () =>
      "What is the name of Reilys imaginary friend in Inside Out?, Answer: Bing Bong",
    () =>
      "What emotions potrait in Reilys mind in the movie 'Inside Out'?, Answer: Anger, Sadness, Joy, Disgust, Fear",
    () =>
      "What is Winnie the Poo proud to be?, Answer: Fat (Poo quote 'I'm short, fat and proud of that')",
    () =>
      "What was the name of Marlins wife in the movie finding Nemo?, Answer: coral",
    () =>
      "In which other Pixar movie does the WALL-E company 'Buy'n'Large' make an appearance?, Answer: Toy Story 3 (As the brand of batteries for Buzz)",
    () => "Who is the youngest Disney princess?, Answer: Snow White (14)",
    () => "Which Disney princess has a tattoo?, Answer: Pocahontas",
    () =>
      "In 'Wreck it Ralf' what is the name of game to which Vanellope Von Schweetz belongs?, Answer: Sugar Rush",
    () => "Name Goofy's son?, Answer: Maximilian Goof (or Max for short)",
    () => "How many fingers does Mickey Mouse have?, Answer: 4 fingers",
    () =>
      "Name the seven dwafs?, Answer: Duc, Grumpy, Sleepy, Happy, Bashful, Sneezy, Dupy",
    () => "What year did Disneyland open? Answer: 1955",
    () => "What is the name of Wendy’s dog in Peter Pan? Answer: Nana",
    () => "Who trained Hercules to be a hero? Answer: Philoctetes/Phil",
    () =>
      "What is the name of the toy store in Toy Story 2? Answer: Al’s Toy Barn",
    () =>
      "How many brothers does Prince Hans of the Southern Isles have in Frozen? Answer: 12",
    () =>
      "What are the names of Cinderella’s stepsisters? Answer: Anastasia and Drizella",
    () =>
      "What are the names of Hades minions in Hercules? Answer: Pain and Panic",
    () =>
      "Where does Mike Wazowski take his girlfriend Celia for her birthday dinner in Monsters, Inc.? Answer: Harryhausen’s",
    () =>
      "What is the name of the castle in Shanghai Disneyland Park? Answer: The Enchanted Storybook Castle",
    () => "Who is Mufasa’s trusted advisor in The Lion King? Answer: Zazu",
    () => "Who is the fashion designer in The Incredibles? Answer: Edna Mode",
    () =>
      "Which Disney Princess attended Elsa’s coronation day in Arendelle? Answer: Rapunzel",
    () =>
      "What is the name of Belle’s father in Beauty and the Beast? Answer: Maurice",
    () => "Who serves a Pinocchio’s conscience? Answer: Jiminy Cricket",
    () =>
      "What’s the name of the circus in the 1941 animated film Dumbo? Answer: WDP Circus (reference to Walt Disney Productions)",
    () => "What was the first Pixar movie? Answer: Toy Story",
    () => "How old is Crush in Finding Nemo? Answer: 150 (and still young!)",
    () =>
      "Emperor Kuzco turns into what animal in The Emperor’s New Groove? Answer: Llama",
    () =>
      "Who is Remy’s culinary hero in Ratatouille? Answer: Chef Auguste Gusteau",
    () =>
      "Pongo and Perdita originally had how many puppies in 101 Dalmatians? Answer: 15",
    () => "What is Tarzan’s adopted mother’s name? Answer: Kala",
    () =>
      "What are the three mountains in Magic Kingdom? Answer: Space Mountain, Splash Mountain, and Big Thunder Railroad Mountain",
    () => "Rapunzel’s chameleon in Tangled is called what? Answer: Pascal",
    () => "Who said: “Fish are friends not food”? Answer: Bruce",
    () =>
      "All you need is a little faith, trust, and what else? Answer: Pixie dust",
    () => "Which Disney character sings “Kiss the Girl”? Answer: Sebastian",
    () => "What were Mickey Mouse’s first spoken words ever? Answer: Hot dog!",
    () =>
      "What name does Mulan pick for herself while pretending to be a man? Answer: Ping",
    () =>
      "Duchess is a mother to how many kittens in The Aristocats? Answer: Three (Marie, Berlioz, and Toulouse)",
    () => "Who is Miguel’s idol in Coco? Answer: Ernesto de la Cruz",
    () => "How many Muses are in Hercules? Answer: Five",
    () =>
      "What is the name of Prince Eric’s dog in The Little Mermaid? Answer: Max",
    () => "The Princess and the Frog is set in which city? Answer: New Orleans",
    () =>
      "Who said: “It’s kind of fun to do the impossible”? Answer: Walt Disney",
    () =>
      "Mowgli was raised by what animals in The Jungle Book? Answer: Wolves",
    () =>
      "Who was the first cartoon character to get a star on the Hollywood Walk of Fame? Answer: Mickey Mouse",
    () =>
      "What is the name of the Italian restaurant where Lady and the Tramp share spaghetti? Answer: Tony’s Restaurant",
    () => "How old is Meredith Blake in 1998’s The Parent Trap? Answer: 26",
    () =>
      "What fireworks show replaced Wishes in 2017? Answer: Happily Ever After",
    () => " Which Disney character sings “How Far I’ll Go”? Answer: Moana",
    () =>
      "What are the names of the little fox and the hound from 1981’s The Fox and the Hound? Answer: Tod (fox) and Copper (hound dog)",
    () =>
      "Elizabeth Swann tells the pirates in Pirates of the Caribbean that her last name is what? Answer: Turner",
    () => "What is the name of Simba and Nala’s daughter? Answer: Kiara",
    () =>
      "Quasimodo was the bell-ringer of which famous cathedral? Answer: Notre Dame",
    () =>
      "Which planet do guests visit in Star Wars: Galaxy’s Edge? Answer: Batuu",
    () =>
      "What are the names of the Three Good Fairies in Sleeping Beauty? Answer: Flora, Fauna and Merryweather",
    () => "Which classic movie is Wall-E a fan of? Answer: Hello, Dolly!",
    () => "Who was the first black Disney princess? Answer: Princess Tiana",
    () =>
      "What’s the name of the daycare that Andy’s toys end up at in Toy Story 3? Answer: Sunnyside",
    () =>
      "Disney introduced its first animated openly gay character in which movie? Answer: Onward",
    () => "What was Nemo’s mother’s name? Answer: Coral",
    () => "Which character tells Buzz that he’s his father? Answer: Zurg",
    () =>
      "What was the first animated film to earn a Best Picture nomination? Answer: Beauty and the Beast",
    () =>
      "What name did Ursula go by when she took human form? Answer: Vanessa",
    () =>
      "Russell belongs to which scouting organization in Up? Answer: The Wilderness Explorers",
    () =>
      "What was the name of Jessie’s original owner in Toy Story 2? Answer: Emily",
    () =>
      "Who said: “The past can hurt. But the way I see it, you can either run from it or learn from it” ? Answer: Rafiki",
    () => "Who was Geppetto’s pet in Pinocchio? Answer: Figaro",
    () => "Who was Experiment 626? Answer: Stitch",
    () => "Princess Jasmine’s tiger is named what? Answer: Rajah",
    () => "What is the name of Pixar’s lamp mascot? Answer: Luxo Jr",
    () =>
      "What is the “cutest little town” in Carburetor County? Answer: Radiator Springs",
    () =>
      "How many theme parks are in Walt Disney World? Answer: Four (Magic Kingdom, Epcot, Animal Kingdom, and Hollywood Studios)",
    () =>
      "What are the names of Cruella’s henchmen in 101 Dalmatians? Answer: Jasper and Horace",
    /*
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  () => "Name Goofy's son?, Answer: Max",
  */
  ]
}