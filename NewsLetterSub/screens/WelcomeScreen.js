import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  View,
  Pressable,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.logo}
            source={require("../img/littleLemonLogo.png")}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={"Logo Photo"}
          />
        </View>

        <Text style={styles.regularText}>
          Little Lemon {"\n"}Your Local Mediterranean Bistro
        </Text>

        <Pressable
          onPress={() => navigation.navigate("Subscribe")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "black",
    textAlign: "center",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  logo: {
    width: 150,
    height: 300,
    marginTop: 100,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#F4CE14",
    borderColor: "#F4CE14",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
});
