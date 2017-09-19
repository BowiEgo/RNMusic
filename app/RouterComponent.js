'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
	StyleSheet
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ArtistList from './components/artists/ArtistList';
import Artist from './components/artists/Artist';
import Player from './components/player/Player';

const TransitionConfiguration = () => ({
  screenInterpolator: (sceneProps) => {
    const { scene } = sceneProps;
    const { route } = scene;
    const params = route.params || {};
    const transition = params.transition || 'forVertical';
    return CardStackStyleInterpolator[transition](sceneProps);
  },
});

const RouterComponent = StackNavigator({
  ArtistList: { 
    screen: ArtistList,
  },
  Artist: { 
    screen: Artist,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: "transparent",
      }
    },
  },
  Player: { 
    screen: Player,
    navigationOptions: {
      headerTintColor: '#ff8088',
      headerStyle: {
        backgroundColor: "#fff",
        elevation: 0
      }
    },
  }
},{
  headerMode: 'screen',
  navigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      height: 48,
      backgroundColor: "#111",
    },
    headerTitleStyle: {
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: '300'
    }
  },
  tabBarOptions: {
    showIcon: true,
  },
  transitionConfig: TransitionConfiguration,
});

const defaultGetStateForAction = RouterComponent.router.getStateForAction;

RouterComponent.router.getStateForAction = (action, state) => {
  if (state && action.type === 'PushTwoProfiles') {
    const routes = [
      ...state.routes,
      {key: 'A', routeName: 'ArtistList', params: { name: action.name1 }},
      {key: 'B', routeName: 'Artist', params: { name: action.name2 }},
      {key: 'c', routeName: 'Player', params: { name: action.name2 }},
    ];
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }
  return defaultGetStateForAction(action, state);
};


// class RouterComponent extends Component {
// 	constructor(props){
// 		super(props);
// 	}

//   render() {
//     return (
//       <Router style={ styles.container } hideNavBar={true}>
//         <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
//         <Schema name="bottom" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
//         {/* <Route name="artistList" component={ArtistList} initial={true} title="Artists"/> */}
//         {/* <Route name="artistList" hideNavBar={true} schema="bottom" component={Player} title="Come Together"/> */}
//       </Router>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#000',
//   }
// });

module.exports = RouterComponent;

