import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  function onNewsletterButtonPressed() {
    navigation.navigate("Subscribe");
  }

  return (
    <View style={styles.body}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Little Lemon, {"\n"} Your Local Mediterranean Bistro
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onNewsletterButtonPressed}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#495E57",
  },
  button: {
    backgroundColor: "#495E57",
    color: "white",
    borderRadius: 10,
    margin: 20,
    padding: 20,
    alignSelf: "stretch",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
