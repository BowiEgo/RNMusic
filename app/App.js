/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RouterComponent from './RouterComponent';
import PlayerBar from './components/player/PlayerBar';
import PlayerBarMini from './components/player/PlayerBarMini';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RouterComponent></RouterComponent>
        {/* <PlayerBarMini></PlayerBarMini> */}
        <PlayerBar></PlayerBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('App', () => App);
