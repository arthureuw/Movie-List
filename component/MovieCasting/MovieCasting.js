import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';

const MovieCasting = (props) => {
  const [actors, setActors] = useState(props.actors);

  useEffect(() => {
    console.log(actors[0]);
  });

  return (
    <View>
      <FlatList
        horizontal
        scrollEnabled={true}
        data={actors}
        renderItem={({item}) => (
          <View style={styles.body}>
            <Image style={styles.moviePoster} source={{uri: item.photo}} />
            <Text style={{color: 'white'}}>{item.name}</Text>
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
  },
  moviePoster: {
    width: 100,
    height: 130,
    borderRadius: 8,
  },
});
