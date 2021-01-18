import React, {useState, useEffect} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {Content, Left} from 'native-base';

const MovieDetails = ({navigation, route}) => {
  const [movie, setMovie] = useState(route.params.movie);

  return (
    <Content style={styles.container}>
      <Image
        style={styles.poster}
        source={{
          uri: movie.url,
        }}
      />
      <View style={styles.view} />
      <Text style={styles.mainText}>{movie.title}</Text>
    </Content>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0b0b0e',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
  },
  view: {
    height: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#A1030B',
    marginBottom: 20,
  },
  poster: {
    flex: 1,
    height: 400,
  },
});
