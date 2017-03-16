import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheets,
  Text,
  View,
} from 'react-native';

import { sportTournaments } from './data';
import TournamentPoster from './TournamentPoster'

export default class Sports extends Component {

  render() {
    return (
      <View>
        <ScrollView>
          {sportTournaments.map((tournament, index) => <TournamentPoster
            tournament={tournament}
            onOpen={this.openTournament}
            key={index}
          />)}
        </ScrollView>
      </View>
    );
  }
}
