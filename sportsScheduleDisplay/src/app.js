import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import Sport from './tournaments'

const RouteMapper = (route, navigator) => {

  if (route.name === 'sport') {
    return <Sport navigator={navigator}/>;
  }
};

export default class App extends Component {


  render() {
    return (
      <Navigator
        initialRoute={{ name: "sport"}}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        renderScene={RouteMapper}
      />
    );
  }
}
