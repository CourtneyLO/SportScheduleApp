import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import Tournment from './tournament'

const RouteMapper = (route, navigator) => {

  if (route.name === 'tournament') {
    return <Tournament navigator={navigator}/>;
  }
};

export default class App extends Component {


  render() {
    return (
      <Navigator
        initialRoute={{ name: "tournament"}}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        renderScene={RouteMapper}
      />
    );
  }
}
