import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
} from "react-native";

import activeDeck from "../../containers/active-deck";
import players from "../../containers/players";
import { LinearGradient } from "expo-linear-gradient";
import headerGif from "../../../assets/beerLoad.gif";

const height = Dimensions.get("window").height; //for full screen
const width = Dimensions.get("window").width; //for full screen

class GameDeck extends Component {
  state = {
    text: "",
    isGameDone: false,
    backgroundColor: "#ffb677",
    currentIndex: 0,
    color: new Animated.Value(0),
    btnColor: new Animated.Value(0),
    animating: false,
    card: false,
    bgColor: false,
  };

  async componentDidMount() {
    await this.handleNextCard();

    var CustomAnimation = {
      duration: 1500,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 1.3,
      },
    };

    LayoutAnimation.configureNext(CustomAnimation);
    this.setState({ animating: true });

    setTimeout(() => {
      LayoutAnimation.configureNext(CustomAnimation);
      this.setState({ card: true });
    }, 1500);

    setTimeout(() => {
      LayoutAnimation.configureNext(CustomAnimation);
      this.setState({ bgColor: true });
    });
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
        animating: true,
        currentIndex: this.state.currentIndex + 1,
      });
    });
  };

  componentWillUnmount() {
    this.handleNextCard();
    this.state.animating = false;
    this.state.card = false;
    this.state.bgColor = false;
  }

  handleBack = () => this.props.navigation.goBack();

  render() {
    const {
      text,
      isGameDone,
      animating,
      currentIndex,
      card,
      bgColor,
    } = this.state;
    const btnHandler = isGameDone ? this.handleBack : this.handleNextCard;

    return (
      <Animated.View style={styles.container}>
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "stretch" }}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={[randomRB(), "#e0e0e0"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "100%",
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            {bgColor && (
              <View style={styles.gameBoard}>
                {card && (
                  <View style={styles.textContainer}>
                    <TouchableOpacity
                      mode="outlined"
                      color="#fff"
                      onPress={btnHandler}
                      hitSlop={{ top: 700, bottom: 700, left: 100, right: 100 }}
                      style={[styles.btn]}
                      type="contained"
                      dark
                    >
                      {currentIndex === 0 ? null : (
                        <Animated.Text
                          style={[
                            styles.text,
                            { color: animating ?tcolor() : tcolor() },
                          ]}
                        >
                          {text}
                        </Animated.Text>
                      )}
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
          </LinearGradient>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ImageBackground
            source={headerGif}
            style={[styles.fixed, styles.gifContainer]}
          />
        </View>
      </Animated.View>
    );
  }
}

let randomRGB = () => {
  let red = Math.floor(Math.random() * 255);
  if (red < 30) {
    red + 50;
  }
  let green = Math.floor(Math.random() * 255);
  if (green < 30) {
    green + 50;
  }
  let blue = Math.floor(Math.random() * 255);
  if (blue < 30) {
    blue + 50;
  }
  let color =
    "'" + "rgba(" + red + "," + green + "," + blue + "," + "1.0" + ")" + "'";

  return color;
};

let randomRB = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color =
    "'" + "rgba(" + red + "," + green + "," + blue + "," + "1.0" + ")" + "'";

  return color;
};

const tcolor = () => {
  
  let textColor = [
    "#00ff44",
    "#00ffdd",
    "#00d0ff",
    "#0055ff",
    "#1100ff",
    "#8000ff",
    "#bf00ff",
    "#ff00e6",
    "#ff0090",
    "#ff0062",
    "#ff0000",
    "#ff6600",
    "#ff9900",
    "#ffbf00",
    "#fff700",
    "#ddff00",
    "#8cff00",
    "#5eff00",
    "#00fff2",
    "#00b7ff",
    "#ff00c8",
    "#ff009d",
    "#ff007b",
    "#ff0062",
    "#ff5900",
    "#ff6f00",
    "#00ffa6",
    "#00ffcc",
    "#00ffff",
  ];
  const safeColor = textColor[Math.floor(Math.random() * textColor.length)];
  return safeColor;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
  },
  textContainer: {
    height: "75%",
    width: "75%",

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  },
  text: {
    fontFamily: "GloriaHallelujah",
    color: "#f5c144",
    fontSize: 25,
    margin: 10,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,1.0)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 2,
  },
  btn: {
    margin: 10,
  },
  imageBackground: {
    width: width,
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
  },
  fixed: {
    position: "absolute",
    bottom: 0,
  },
  gifContainer: {
    width: Dimensions.get("window").width, //for full screen
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  gameBoard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameDeck;
