import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  LayoutAnimation,
  ImageBackground,
} from "react-native";
import { Chip, TextInput, Button } from "react-native-paper";
import rotatingDrinks from "../../../assets/BeerLoading.gif";

import playersContainer from "../../containers/players";

class AddPlayers extends Component {
  state = {
    current: "",
    players: [],
    visible: false,
  };

  componentDidMount() {
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({ visible: true });
    }, 1000);
  }

  handleAddPlayer = () => {
    const { players, current } = this.state;

    if (!current) {
      return;
    }

    this.setState({
      current: "",
      players: [...players, current],
    });
  };

  handleChooseDeck = (e) => {
    const { players } = this.state;

    if (!players.length) {
      return;
    }

    playersContainer.set(players);
    this.props.navigation.navigate("ChooseGame");
  };

  handleRemovePlayer = (player) => () => {
    const { players } = this.state;
    this.setState({ players: players.filter((current) => current !== player) });
  };

  handleEditPlayer = (player) => () => {
    const { players } = this.state;
    this.setState({
      current: player,
      players: players.filter((current) => current !== player),
    });
  };

  render() {
    const { players, current, visible } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../../images/logo.png")}
            style={{ resizeMode: "contain", height: 200 }}
          />
          <Text
            style={{
              fontFamily: "GloriaHallelujah",
              textAlign: "center",
              fontSize: 60,
              color: "#f5c144",
            }}
          >
            Smashed
          </Text>
          <Text style={{ fontSize: 12, color: "#444", marginTop: -25 }}>
            The last drinking app you will ever need
          </Text>
          <Button
            style={styles.deckBtn}
            onPress={this.handleChooseDeck}
            type="contained"
            dark
          >
            Choose deck
          </Button>
        </View>

        <ImageBackground source={rotatingDrinks} style={styles.backgroundImage}>
          {visible && (
            <Fragment>
              <TextInput
                style={styles.input}
                label="Add player"
                placeholder="New player name"
                value={current}
                maxLength={40}
                onChangeText={(current) => this.setState({ current })}
                onSubmitEditing={this.handleAddPlayer}
                blurOnSubmit={!current}
                returnKeyType={"done"}
              />

              <View style={styles.chipContainer}>
                {players.map((current) => (
                  <Chip
                    style={{ margin: 2 }}
                    key={current}
                    onPress={this.handleEditPlayer(current)}
                    onClose={this.handleRemovePlayer(current)}
                  >
                    {current}
                  </Chip>
                ))}
              </View>
            </Fragment>
          )}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: "30%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  input: {
    marginHorizontal: 20,
    backgroundColor: "transparent",
    marginTop: 30,
  },
  container: { flex: 1, paddingTop: 60, backgroundColor: "#e0e0e0" },
  chipContainer: {
    overflow: "scroll",
    flex: 1,
    alignItems: "flex-start",
    margin: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: { margin: 2 },
  deckBtn: { margin: 20, backgroundColor: "#f5c144", borderRadius: 30},
  backgroundImage: {
    width: "100%",
    height: "65%",
    overflow: "hidden",
    bottom: -171,
  },
});

export default AddPlayers;
