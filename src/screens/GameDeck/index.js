import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";

import activeDeck from "../../containers/active-deck";
import players from "../../containers/players";
import background from "../../../assets/exampleBoard.gif";
import { LinearGradient } from "expo-linear-gradient";

class GameDeck extends Component {
  state = {
    text: "",
    isGameDone: false,
    bgColor: "#ffb677",
    currentIndex: 0,
    color: new Animated.Value(0),
    btnColor: new Animated.Value(0),
    animating: false,
  };

  async componentDidMount() {
    await this.handleNextCard();
  }

  handleNextCard = async () => {
    try {
      const card = await activeDeck.getCard();
      this.setState(
        {
          isGameDone: !card,
        },
        () => {
          this.changeLabel(card ? card(players.state.players) : "");
          this.doTransition();
        }
      );
    } catch (error) {
      console.log(error);
      this.handleBack();
    }
  };

  doTransition = () => {
    Animated.sequence([Animated.delay()]).start();
  };

  changeLabel = (text) => {
    setTimeout(() => {
      this.setState({
        text,
        animating: false,
        currentIndex: this.state.currentIndex + 1,
      });
    }, );
  };

  handleBack = () => this.props.navigation.goBack();

  render() {
    const { text, isGameDone, animating, currentIndex } = this.state;
    const btnHandler = isGameDone ? this.handleBack : this.handleNextCard;

    return (
      <Animated.View style={styles.container}>
        <View style={styles.gameBoard}>
          <LinearGradient
            // Background Linear Gradient
            colors={[color(), "#e0e0e0"]}
            style={styles.imageBackground}
            start={{ x: -1, y: 0 }}
            end={{ x: -1, y: 1.3 }}
          >
            <View style={styles.textContainer}>
              <TouchableOpacity
                mode="outlined"
                color="#fff"
                onPress={btnHandler}
                hitSlop={{ top: 500, bottom: 700, left: 100, right: 100 }}
                style={[styles.btn]}
                type="contained"
                dark
              >
                {currentIndex === 0 ? null : (
                  <Animated.Text
                    style={[
                      styles.text,
                      { color: animating ? color : color() },
                    ]}
                  >
                    {text}
                  </Animated.Text>
                )}
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </Animated.View>
    );
  }
}

let randomRGB = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = "'"+"rgba("+red+","+green+","+blue+","+"1.0"+")"+"'";
  
  return color;
}

const color = () => {
  return randomRGB()
}

const styles = StyleSheet.create({
  container: { flex: 1, overflow: "hidden" },
  textContainer: {
    height: 230,
    width: 430,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    borderWidth: 2,
    borderColor: color(),
  },
  text: {
    fontFamily: "GloriaHallelujah",
    color: "#f5c144",
    fontSize: 25,
    alignSelf: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: 15,
    flex: 1,
    flexWrap: "wrap",
    textShadowColor: "rgba(0,0,0,1)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 4,
  },
  btn: {
    margin: 10,
  },
  imageBackground: {
    transform: [{ rotate: "90deg" }],
    width: Dimensions.get("window").height, //for full screen
    height: Dimensions.get("window").width, //for full screen
    alignItems: "center",
    justifyContent: "center",
  },
  gameBoard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameDeck;
