import * as React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { validateEmail, ValidateEmail } from "../utils";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = React.useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={90}
    >
      <ScrollView>
        <View style={styles.imgWraper}>
          <Image
            style={styles.img}
            source={require("../logo.png")}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={"Little Lemon gray Logo"}
          />
        </View>
        <Text style={styles.description}>
          Subscribe to our newsletter for our latest delicious recipes!{" "}
        </Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Type your email"
          keyboardType={"email-address"}
          value={email}
          onChangeText={setEmail}
        />
        {validateEmail(email) ? (
          <Pressable
            style={styles.subscribeButton}
            backgroundColor="#495E57"
            borderColor="#495E57"
            onPress={() => {
              Alert.alert("Thanks for subscribing, stay tuned!");
            }}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.subscribeButton}
            disabled="true"
            backgroundColor="#b7b7b7"
            borderColor="#b7b7b7"
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  description: {
    marginTop: 60,
    paddingHorizontal: 15,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  imgWraper: {
    marginTop: 40,
    alignItems: "center",
  },
  img: {
    height: 120,
    width: 120,
    tintColor: "#495E57",
  },
  emailInput: {
    fontSize: 18,
    padding: 8,
    margin: 20,
    borderColor: "#495E57",
    borderWidth: 2,
    borderRadius: 10,
  },
  subscribeButton: {
    fontSize: 22,
    padding: 8,
    margin: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});
