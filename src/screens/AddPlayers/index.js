import React, { Component, Fragment } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  LayoutAnimation,
  ImageBackground,
} from "react-native";
import { Chip, TextInput, Button } from "react-native-paper";
import rotatingDrinks from "../../../assets/beerLoad.gif";

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
              marginTop: -10,
            }}
          >
            Smashed
          </Text>
          <Text style={{ fontSize: 12, color: "#444", marginTop: -20 }}>
            The last drinking app you will ever need
          </Text>
          <View style={styles.containerInput}>
            {visible && (
              <Fragment>
                <View style={styles.parentInput}>
                  <TextInput
                    style={styles.input}
                    label="Add player"
                    placeholder="New player name"
                    placeholderTextColor="black"
                    value={current}
                    maxLength={40}
                    onChangeText={(current) => this.setState({ current })}
                    onSubmitEditing={this.handleAddPlayer}
                    blurOnSubmit={!current}
                    returnKeyType={"done"}
                  />
                </View>

                <View style={styles.chipContainer}>
                  <ScrollView style={styles.chipContainerScroll}>
                    {players.map((current) => (
                      <Chip
                        style={styles.chip}
                        key={current}
                        onPress={this.handleEditPlayer(current)}
                        onClose={this.handleRemovePlayer(current)}
                      >
                        {current}
                      </Chip>
                    ))}
                  </ScrollView>
                </View>
              </Fragment>
            )}
          </View>

          <Button
            style={styles.deckBtn}
            onPress={this.handleChooseDeck}
            type="contained"
          >
            <Text style={{ color: "#f5c144", fontWeight: "bold" }}>
              Choose deck
            </Text>
          </Button>
          <ImageBackground
            source={rotatingDrinks}
            style={styles.backgroundImage}
          ></ImageBackground>
        </View>
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
    marginTop: 260,
  },
  parentInput: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#f5c144",
    backgroundColor: "white",
    height: 55,
    width: 350,
    marginRight: 10,
    marginTop: 10,
  },
  containerInput: {
    height: 160,
    width: 350,
    marginTop: 20,

  },
  input: {
    marginHorizontal: 20,
    backgroundColor: "transparent",
    height: 50,
    opacity: 1,
    marginTop: -5,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    marginTop: -50
  },
  chipContainerScroll: {
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "transparent"
  },
  chipContainer: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "transparent",
    flex: 1,
    alignItems: "flex-start",
    margin: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  chip: {
    margin: 5,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#f5c144",
  },
  deckBtn: {
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#f5c144",
  },
  backgroundImage: {
    width: "100%",
    height: "63.5%",
    overflow: "hidden",
  },
});

export default AddPlayers;
