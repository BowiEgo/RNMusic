'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class PlayerBarMini extends Component {
	constructor(props){
		super(props);
  }

	render() {
		return (
			<View
        clipChildren="false" 
        style={styles.container}>
        <View style={styles.playerBar}>
          <Image
            style={styles.thumbnail}
            resizeMode="cover"
            source={{uri: 'https://img1.doubanio.com/lpic/s26036007.jpg'}} />
          <View style={styles.brief}>
            <Text style={{fontSize: 16, color: '#807474', lineHeight: 20}}>Giorgio</Text>
            <Text style={{fontSize: 10, color: '#b1b1b1', lineHeight: 20}}>Daft Punk</Text>
          </View>
          <View style={styles.duration}>
            <MaterialIcons name="access-time" size={12} color="darkgray" />
            <Text style={{fontSize: 10, color: '#b1b1b1'}}>05:20</Text>
          </View>
        </View>
          <View style={styles.playBtn}>
            <View style={{backgroundColor: 'transparent'}}>
              <MaterialIcons.Button onPress={() => alert('pause')} name="pause" size={26} iconStyle={{transform: [{translateX: 2},{translateY: 2}]}} backgroundColor="transparent" color="#ff8088"></MaterialIcons.Button>
            </View>
          </View>
			</View>
		);
	}
}

const {height, width} = Dimensions.get('window')

  
const styles = StyleSheet.create({
  container: {
    height: 84,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent'
  },
	playerBar: {
    width: width,
    height: 64,
		backgroundColor: '#fff',
		flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 6,
		alignItems: 'center',
		elevation: 7,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    overflow: 'visible',
    transform: [{translateY: 20}],
  },
  thumbnail: {
    width: width * 0.13,
    height: width * 0.13,
  },
  brief: {
    flex: 0.69,
    marginLeft: width * 0.06,
  },
  duration: {
    flex: 0.14,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  playBtn: {
    width: 46,
    height: 46,
    position: 'absolute',
    right: width * 0.12,
    top: 2,
    // transform: [{translateX: 56}, {translateY: -26}],
    borderRadius: 50,
		backgroundColor: '#fff',
    elevation: 8,
    shadowOffset: {width: 0, height: 4},
    shadowColor: 'grey',
    shadowOpacity: 0.4,
    shadowRadius: 5,
  }
});

module.exports = PlayerBarMini;