import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CodePush from "react-native-code-push";

class App extends Component {

  render () {
    return (
  <View>
      <Text>Hello world 111!!</Text>
  </View>

    );
  }
}
//set check frequency options
const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START };
const myApp = CodePush(codePushOptions)(App);

AppRegistry.registerComponent('myApp', () => myApp);

export default myApp;