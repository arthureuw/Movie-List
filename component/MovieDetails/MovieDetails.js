import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import MovieCasting from '../MovieCasting/MovieCasting';

const MovieDetails = ({navigation, route}) => {
  const [movie, setMovie] = useState(route.params.movie);

  const overviewReducer = (overview) => {
    if (overview.length > 214) {
      return overview.slice(0, 214).concat('...');
    }
    return overview;
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundPoster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
      <Image
        style={styles.moviePoster}
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
      />
      <View style={styles.textPlacement}>
        <Text style={styles.mainText}>
          {movie.title}{' '}
          <Text style={styles.subText}>({movie.release_date.slice(0, 4)})</Text>
        </Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.secondText}>76% - User Score</Text>
        <Text style={styles.secondText}> Play Trailer </Text>
      </View>
      <View
        style={{
          height: 108,
          marginLeft: 20,
          marginRight: 20,
          overflow: 'hidden',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MovieDetails', {movie: movie})}>
          <Text style={styles.mainText}>Overview</Text>
        </TouchableOpacity>
        <Text style={styles.subText}>{overviewReducer(movie.overview)}</Text>
      </View>
      <View style={{flex: 1}}>
        <MovieCasting movieId={movie.id} />
      </View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0e',
  },
  textPlacement: {
    marginLeft: 142,
    height: 110,
    marginBottom: 12,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'white',
  },
  subText: {
    fontWeight: '300',
    fontSize: 15,
    color: '#92919d',
  },
  textBox: {
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 50,
  },
  secondText: {
    fontWeight: 'bold',
    flex: 0.5,
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  backgroundPoster: {
    height: 280,
    opacity: 0.4,
    marginBottom: 10,
  },
  moviePoster: {
    width: 124,
    height: 185,
    position: 'absolute',
    left: 20,
    top: 220,
  },
});
