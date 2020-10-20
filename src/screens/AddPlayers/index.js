import React, { Component, Fragment } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  LayoutAnimation,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Chip, TextInput, Button } from "react-native-paper";
import rotatingDrinks from "../../../assets/beerLoad.gif";

import playersContainer from "../../containers/players";

class AddPlayers extends Component {
  state = {
    current: "",
    players: [],
    visible: false,
    title: false,
    underTitle: false,
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
      return null;
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
            <LinearGradient
              // Background Linear Gradient
              colors={["#f5c144", "#e0e0e0"]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: Dimensions.get("window").height, //for full screen
              }}
              start={{ x: -1, y: 0 }}
              end={{ x: -1.1, y: 0.61 }}
            />
            <View style={styles.title}>
              <Text
                style={{
                  fontFamily: "GloriaHallelujah",
                  textAlign: "center",
                  fontSize: 80,
                  color: "#f5c144",
                  textShadowColor: "rgba(0,0,0,1)",
                  textShadowOffset: { width: 1, height: -1 },
                  textShadowRadius: 10,
                  width: 400,
                }}
              >
                Smashed
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#f5c144",
                  textAlign: "center",
                  marginTop: -30,
                  textShadowColor: "rgba(0,0,0,1)",
                  textShadowOffset: { width: 1, height: -1 },
                  textShadowRadius: 4,
                  width: 400,
                  height: 40,
                }}
              >
                The last drinking app you will ever need
              </Text>
            </View>
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
            <View style={styles.button}>
              <Button
                style={styles.deckBtn}
                onPress={this.handleChooseDeck}
                type="contained"
              >
                <Text
                  style={{
                    color: "#f5c144",
                    fontWeight: "bold",
                    textShadowColor: "rgba(0,0,0,1)",
                    textShadowOffset: { width: 1, height: -1 },
                    textShadowRadius: 2,
                  }}
                >
                  Choose deck
                </Text>
              </Button>
            </View>
            <View style={styles.background}>
              <ImageBackground
                source={rotatingDrinks}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden", // prevent image overflow the container
                }}
                imageStyle={{
                  resizeMode: "cover",
                  height: "100%", // the image height
                  top: undefined,
                }}
              />
            </View>
          </View>
    );
  }
}

let randomRGB = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color =
    "'" + "rgba(" + red + "," + green + "," + blue + "," + "1.0" + ")" + "'";

  return color;
};

const color = () => {
  return randomRGB();
};

const styles = StyleSheet.create({
  main: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    width: Dimensions.get("window").width, //for full screen
    backgroundColor: "transparent",
  },
  containerInput: {
    height: 250,
    width: Dimensions.get("window").width, //for full screen
    backgroundColor: "transparent",
    alignItems: "center",
  },
  parentInput: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#f5c144",
    backgroundColor: "rgba(245,245,245,0.3)",
    height: 55,
    width: 320,
    marginTop: 10,
  },
  input: {
    marginHorizontal: 20,
    backgroundColor: "transparent",
    height: 50,
    opacity: 1,
    marginTop: -5,
    color: "white",
  },
  chipContainerScroll: {
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "transparent",
  },
  chipContainer: {
    width: 300,
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
    backgroundColor: "rgba(245,245,245,0.3)",
  },
  button: {
    width: Dimensions.get("window").width, //for full screen
    bottom: 0,
    alignItems: "center",
  },
  deckBtn: {
    backgroundColor: "rgba(245,245,245,0.5)",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#f5c144",
    width: 200,
  },
  background: {
    height: 200,
    width: Dimensions.get("window").width, //for full screen
  },
});

export default AddPlayers;
