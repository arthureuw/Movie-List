import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';
import {getCreditsFromMovie} from '../../service/movieApi';

const MovieCasting = (props) => {
  const [actors, setActors] = useState([{}]);

  useEffect(() => {
    getCreditsFromMovie(props.movieId).then((res) => {
      setActors(res.data.cast);
    });
  });

  return (
    <View>
      <FlatList
        horizontal
        scrollEnabled={true}
        data={actors}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <View style={styles.body}>
            <Image
              style={styles.moviePoster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
              }}
            />
            <Text
              style={{
                color: 'white',
                width: 95,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <Text style={{color: 'white', width: 95, height: 50, fontSize: 10}}>
              {item.character}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default MovieCasting;

const styles = StyleSheet.create({
  body: {
    margin: 20,
    backgroundColor: '#0f0f13',
    borderRadius: 8,
    height: 220,
  },
  moviePoster: {
    width: 100,
    height: 130,
    borderRadius: 8,
  },
});
