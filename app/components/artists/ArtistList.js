'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	ListView,
	Button,
	View,
	Modal,
	TouchableHighlight
} from 'react-native';
import { Artists } from '../../mockData';
import ArtistListItem from './ArtistListItem';

class ArtistList extends Component {
	constructor(props){
		super(props);
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(Artists),
		}
		props.navigation.state.params = {
			transition: 'forHorizontal'
		};
	}

	static navigationOptions = {
		headerTitle: '艺人'		
	};
	
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(artist) => <ArtistListItem artist={artist} navigate={navigate}/>}/>
			</View>
		);
	}
}
  
const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
		backgroundColor: '#111',
		paddingBottom: 55,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
});

module.exports = ArtistList;