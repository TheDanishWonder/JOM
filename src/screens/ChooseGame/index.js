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
  Linking,
} from "react-native";
import { Appbar, List, Menu, IconButton, Colors } from "react-native-paper";
import headerGif from "../../../assets/party.gif";
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
    this.state.items = false;
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
          colors={["#00f7ff", "#79a292"]}
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
                    <Text style={styles.dialogTitle}>Quizina</Text>
                    <Text style={styles.dialogUnderTitle}>How to play</Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.dialogGenre}>General Game Rules</Text>
                    <Text style={styles.dialogRules}>
                      Follow the instructions on the cards, and remember the person with the least amount of points when the game ends wins
                    </Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.dialogGenre}>Spill the Tea</Text>
                    <Text style={styles.dialogRules}>
                      Tell the truth or recieve a point.
                    </Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.dialogGenre}>Disney Dream</Text>
                    <Text style={styles.dialogRules}>
                      Test your Disney knowledge.
                      One player reads the question out loud without showing the phone, all others can answer first one to answer wins.
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
                      answer or keep their hand down for the second answer, the
                      answer with fewest supporters recieves a point,
                      if its a tie everybody recieves a point.
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
                    <Text style={{ fontSize: 40 }}>Policies</Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.policyField}>App Usage</Text>
                    <Text style={styles.policyText}>
                      The user of the app agree to be fully responsible for any
                      consequences that may result from the use of Quizina.
                    </Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={styles.policyField}>Privacy Policy</Text>
                    <Text style={styles.policyText}>
                      Nicklas Dupont built the Quizina app as a Commercial app.
                      This SERVICE is provided by Nicklas Dupont and is intended
                      for use as is. This page is used to inform visitors
                      regarding my policies with the collection, use, and
                      disclosure of Personal Information if anyone decided to
                      use my Service. If you choose to use my Service, then you
                      agree to the collection and use of information in relation
                      to this policy. The Personal Information that I collect is
                      used for providing and improving the Service. I will not
                      use or share your information with anyone except as
                      described in this Privacy Policy. The terms used in this
                      Privacy Policy have the same meanings as in our Terms and
                      Conditions, which is accessible at Smashed unless
                      otherwise defined in this Privacy Policy.
                    </Text>
                    <Text style={styles.policyField}>
                      Information Collection and Use
                    </Text>
                    <Text style={styles.policyText}>
                      For a better experience, while using our Service, I may
                      require you to provide us with certain personally
                      identifiable information. The information that I request
                      will be retained on your device and is not collected by me
                      in any way. The app does use third party services that may
                      collect information used to identify you. Link to privacy
                      policy of third party service providers used by the app
                    </Text>
                    <Text style={{ textAlign: "center" }}>
                      <Text style={{ fontSize: 10 }}>
                        {"\u2B24"}
                        {"  "}
                      </Text>
                      <Text
                        style={styles.policyLink}
                        onPress={() =>
                          Linking.openURL(
                            "https://www.google.com/policies/privacy/"
                          )
                        }
                      >
                        Google Play Services
                      </Text>
                    </Text>
                    <Text style={styles.policyField}>Log Data</Text>
                    <Text style={styles.policyText}>
                      I want to inform you that whenever you use my Service, in
                      a case of an error in the app I collect data and
                      information (through third party products) on your phone
                      called Log Data. This Log Data may include information
                      such as your device Internet Protocol (“IP”) address,
                      device name, operating system version, the configuration
                      of the app when utilizing my Service, the time and date of
                      your use of the Service, and other statistics.
                    </Text>
                    <Text style={styles.policyField}>Cookies</Text>
                    <Text style={styles.policyText}>
                      Cookies are files with a small amount of data that are
                      commonly used as anonymous unique identifiers. These are
                      sent to your browser from the websites that you visit and
                      are stored on your device's internal memory. This Service
                      does not use these “cookies” explicitly. However, the app
                      may use third party code and libraries that use “cookies”
                      to collect information and improve their services. You
                      have the option to either accept or refuse these cookies
                      and know when a cookie is being sent to your device. If
                      you choose to refuse our cookies, you may not be able to
                      use some portions of this Service.
                    </Text>
                    <Text style={styles.policyField}>Service Providers</Text>
                    <Text style={styles.policyText}>
                      I may employ third-party companies and individuals due to
                      the following reasons:
                    </Text>
                    <Text style={{ textAlign: "center" }}>
                      <Text style={{ fontSize: 10 }}>
                        {"\u2B24"}
                        {"  "}
                      </Text>
                      <Text style={styles.policyText}>
                        To provide the Service on our behalf,
                      </Text>
                    </Text>
                    <Text style={{ textAlign: "center" }}>
                      <Text style={{ fontSize: 10 }}>
                        {"\u2B24"}
                        {"  "}
                      </Text>
                      <Text style={styles.policyText}>
                        To perform Service-related services or
                      </Text>
                    </Text>
                    <Text style={{ textAlign: "center" }}>
                      <Text style={{ fontSize: 10 }}>
                        {"\u2B24"}
                        {"  "}
                      </Text>
                      <Text style={styles.policyText}>
                        To assist us in analyzing how our Service is used.
                      </Text>
                    </Text>
                    <Text style={styles.policyText}>
                      I want to inform users of this Service that these third
                      parties have access to your Personal Information. The
                      reason is to perform the tasks assigned to them on our
                      behalf. However, they are obligated not to disclose or use
                      the information for any other purpose.
                    </Text>
                    <Text style={styles.policyField}>Security</Text>
                    <Text style={styles.policyText}>
                      I value your trust in providing us your Personal
                      Information, thus we are striving to use commercially
                      acceptable means of protecting it. But remember that no
                      method of transmission over the internet, or method of
                      electronic storage is 100% secure and reliable, and I
                      cannot guarantee its absolute security.
                    </Text>
                    <Text style={styles.policyField}>Links to Other Sites</Text>
                    <Text style={styles.policyText}>
                      This Service may contain links to other sites. If you
                      click on a third-party link, you will be directed to that
                      site. Note that these external sites are not operated by
                      me. Therefore, I strongly advise you to review the Privacy
                      Policy of these websites. I have no control over and
                      assume no responsibility for the content, privacy
                      policies, or practices of any third-party sites or
                      services.
                    </Text>
                    <Text style={styles.policyField}>Children’s Privacy</Text>
                    <Text style={styles.policyText}>
                      These Services do not address anyone under the age of 13.
                      I do not knowingly collect personally identifiable
                      information from children under 13. In the case I discover
                      that a child under 13 has provided me with personal
                      information, I immediately delete this from our servers.
                      If you are a parent or guardian and you are aware that
                      your child has provided us with personal information,
                      please contact me so that I will be able to do necessary
                      actions. Changes to This Privacy Policy I may update our
                      Privacy Policy from time to time. Thus, you are advised to
                      review this page periodically for any changes. I will
                      notify you of any changes by posting the new Privacy
                      Policy on this page. This policy is effective as of
                      2020-11-01
                    </Text>
                    <Text style={styles.policyField}>Contact Us</Text>
                    <Text style={styles.policyText}>
                      If you have any questions or suggestions about my Privacy
                      Policy, do not hesitate to contact me at
                      dupontworks@gmail.com. This privacy policy page was
                      created at privacypolicytemplate.net and
                      modified/generated by App Privacy Policy Generator
                    </Text>
                    <Divider
                      color={"#00f7ff"}
                      color={"#00f7ff"}
                      orientation="center"
                    ></Divider>
                    <Text style={{ fontSize: 30 }}>Terms {"&"} Conditions</Text>
                    <Text style={styles.policyText}>
                      By downloading or using the app, these terms will
                      automatically apply to you – you should make sure
                      therefore that you read them carefully before using the
                      app. You’re not allowed to copy, or modify the app, any
                      part of the app, or our trademarks in any way. You’re not
                      allowed to attempt to extract the source code of the app,
                      and you also shouldn’t try to translate the app into other
                      languages, or make derivative versions. The app itself,
                      and all the trade marks, copyright, database rights and
                      other intellectual property rights related to it, still
                      belong to Nicklas Dupont. Nicklas Dupont is committed to
                      ensuring that the app is as useful and efficient as
                      possible. For that reason, we reserve the right to make
                      changes to the app or to charge for its services, at any
                      time and for any reason. We will never charge you for the
                      app or its services without making it very clear to you
                      exactly what you’re paying for. The Smashed app stores and
                      processes personal data that you have provided to us, in
                      order to provide my Service. It’s your responsibility to
                      keep your phone and access to the app secure. We therefore
                      recommend that you do not jailbreak or root your phone,
                      which is the process of removing software restrictions and
                      limitations imposed by the official operating system of
                      your device. It could make your phone vulnerable to
                      malware/viruses/malicious programs, compromise your
                      phone’s security features and it could mean that the
                      Smashed app won’t work properly or at all. The app does
                      use third party services that declare their own Terms and
                      Conditions. Link to Terms and Conditions of third party
                      service providers used by the app
                    </Text>
                    <Text style={{ textAlign: "center" }}>
                      <Text style={{ fontSize: 10 }}>
                        {"\u2B24"}
                        {"  "}
                      </Text>
                      <Text
                        style={styles.policyLink}
                        onPress={() =>
                          Linking.openURL(
                            "https://www.google.com/policies/privacy/"
                          )
                        }
                      >
                        Google Play Services
                      </Text>
                    </Text>
                    <Text style={styles.policyText}>
                      You should be aware that there are certain things that
                      Nicklas Dupont will not take responsibility for. Certain
                      functions of the app will require the app to have an
                      active internet connection. The connection can be Wi-Fi,
                      or provided by your mobile network provider, but Nicklas
                      Dupont cannot take responsibility for the app not working
                      at full functionality if you don’t have access to Wi-Fi,
                      and you don’t have any of your data allowance left. If
                      you’re using the app outside of an area with Wi-Fi, you
                      should remember that your terms of the agreement with your
                      mobile network provider will still apply. As a result, you
                      may be charged by your mobile provider for the cost of
                      data for the duration of the connection while accessing
                      the app, or other third party charges. In using the app,
                      you’re accepting responsibility for any such charges,
                      including roaming data charges if you use the app outside
                      of your home territory (i.e. region or country) without
                      turning off data roaming. If you are not the bill payer
                      for the device on which you’re using the app, please be
                      aware that we assume that you have received permission
                      from the bill payer for using the app. Along the same
                      lines, Nicklas Dupont cannot always take responsibility
                      for the way you use the app i.e. You need to make sure
                      that your device stays charged – if it runs out of battery
                      and you can’t turn it on to avail the Service, Nicklas
                      Dupont cannot accept responsibility. With respect to
                      Nicklas Dupont’s responsibility for your use of the app,
                      when you’re using the app, it’s important to bear in mind
                      that although we endeavour to ensure that it is updated
                      and correct at all times, we do rely on third parties to
                      provide information to us so that we can make it available
                      to you. Nicklas Dupont accepts no liability for any loss,
                      direct or indirect, you experience as a result of relying
                      wholly on this functionality of the app. At some point, we
                      may wish to update the app. The app is currently available
                      on Android {"&"} iOS – the requirements for both
                      systems(and for any additional systems we decide to extend
                      the availability of the app to) may change, and you’ll
                      need to download the updates if you want to keep using the
                      app. Nicklas Dupont does not promise that it will always
                      update the app so that it is relevant to you and/or works
                      with the Android {"&"} iOS version that you have installed
                      on your device. However, you promise to always accept
                      updates to the application when offered to you, We may
                      also wish to stop providing the app, and may terminate use
                      of it at any time without giving notice of termination to
                      you. Unless we tell you otherwise, upon any termination,
                      (a) the rights and licenses granted to you in these terms
                      will end; (b) you must stop using the app, and (if needed)
                      delete it from your device.
                    </Text>
                    <Text style={styles.policyField}>
                      Changes to This Terms and Conditions
                    </Text>
                    <Text style={styles.policyText}>
                      I may update our Terms and Conditions from time to time.
                      Thus, you are advised to review this page periodically for
                      any changes. I will notify you of any changes by posting
                      the new Terms and Conditions on this page. These terms and
                      conditions are effective as of 2020-11-01
                    </Text>
                    <Text style={styles.policyField}>Contact Us</Text>
                    <Text style={styles.policyText}>
                      If you have any questions or suggestions about my Terms
                      and Conditions, do not hesitate to contact me at
                      dupontworks@gmail.com. Terms and Conditions page was
                      generated by App Privacy Policy Generator
                    </Text>
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
  policyField: {
    fontSize: 25,
    margin: 5,
    textAlign: "center",
  },
  policyText: {
    fontSize: 20,
    textAlign: "center",
  },
  policyLink: {
    color: "blue",
    fontSize: 20,
    textAlign: "center",
  },
});
