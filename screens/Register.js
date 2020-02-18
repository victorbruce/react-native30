import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Logo from "../components/Logo";
import firebase from "../config/firebase";

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        console.log("user-credentials ", userCredentials.user);
        return firebase
          .firestore()
          .collection("users")
          .doc(userCredentials.user.uid)
          .set(
            {
              email: this.state.email,
              name: this.state.name
            },
            { merge: ture }
          );
      })
      .then(() => console.log("collection creation successfull"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Logo />
          </View>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>

          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>Full name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              ></TextInput>
            </View>

            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>Email Address</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </View>

            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              ></TextInput>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
            <Text style={{ color: "#fff", fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          >
            <Text style={{ color: "#414959", fontSize: 13 }}>
              Don't have an account?{" "}
              <Text style={{ fontWeight: "bold", color: "#000" }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
  container: {
    flex: 1,
    paddingTop: 60
  },
  logo: {
    marginTop: 60
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 40,
    marginHorizontal: 30
  },
  inputTitle: {
    textTransform: "uppercase",
    fontSize: 10
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#000",
    color: "#fff",
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  }
});
