'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Platform,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import { ArtistHotSongs } from '../../mock/ArtistHotSongs';
import { latestAlbums } from '../../mock/latestAlbums';

class Artist extends Component {
  constructor(props){
		super(props);
  }
  
  static navigationOptions = {
    headerTitle: 'Daft Punk',
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: '300',
      alignSelf: 'center',
      marginRight: 60,
    }
	};

  _keyExtractor = (item, index) => index;

  _goRoute() {
    this.props.navigation.state.params = {
			transition: 'forVertical'
		};
    this.props.navigation.navigate('Player');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailWrapper}>
          <Image
            style={styles.thumbnail}
            resizeMode="cover"
            source={{uri: 'https://img1.doubanio.com/view/photo/photo/public/p2169701378.jpg'}}>
          </Image>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={{height: 195}}></View>
          <View style={styles.action}>
            <LinearGradient 
              start={{x: 0, y: -0.4}} end={{x: 0, y: 1.3}}
              locations={[0.3,1]}
              colors={['transparent', 'black']} 
              style={styles.linearGradient}></LinearGradient>
            <View style={styles.actionBtnPlay}>
              <MaterialIcons name="play-circle-outline" size={36} color="ghostwhite" />
              <Text style={{fontSize: 15, color: 'ghostwhite', marginLeft: 10}}>播放艺人电台</Text>
            </View>
            <View style={styles.actionBtnInteract}>
              <MaterialCommunityIcons name="heart-outline" size={26} color="ghostwhite" />
              <Text style={{fontSize: 10, color: 'ghostwhite'}}>收藏</Text>
            </View> 
            <View style={styles.actionBtnInteract}>
              <MaterialCommunityIcons name="comment-text-outline" size={26} color="ghostwhite" />
              <Text style={{fontSize: 10, color: 'ghostwhite'}}>评论</Text>
            </View>            
          </View>
          <View style={{backgroundColor: '#fff', paddingLeft: 10, paddingRight: 10, paddingTop: 30, paddingBottom: 30, margin: 0}}>
            <View>
              <Text style={{fontSize: 16, color: '#333'}}>艺人信息</Text>
              <Text style={styles.playerInfo}>Daft Punk是一支组建于1992年的法国乐队，乐队原名Darlin'，因组建初被英国著名的流行音乐周刊《Melody Maker》称为“傻朋克”(Daft Punk)，后将乐队命名为“Daft Punk”。他们以演奏电子乐为主，而在音乐中包含Harold Faltermeyer、Gary Numan、Bee Gees，Prince这些“新浪潮”和舞曲乐队和歌手的经典旋律。</Text>
            </View>
            {/* 热门歌曲start */}
            <View style={styles.songListContainer}>
              <View style={styles.listTitle}>
                <Text style={{fontSize: 16, color: '#333'}}>热门歌曲(292)</Text>
                <Text style={{fontSize: 12, color: 'silver'}}>更多</Text>
              </View>
              <FlatList 
              data={ArtistHotSongs}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => 
                <TouchableHighlight
                  onPress={this._goRoute.bind(this)}
                  delayPressOut={10}
                  underlayColor="rgba(0,0,0,0.3)">
                  <View style={styles.songList} onPress={this._goRoute.bind(this)}>
                    <Image 
                      style={styles.songThumbnail}
                      resizeMode="cover"
                      source={{uri: item.thumbnail}} />
                    <View style={styles.songInfo}>
                      <Text style={{color: 'dimgray'}}>{item.title}</Text>
                      <Text style={{fontSize: 12, color: 'slategrey'}}>Daft Punk</Text>
                    </View>
                    <MaterialCommunityIcons style={styles.songDetailBtn} name="dots-horizontal" size={26} color="dimgray" />
                  </View>
                </TouchableHighlight>
              }
              />
            </View>
            {/* 最新专辑start */}
            <View style={styles.latestAlbumContainer}>
              <View style={styles.listTitle}>
                <Text style={{fontSize: 16, color: '#333'}}>最新专辑</Text>
                <Text style={{fontSize: 12, color: 'silver'}}>更多</Text>
              </View>
              <View>
                <FlatList
                data={latestAlbums}
                keyExtractor={this._keyExtractor}
                numColumns={3}
                style={styles.albumList}
                renderItem={({item}) => 
                  <View style={styles.albumItemWrapper}>
                    <View style={styles.albumItem}>
                      <Image 
                        style={styles.albumThumbnail}
                        resizeMode="cover"
                        source={{uri: item.thumbnail}} />
                      <Text style={{fontSize: 13, color: 'dimgray', lineHeight: 20}} numberOfLines={1}>{item.title}</Text>
                      <Text style={{fontSize: 12, color: 'slategrey'}}>{item.time}</Text>
                      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 4}}>
                        {
                          item.rate &&
                          <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={item.rate / 2}
                            starSize={10}
                            starStyle={{marginRight: 2}}
                            starColor={'lightsalmon'}
                          />
                        }
                          <Text style={!item.rate ? {fontSize: 12, color: 'slategrey'} : {fontSize: 12, color: 'slategrey', marginLeft: 6}}>{item.rate || '暂无评分'}</Text>
                      </View>
                    </View>
                  </View>
                }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  thumbnailWrapper: {
    flex: 1,
    width: width,
    height: 260,
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{translateY: -56}],
  },
  thumbnail: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    width: width,
    height: height,
    transform: [{translateY: -56}],
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  actionBtnPlay: {
    flex: 0.7,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    backgroundColor: 'transparent'
  },
  actionBtnInteract: {
    flex: 0.1, 
    height: 66,
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 10, 
    backgroundColor: 'transparent'
  },
  linearGradient: {
    width: width,
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  playerInfo: {
    fontSize: 13, 
    color: '#333', 
    lineHeight: 18, 
    ...Platform.select({
      ios: {
        textAlign: 'justify'
      }
    })
  },
  listTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  songListContainer: {
    marginTop: 10
  },
  songList: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  songThumbnail: {
    width: width * 0.12,
    height: width * 0.12,
  },
  songInfo: {
    flex: 0.84,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  songDetailBtn: {
    flex: 0.08
  },
  latestAlbumContainer: {
    justifyContent: 'space-between'
  },
  albumList: {
    paddingTop: 8,
    paddingBottom: 8,
    // paddingLeft: width * 0.04
  },
  albumItemWrapper: {
    width: width * 0.34,
    alignItems: 'flex-start',
  },
  albumItem: {
    flex: 1,
    marginBottom: 10,
    marginRight: width * 0.04,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  albumThumbnail: {
    width: width * 0.26,
    height: width * 0.26,
  }
})

module.exports = Artist;