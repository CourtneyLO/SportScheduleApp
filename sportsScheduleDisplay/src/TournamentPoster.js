import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import { defaultStyles } from './styles';

const { width, height } = Dimensions.get('window');

const cols = 2, rows = 2;

export default class TournamentPoster extends Component {

  static propTypes = {
    tournament: PropTypes.object.isRequired,
    onOpen: PropTypes.func.isRequired,
  }

  render() {
    const { tournament, tournament: { title, poster, dates}, onOpen } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(tournament)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: poster }} style={styles.image}/>
        </View>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.dates} numberOfLines={1}>{dates}</Text>
      </TouchableOpacity>
    );
  }
}

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
