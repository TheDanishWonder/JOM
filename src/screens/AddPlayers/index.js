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
import {
  Chip,
  TextInput,
  IconButton,
  Button,
  Colors,
} from "react-native-paper";
import rotatingDrinks from "../../../assets/beerLoad.gif";
import logo from "../../../assets/logo_675x675.png";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";

import Divider from "react-native-divider";

import playersContainer from "../../containers/players";

class AddPlayers extends Component {
  state = {
    current: "",
    players: [],
    visible: false,
    title: false,
    underTitle: false,
    deck: false,
    drinkWarning: false,
  };

  componentDidMount() {
    var CustomAnimation = {
      duration: 800,
      create: {
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 3.4,
      },
    };
    this.setState({ drinkWarning: false });
    setTimeout(() => {
      LayoutAnimation.configureNext(CustomAnimation);
      this.setState({ title: true });
    }, 500);

    setTimeout(() => {
      LayoutAnimation.configureNext(CustomAnimation);
      this.setState({ underTitle: true });
    }, 1600);

    setTimeout(() => {
      LayoutAnimation.configureNext(CustomAnimation);
      this.setState({ visible: true });
    }, 2500);

    setTimeout(() => {
      LayoutAnimation.configureNext(CustomAnimation);
      this.setState({ deck: true });
    }, 3400);

    setTimeout(() => {
      this.setState({ drinkWarning: true });
    }, 4000);
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

  componentWillUnmount() {
    this.setState({ drinkWarning: false });
  }

  render() {
    const { players, current, visible, title, underTitle, deck } = this.state;

    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#00f7ff", "#e0e0e0"]}
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
        <View style={styles.head}></View>
        <View style={styles.title}>
          {title && (
            <Text
              style={{
                fontFamily: "GloriaHallelujah",
                textAlign: "center",
                fontSize: 85,
                color: "#f5c144",
                textShadowColor: "rgba(0,0,0,1)",
                textShadowOffset: { width: 1, height: -1 },
                textShadowRadius: 10,
                width: 400,
              }}
            >
              Smashed
            </Text>
          )}
        </View>
        <View style={styles.underTitle}>
          {underTitle && (
            <Text
              style={{
                fontSize: 18,
                color: "#f5c144",
                textAlign: "center",
                textShadowColor: "rgba(0,0,0,1)",
                textShadowOffset: { width: 1, height: -1 },
                textShadowRadius: 4,
                width: 400,
              }}
            >
              The last drinking app you will ever need
            </Text>
          )}
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
          <Dialog
            width={0.8}
            height={0.4}
            containerStyle={{ marginTop: 100 }}
            onHardwareBackPress={() => {
              true;
            }}
            overlayOpacity={0.5}
            dialogAnimation={
              new SlideAnimation({
                slideFrom: "bottom",
              })
            }
            visible={this.state.drinkWarning}
            onTouchOutside={() => {
              this.setState({ drinkWarning: false });
            }}
          >
            <DialogContent>
              <View style={styles.dialogContainer}>
                <Text style={styles.dialogTitle}>Disclaimer</Text>
                <Divider
                  color={"#00f7ff"}
                  color={"#00f7ff"}
                  orientation="center"
                ></Divider>
                <Text style={styles.dialogUnderTitle}>
                  Please remember to drink responsibly and look out for your
                  friends.
                </Text>
                <Divider
                  color={"#00f7ff"}
                  color={"#00f7ff"}
                  orientation="center"
                ></Divider>
                <Text style={styles.dialogPolicy}>
                  By continuing, you agree to Smashed app-usage policy, for
                  further information please click
                  <IconButton
                    icon="help-circle-outline"
                    color={Colors.black}
                    size={20}
                    style={{ marginTop: -15 }}
                  />
                  on the next page
                </Text>
                <Divider
                  color={"#00f7ff"}
                  color={"#00f7ff"}
                  orientation="center"
                ></Divider>
              </View>
            </DialogContent>
          </Dialog>
        </View>
        <View style={styles.button}>
          {deck && (
            <Button
              style={styles.deckBtn}
              onPress={this.handleChooseDeck}
              type="contained"
            >
              <Text
                style={{
                  color: "#00f7ff",
                  fontWeight: "bold",
                  textShadowColor: "rgba(0,0,0,1)",
                  textShadowOffset: { width: 1, height: -1 },
                  textShadowRadius: 2,
                }}
              >
                Choose deck
              </Text>
            </Button>
          )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  head: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width, //for full screen
  },
  title: {
    alignItems: "center",
  },
  underTitle: {
    alignItems: "center",
    height: 70,
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
    height: 39,
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
  dialogContainer: {
    height: "110%",
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
  },
  dialogTitle: {
    fontSize: 30,
    alignItems: "center",
  },
  dialogUnderTitle: {
    fontSize: 20,
    alignItems: "center",
  },
});

export default AddPlayers;
