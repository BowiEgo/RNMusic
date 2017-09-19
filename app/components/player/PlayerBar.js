'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  ListView,
  View
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

class PlayerBar extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<MaterialIcons name="delete-forever" size={26} color="darkgray" />
				<MaterialIcons name="skip-previous" size={40} color="#ff8088" />
				<FontAwesomeIcon name="play-circle" size={52} color="#ff8088" />
				<MaterialIcons name="skip-next" size={40} color="#ff8088" />
				<MaterialIcons name="playlist-play" size={26} color="darkgray" />
			</View>
		);
	}
}

const {height, width} = Dimensions.get('window')

  
const styles = StyleSheet.create({
	container: {
    // flex: 1,
    width: width,
    height: 64,
    position: 'absolute',
    bottom: 0,
		backgroundColor: 'mintcream',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		elevation: 20,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5
	}
});

module.exports = PlayerBar;