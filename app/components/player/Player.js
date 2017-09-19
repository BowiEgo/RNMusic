'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	ListView,
	ScrollView,
	View,
	Image,
	Dimensions,
	Animated,
	TouchableHighlight
} from 'react-native';
import Interactable from 'react-native-interactable';
// import Sound from 'react-native-sound';
let Sound = require('react-native-sound');
// Enable playback in silence mode (iOS only)
Sound.setCategory('Playback');

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// console.log(Dimensions);
const Screen = Dimensions.get('window');

let soundTrack = new Sound('https://www.freesound.org/data/previews/208/208096_3767678-lq.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + soundTrack.getDuration() + 'number of channels: ' + soundTrack.getNumberOfChannels());
});

// Play the sound with an onEnd callback
// soundTrack.play((success) => {
//   if (success) {
//     console.log('successfully finished playing');
//   } else {
//     console.log('playback failed due to audio decoding errors');
//     // reset the player to its uninitialized state (android only)
//     // this is the only option to recover after an error occured and use the player again
//     soundTrack.reset();
//   }
// });

soundTrack.play();

class Player extends Component {
	constructor(props){
		super(props);
		this._deltaX = new Animated.Value(0);
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.scrollContainer}>
					<Interactable.View style={styles.interactableContainer}
						horizontalOnly={true}
						snapPoints={[
							{x: 390},
							{x: 0, damping: 0.8},
							{x: -390}
						]}
						animatedValueX={this._deltaX}>
						<Animated.View style={[styles.card, {
							transform: [{
								rotate: this._deltaX.interpolate({
									inputRange: [-250, 0, 250],
									outputRange: ['10deg', '0deg', '-10deg']
								})
							}]
						}]}>

							<Image 
							resizeMode="cover"
							style={styles.image} 
							source={{uri: 'https://img3.doubanio.com/lpic/s4712596.jpg'}} />

							<Animated.View style={[styles.overlay, {backgroundColor: '#de6d77'}, {
								opacity: this._deltaX.interpolate({
									inputRange: [-120, 0],
									outputRange: [0.8, 0],
									extrapolateLeft: 'clamp',
									extrapolateRight: 'clamp'
								})
							}]}>
								<MaterialCommunityIcons name="skip-next" size={100} color="#fff" />
							</Animated.View>

							<Animated.View style={[styles.overlay, {backgroundColor: '#2f9a5d'}, {
								opacity: this._deltaX.interpolate({
									inputRange: [0, 120],
									outputRange: [0, 0.8],
									extrapolateLeft: 'clamp',
									extrapolateRight: 'clamp'
								})
							}]}>
								<MaterialCommunityIcons name="skip-previous" size={100} color="#fff" />
							</Animated.View>

