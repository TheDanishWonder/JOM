import React, { Component } from "react";
import { View, StatusBar, FlatList, ImageBackground, StyleSheet } from "react-native";
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
        <StatusBar barStyle="light-content" />
        <Appbar.Header dark style={{ backgroundColor: "#f5c144" }}>
          <Appbar.BackAction onPress={this.handleBack} />
          <Appbar.Content title="Choose a deck" />
        </Appbar.Header>
        <ImageBackground source={headerGif} style={styles.headerGif}>
          <FlatList
            data={data}
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
        </ImageBackground>
      </View>
    );
  }
}

export default ChooseGame;

const styles = StyleSheet.create({
  headerGif: {
    height: '100%',
    width: "100%",
  },
  listItem: {
    backgroundColor: "white",
    borderRadius: 60,
    opacity: 0.8,
    width: "95%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});