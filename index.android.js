/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import App from './app/App';

export default class RNMusic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App></App>
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

AppRegistry.registerComponent('RNMusic', () => RNMusic);
