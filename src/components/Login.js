import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Alert
} from "react-native";
import Logo from "./Logo";
import { login } from "../utils/api";
import { orange, gray, black } from "../utils/colors";

const Login = ({ navigation }) => {

  // Keep track of the current border colour of the textInput box
  const [borderColour, setBorderColour] = useState({});

  // Set the border color to black when the textInput box is clicked
  const handleFocus = name => {
    setBorderColour({ [name]: true });
  };

  // Set the border color back to the default colour when it is not being clicked
  const handleBlur = name => {
    setBorderColour({ [name]: false });
  };

  // Control the login form input
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  // Spread the previous state data and the new state  data
  const handleInput = details => {
    setLoginDetails(loginDetails => ({ ...loginDetails, ...details }));
  };

  /* If the response contains a token then navigate to the login page then reset the
     login form to the default state else return an  alert with the error message */
  const handleLogin = () => {
    login(loginDetails).then(response => {
      if (response.token) {
        setLoginDetails({
          email: "",
          password: ""
        });
        navigation.navigate("Friends");
      } else {
        Alert.alert(response.error);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <TextInput
            placeholder="Email"
            style={[
              styles.inputField,
              { borderColor: borderColour.email ? black : gray }
            ]}
            onChangeText={text => handleInput({ email: text })}
            value={loginDetails.email || ""}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
          />
          <TextInput
            placeholder="Password"
            style={[
              styles.inputField,
              { borderColor: borderColour.password ? black : gray }
            ]}
            secureTextEntry={true}
            onChangeText={text => handleInput({ password: text })}
            value={loginDetails.password || ""}
            onFocus={() => handleFocus("password")}
            onBlur={() => handleBlur("password")}
          />
          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  inputField: {
    borderColor: gray,
    height: 40,
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 1,
    marginBottom: 20,
    width: "80%",
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  },

  button: {
    padding: 10,
    backgroundColor: orange,
    marginTop: 10,
    width: "60%",
    alignSelf: "center"
  }
});

export default Login;
