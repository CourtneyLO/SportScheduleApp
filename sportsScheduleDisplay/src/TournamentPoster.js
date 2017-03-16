import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheets,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import { defaultSyles } from './styles';

const { width, height } = Dimensions.get('window');

const cols = 3, rows = 3;

export default class TournamentPoster extends Component {

  static PropTypes = {
    tournament: PropTypes.Object.isRequired,
    onOpen: PropTypes.func.isRequired,
  }

  render() {
    const { movie, movie: { title, poster, dates}, isOpen } = this.props
    return (
      <TouchableOpacity styles={styles.container} onPress={() => onOpen(tournament)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: poster }} style={styles.image}/>
        </View>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.dates} numberOfLines={1}>{dates}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheets.create({
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
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject,
  },
  dates: {
    ...defaultSyles.text
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
})
