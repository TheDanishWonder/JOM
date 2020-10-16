import React from "react";
import { UIManager } from "react-native";
import { Provider } from "unstated";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/Navigation";
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

import theme from "./src/config/theme";
import * as SplashScreen from 'expo-splash-screen';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
    await Font.loadAsync({
      'GloriaHallelujah': require('./src/fonts/GloriaHallelujah.ttf'),
    })
    this.setState({ loading: true})
  }

  prepareResources = async () => {
    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  }

  render() {
    if (!this.state.appIsReady) {
      return null;
    }
    
    if (!this.state.loading) {
      return null;
    }
    return (
      <PaperProvider theme={theme}>
        <Provider>
          <Navigation />
        </Provider>
      </PaperProvider>
    );
  }
}