						</Animated.View>
					</Interactable.View>
					<View style={styles.songBrief}>
						<Text style={styles.songName}>The Width Of A Circle</Text>
						<Text style={styles.artistName}>David Bowie </Text>
					</View>
					<View style={styles.comment}>
						<View style={styles.secTitle}>
							<View style={styles.secTitleLeft}>
								<Text style={styles.secTitleName}>评论</Text>
								<Text style={styles.commentNum}>52条</Text>
							</View>
							<TouchableHighlight>
								<Text style={styles.secBtn}>我来说两句</Text>
							</TouchableHighlight>
						</View>
						<View style={styles.commentItem}>
							<Image 
								resizeMode='cover'
								style={{width: 40, height: 40, borderRadius: 40}}
								source={{uri: 'https://img3.doubanio.com/icon/u1232432-213.jpg'}} />
							<View style={styles.commentMain}>
								<Text style={styles.commentUser}>JUNWK1334</Text>
								<Text style={styles.commentContent}>欺骗世界的男人</Text>
								<Text style={styles.commentTime}>4月前</Text>
							</View>
							<MaterialCommunityIcons style={{position: 'absolute', right: 20, bottom: 20}} name="thumb-up" size={20} color="grey" />
						</View>
						<View style={styles.commentItem}>
							<Image 
								resizeMode='cover'
								style={{width: 40, height: 40, borderRadius: 40}}
								source={{uri: 'https://img3.doubanio.com/icon/u4660336-40.jpg'}} />
							<View style={styles.commentMain}>
								<Text style={styles.commentUser}>Ziggy Stardust</Text>
								<Text style={styles.commentContent}>大半夜听这么性感的一张专，真的是太喜欢鲍鱼的唱腔了。每首吉他伴奏都超级棒，重点推一下专里比较冷门的一首The Width Of A Circle.</Text>
								<Text style={styles.commentTime}>2月前</Text>
							</View>
							<MaterialCommunityIcons style={{position: 'absolute', right: 20, bottom: 20}} name="thumb-up" size={20} color="grey" />
						</View>
						<View style={styles.commentItem}>
							<Image 
								resizeMode='cover'
								style={{width: 40, height: 40, borderRadius: 40}}
								source={{uri: 'https://img3.doubanio.com/icon/u2801698-46.jpg'}} />
							<View style={styles.commentMain}>
								<Text style={styles.commentUser}>blue shoes</Text>
								<Text style={styles.commentContent}>封面太妖娆</Text>
								<Text style={styles.commentTime}>1月前</Text>
							</View>
							<MaterialCommunityIcons style={{position: 'absolute', right: 20, bottom: 20}} name="thumb-up" size={20} color="grey" />
						</View>
						<View style={styles.moreComment}>
							<Text style={{color: '#ff8088', fontSize: 12}}>查看更多精彩评论</Text>
						</View>
					</View>
				</ScrollView>
      </View>
		);
	}
}
  
const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    width: Screen.width + 80,
		alignSelf: 'center',
		paddingBottom: 64
	},
	scrollContainer: {
		flex: 1
	},
	interactableContainer: {
		width: Screen.width,
		height: Screen.height * 0.56,
		alignItems: 'center',
    backgroundColor: '#fff',
	},
  card: {
    width: Screen.width * 0.8,
		marginTop: 40,
		elevation: 12,
		shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5
  },
  image: {
		borderRadius: 3,
    width: Screen.width * 0.8,
    height: Screen.width * 0.8,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlayText: {
    fontSize: 60,
    color: 'white'
	},
	songBrief: {
		width: Screen.width,
		alignItems: 'center',
		backgroundColor: '#fff',
		// transform: [{translateY: -20}],
		paddingBottom: 20,
	},
  songName: {
		width: Screen.width * 0.8,
		// transform: [{translateY: -10}],
    textAlign: 'center',
    // marginTop: 4,
    fontSize: 16,
    color: '#333'
	},
	artistName: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 13,
    color: '#333'
	},
	secTitle: {
		flex: 1,
		// height: 40,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 14,
		paddingRight: 14,
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	secBtn: {
		color: '#fff',
		borderRadius: 20,
		fontSize: 12,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 14,
		paddingRight: 14,
		backgroundColor: '#ff8088',
	},
	comment: {
		marginTop: 10,
		marginBottom: 30,
		backgroundColor: '#fff',
	},
	secTitleLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		borderLeftWidth: 4,
		borderColor: '#ff8088',
		paddingLeft: 10,
	},
	secTitleName: {
		color: '#333',
		fontSize: 15
	},
	commentNum: {
		marginLeft: 10,
		fontSize: 13,
		color: '#ff8088'
	},
	commentItem: {
		paddingLeft: 14,
		paddingRight: 14,
		paddingTop: 10,
		paddingBottom: 25,
		borderBottomWidth: 1,
		borderColor: 'whitesmoke',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	commentMain: {
		flex: 0.94,
		marginLeft: 10,
		justifyContent: 'space-between'
	},
	commentUser: {
		marginTop: 4,
		fontSize: 14,
		color: 'grey'
	},
	commentContent: {
		fontSize: 14,
		marginTop: 6,
		marginBottom: 6,
		color: '#333'
	},
	commentTime: {
		fontSize: 10,
		color: 'grey'
	},
	moreComment: {
		flex: 1,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'space-around'
	}
});

module.exports = Player;