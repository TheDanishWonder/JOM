import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default howToPlay = () => {
  return (
    <DialogContent>
      <View>
        <Text>Smashed</Text>
        <Text>How to play</Text>
        <Text>General Game Rules</Text>
        <Text>rules...</Text>
        <Text>Truth or Drink</Text>
        <Text>rules...</Text>
        <Text>Would you Rather</Text>
        <Text>rules...</Text>       
      </View>
    </DialogContent>
  );
};

const styles = StyleSheet.create({
  container: {},
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

