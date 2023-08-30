import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  function onNewsletterButtonPressed() {
    navigation.navigate("Subscribe");
  }

  // Add welcome screen code here.
  return (
    <View flex={1}>
      <View style={styles.body}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Little Lemon, your local{"\n"}Mediterranean Bistro
        </Text>
      </View>
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
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1E6738",
    color: "white",
    borderRadius: 10,
    margin: 20,
    padding: 10,
    alignSelf: "stretch",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default WelcomeScreen;
