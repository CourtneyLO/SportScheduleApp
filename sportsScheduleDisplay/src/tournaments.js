import React, { Component } from 'react';
import {
  ListView,
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

var REQUEST_URL = 'http://localhost:3000/v1/tournaments.json'

import { defaultStyles } from './styles';

const { width, height } = Dimensions.get('window');

const cols = 2, rows = 2;
// import { sportTournaments } from './data';
// import TournamentPoster from './TournamentPoster'
// import TournamentPopup from './tournamentPopup'

export default class Sports extends Component {

  // getInitialState = () => {
  //   return {
  //     dataSource: new ListView.DataSource({
  //       rowHasChanged: (row1, row2) => row1 !== row2,
  //     }),
  //     loaded: false,
  //   };
  // };
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2,}),
      loaded: false,
    };
  };
  // state = {
  //   dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2,}),
  //   loaded: false,
  // }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      // console.log(responseData.tournaments[0])
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.tournaments),
        loaded: true,
      });
    })
    .done();
  };

  // state = {
  //   popupIsOpen: false,
  // }

  // openTournament = (tournament) => {
  //   this.setState({
  //     popupIsOpen: true,
  //     tournament,
  //   });
  // }
  //
  // closeTournament = () => {
  //   this.setState({
  //     popupIsOpen: false,
  //   });
  // }

  render() {
    if (!this.state.loaded) {
      console.log("LOADING!!!!!!!!!!")
      return this.renderLoadingView();
    }
    return (
      console.log("DATA"),
      console.log(this.state.dataSource),
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderTournament}
          style={styles.listView}
      />
    )
  };

  renderLoadingView = () => {
    console.log("LOADINGVIEW!!!!!!!!!!")
    return (
      <View style={styles.container}>
        <Text>Loading Tournaments...</Text>
      </View>
    );
  };

  renderTournament = (tournament) => {
    console.log("TOURNAMENT!!!!")
    console.log(tournament.tournament)
      return (
        <TouchableOpacity style={styles.container} onPress={() => onOpen(tournament)}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: tournament.tournament.poster }}
              style={styles.image}/>
          </View>
          <Text style={styles.title} numberOfLines={1}>{tournament.tournament.title}</Text>
          <Text style={styles.dates} numberOfLines={1}>{tournament.tournament.dates}</Text>
        </TouchableOpacity>
      );
    };
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 -20) / rows - 10,
    width: (width - 10)/ cols - 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
  },
  dates: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
})
