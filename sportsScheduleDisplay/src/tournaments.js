import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheets,
  Text,
  View,
} from 'react-native';

import { sportTournaments } from './data';

export default class Sports extends Component {

  render() {
    return (
      <View>
        <ScrollView>
          {sportTournaments.map((tournament, index) => <Text>{tournement.title}</Text>)}
        </ScrollView>
      </View>
    );
  }
}
