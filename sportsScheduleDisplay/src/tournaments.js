import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { sportTournaments } from './data';
import TournamentPoster from './TournamentPoster'
import TournamentPopup from './tournamentPopup'

export default class Sports extends Component {

  state = {
    popupIsOpen: false,
  }

  openTournament = (tournament) => {
    this.setState({
      popupIsOpen: true,
      tournament,
    });
  }

  closeTournament = () => {
    this.setState({
      popupIsOpen: false,
    });
  }

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
        <TournamentPopup
          tournament={this.state.tournament}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeTournament}
        />
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
