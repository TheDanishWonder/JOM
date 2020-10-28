import React, { Component } from "react";
import {
  View,
  StatusBar,
  FlatList,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  LayoutAnimation,
} from "react-native";
import { Appbar, List, Menu, IconButton, Colors } from "react-native-paper";
import headerGif from "../../../assets/beerLoad.gif";
import decks from "../../config/decks/index";
import activeDeck from "../../containers/active-deck";

import Divider from "react-native-divider";
import { LinearGradient } from "expo-linear-gradient";

// import howToPlay from "../../config/how-to-play";

import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";

const data = Object.entries(decks).map(([title, detail]) => {
  return {
    icon: detail.icon,
    title,
    description: detail.description,
  };
});

class ChooseGame extends React.Component {
  state = {
    visible: false,
    items: false,
  };

  componentDidMount() {
    var CustomAnimation = {
      duration: 700,
      create: {
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 3.4,
      },
    };

    setTimeout(() => {
      LayoutAnimation.configureNext(CustomAnimation);
      this.setState({ items: true });
    }, 500);
  }
  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  handleDeckSelected = (deckTitle) => async () => {
    await activeDeck.set(decks[deckTitle]);
    this.props.navigation.navigate("GameDeck");
  };

  handleBack = () => this.props.navigation.goBack();

  componentWillUnmount() {
    this.state.visible = false;
  }

  render() {
    const { items } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
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
          end={{ x: -1.1, y: 0.57 }}
        />
        <ImageBackground
          source={headerGif}
          style={[styles.fixed, styles.container]}
        />

        <StatusBar barStyle="light-content" />
        <Appbar.Header
          dark
          style={{
            backgroundColor: "#00f7ff",
            marginTop: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Appbar.BackAction onPress={this.handleBack} />
          <Appbar.Content title="Choose a deck" />
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <IconButton
                icon="help-circle-outline"
                color={Colors.white}
                size={30}
                onPress={this._openMenu}
              />
            }
          >
            <Dialog
              width={0.9}
              height={0.8}
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
              visible={this.state.visible}
              onTouchOutside={() => {
                this.setState({ visible: false });
              }}
            >
              <DialogContent>
                <LinearGradient
                  // Background Linear Gradient
                  colors={["#00f7ff", "transparent"]}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: Dimensions.get("window").height, //for full screen
                  }}
                  start={{ x: -1, y: 0 }}
                  end={{ x: -1.1, y: 0.65 }}
                />
                <ScrollView>
                  <View style={styles.dialogContainer}>
                    <Text style={styles.dialogTitle}>Smashed</Text>
                    <Text style={styles.dialogUnderTitle}>How to play</Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.dialogGenre}>General Game Rules</Text>
                    <Text style={styles.dialogRules}>
                      Follow the instructions on the cards, and remember to
                      drink responsibly
                    </Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.dialogGenre}>Truth or Drink</Text>
                    <Text style={styles.dialogRules}>
                      Tell the truth or drink the amount of sips the card tells.
                    </Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.dialogGenre}>Would you Rather</Text>
                    <Text style={styles.dialogRules}>
                      One player reads the question, when everybody have heard
                      and thought about the question, a player counts down from
                      3 and each player either raise their hand for the first
                      answer or keep their hand down for the 2 second answer,
                      the answer with fewest supporters takes a sip of your
                      drink, if its a tie everybody drinks.
                    </Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={(styles.dialogUnderTitle, styles.credit)}>
                      Credit
                    </Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.dialogGenre}>Gif Design</Text>
                    <Text style={styles.dialogRules}>Jon Ander Pazos</Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.dialogGenre}>Questions</Text>
                    <Text style={styles.dialogRules}>Nicklas Dupont</Text>
                    <Text style={styles.dialogRules}>
                      Andreas Ballieu Lagoni
                    </Text>
                    <Text style={styles.dialogRules}>Katrine Juncker</Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={(styles.dialogUnderTitle, styles.credit)}>
                      Policy
                    </Text>
                    <Text style={styles.dialogRules}>
                      The user of the app agree to be fully responsible for any
                      consequences that may result from the use of Smashed.
                    </Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                  </View>
                </ScrollView>
              </DialogContent>
            </Dialog>
          </Menu>
        </Appbar.Header>
        {items && (
          <FlatList
            ListHeaderComponent={<></>}
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
            ListFooterComponent={<></>}
          />
        )}
      </View>
    );
  }
}

export default ChooseGame;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "rgba(245,245,245,0.5)",
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#f5c144",
    opacity: 0.85,
    width: "95%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  container: {
    width: Dimensions.get("window").width, //for full screen
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  fixed: {
    position: "absolute",
    bottom: 0,
  },
  scrollview: {
    backgroundColor: "transparent",
    paddingVertical: -70,
  },
  dialogContainer: {
    height: "110%",
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
  },
  dialogTitle: {
    fontFamily: "GloriaHallelujah",
    textAlign: "center",
    fontSize: 70,
    color: "#f5c144",
    marginTop: -20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 4,
  },
  dialogUnderTitle: {
    fontFamily: "GloriaHallelujah",
    textAlign: "center",
    fontSize: 40,
    color: "#f5c144",
    marginTop: -40,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 4,
  },
  dialogGenre: {
    fontFamily: "GloriaHallelujah",
    textAlign: "center",
    fontSize: 27,
    color: "#f5c144",
    padding: 5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 4,
  },
  dialogRules: {
    fontFamily: "GloriaHallelujah",
    textAlign: "center",
    fontSize: 23,
    color: "#f5c144",
    paddingBottom: -2,
    marginTop: -5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 4,
  },
  credit: {
    fontFamily: "GloriaHallelujah",
    textAlign: "center",
    fontSize: 40,
    color: "#f5c144",
    marginTop: 0,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 4,
  },
});
