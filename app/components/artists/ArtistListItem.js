'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Button from 'react-native-button';

class ArtistListItem extends Component {
  constructor(props){
		super(props);
	}

  _goRoute() {
    this.props.navigate('Artist', {transition: 'forHorizontal'});
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this._goRoute.bind(this)}
        delayPressOut={10}
        underlayColor="#ea4b54">
        <View>
          <Image
            style={styles.artistBg}
            resizeMode="cover"
            source={{uri: this.props.artist.background}}>
            <View style={styles.container}>
              <Text style={styles.artistName}>{this.props.artist.name}</Text>
              <Text style={styles.artistSongs}>{this.props.artist.songs.length} songs</Text>
            </View>
          </Image>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingTop: 20,
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  artistName: {
    color: "#FFF",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5
  },
  artistSongs: {
    color: "#CCC",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "300",
    fontSize: 14
  },
})

module.exports = ArtistListItem;