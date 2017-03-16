import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { sportTournaments } from './data';
import TournamentPoster from './TournamentPoster'

export default class Sports extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVeritcalScrollIndicator={false}
        >
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

const styles = StyleSheet.create ({
  container: {
    paddingTop: 20,
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
