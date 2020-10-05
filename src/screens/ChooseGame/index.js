import React, { Component } from "react";
import {
  View,
  StatusBar,
  FlatList,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Appbar, List } from "react-native-paper";
import headerGif from "../../../assets/beerheader.gif";

import decks from "../../config/decks/index";

import activeDeck from "../../containers/active-deck";

const data = Object.entries(decks).map(([title, detail]) => {
  return {
    icon: detail.icon,
    title,
    description: detail.description,
  };
});

class ChooseGame extends Component {
  handleDeckSelected = (deckTitle) => async () => {
    await activeDeck.set(decks[deckTitle]);
    this.props.navigation.navigate("GameDeck");
  };

  handleBack = () => this.props.navigation.goBack();

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ImageBackground source={headerGif} style={[styles.fixed, styles.containter]}/>

        <StatusBar barStyle="light-content" />
        <Appbar.Header
          dark
          style={{ backgroundColor: "#f5c144", marginTop: 2 }}
        >
          <Appbar.BackAction onPress={this.handleBack} />
          <Appbar.Content title="Choose a deck" />
        </Appbar.Header>
        <ScrollView style={[styles.fixed, styles.scrollview]}>
          
            <FlatList
              data={data}
              nestedScrollEnabled={true}
              keyExtractor={(item, index) => item.title}
              renderItem={({ item }) => (
                <List.Item
                  left={(props) => <List.Icon {...props} icon={item.icon} />}
                  onPress={this.handleDeckSelected(item.title)}
                  title={item.title}
                  description={item.description}
                  style={styles.listItem}
                />
              )}
            />
        </ScrollView>
      </View>
    );
  }
}

export default ChooseGame;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "white",
    borderRadius: 60,
    opacity: 0.85,
    width: "95%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  containter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
    top: 50
  },
  fixed: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0
  },
 scrollview: {
   backgroundColor: 'transparent',
   paddingVertical: -70
 }
});
