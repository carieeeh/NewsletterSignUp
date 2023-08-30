import * as React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <ScrollView style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.imgText}>LITTLE </Text>
        <View style={styles.imgWraper}>
          <Image
            style={styles.img}
            source={require("../logo.png")}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={"Little Lemon Logo"}
          />
        </View>
        <Text style={styles.imgText}> LEMON</Text>
      </View>
      <Text style={styles.description}>
        Little Lemon, Your local Mediterraniene Bistro
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
        style={styles.newsletterButton}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </ScrollView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  secondContainer: {
    marginTop: 100,
  },
  description: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  imgText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 30,
    color: "#495E57",
  },
  imgWraper: {
    alignItems: "center",
  },
  img: {
    height: 120,
    width: 120,
  },
  newsletterButton: {
    fontSize: 22,
    padding: 5,
    marginTop: 170,
    margin: 20,
    backgroundColor: "#495E57",
    borderColor: "#495E57",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});
