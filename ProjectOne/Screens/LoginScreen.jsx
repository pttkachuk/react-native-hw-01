import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import background from "../images/registration-bg.jpg";
import { useNavigation } from "@react-navigation/native";
const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(initialState);
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const onChangeEmail = (text) => {
    setState((prevState) => ({ ...prevState, email: text.trim() }));
  };
  const onChangePassword = (text) => {
    setState((prevState) => ({ ...prevState, password: text.trim() }));
  };

  const onLoginClick = () => {
    //Alert.alert("Welcome", `${state.email}`);
    console.log(`Email:${state.email}, Password:${state.password}`);
    navigation.navigate("PostScreen");
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(), setIsShowKeybord(false);
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.containerKeyBoard}
            keyboardVerticalOffset={-240}
          >
            <View
              style={{
                ...styles.innerContainer,
                height: isShowKeybord ? 500 : 490,
              }}
            >
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={[styles.input, isEmailFocused && styles.inputFocus]}
                onFocus={() => {
                  setIsShowKeybord(true);
                  setIsEmailFocused(true);
                  setIsPasswordFocused(false);
                }}
                onBlur={() => setIsEmailFocused(false)}
                onChangeText={onChangeEmail}
                value={state.email}
                placeholder="Адреса електронної пошти"
                autoComplete="email"
                keyboardType="email-address"
              />
              <TextInput
                style={[styles.input, isPasswordFocused && styles.inputFocus]}
                onFocus={() => {
                  setIsShowKeybord(true);
                  setIsPasswordFocused(true);
                  setIsEmailFocused(false);
                }}
                onBlur={() => setIsPasswordFocused(false)}
                onChangeText={onChangePassword}
                value={state.password}
                placeholder="Пароль"
                autoComplete="password"
                secureTextEntry={hidePassword}
              />
              <TouchableOpacity style={styles.showPassword} activeOpacity={0.5}>
                <Text
                  style={styles.showPasswordText}
                  onPress={() => {
                    setHidePassword(!hidePassword);
                  }}
                >
                  {hidePassword ? "Показати" : "Приховати"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={onLoginClick}
              >
                <Text style={styles.titlebutton}>Увійти</Text>
              </TouchableOpacity>
              <Text style={styles.titletext}>
                Немає акаунту?
                <Text
                  onPress={() => navigation.navigate("Registration")}
                  style={{ textDecorationLine: "underline" }}
                >
                  Зареєструватися
                </Text>
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  containerKeyBoard: {
    justifyContent: "flex-end",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    lineHeight: 35,
    letterSpacing: 0.3,
    marginTop: 32,
    marginBottom: 32,
  },
  input: {
    width: 343,
    height: 50,
    margin: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#F6F6F6",
  },
  inputFocus: {
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20,
  },
  titlebutton: {
    color: "#FFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  showPassword: {
    top: -40,
    left: 130,
  },
  showPasswordText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  titletext: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
});
