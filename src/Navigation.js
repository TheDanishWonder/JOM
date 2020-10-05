import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import AddPlayers from './screens/AddPlayers'
import ChooseGame from './screens/ChooseGame'
import GameDeck from './screens/GameDeck'

const config = {
  headerMode: 'none',
  initialRouteName: 'AddPlayers'
}

const Navigator = createStackNavigator({
  AddPlayers: AddPlayers,
  ChooseGame: ChooseGame,
  GameDeck: GameDeck
}, config);

const App = createAppContainer(Navigator);

export default App;
