import React, {useEffect, useState} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Content, CardItem, Left, Body, Icon} from 'native-base';

const MovieCard = (props) => {
  const [movieGenres, setMovieGenres] = useState([]);
  const [allGenres, setAllGenres] = useState([
    {id: 28, name: 'Action'},
    {id: 12, name: 'Adventure'},
    {id: 16, name: 'Animation'},
    {id: 35, name: 'Comedy'},
    {id: 80, name: 'Crime'},
    {id: 99, name: 'Documentary'},
    {id: 18, name: 'Drama'},
    {id: 10751, name: 'Family'},
    {id: 14, name: 'Fantasy'},
    {id: 36, name: 'History'},
    {id: 27, name: 'Horror'},
    {id: 10402, name: 'Music'},
    {id: 9648, name: 'Mystery'},
    {id: 10749, name: 'Romance'},
    {id: 878, name: 'Science Fiction'},
    {id: 10770, name: 'TV Movie'},
    {id: 53, name: 'Thriller'},
    {id: 10752, name: 'War'},
    {id: 37, name: 'Western'},
  ]);

  const getGenresFromIds = async () => {
    const getGenres = [];
    await props.movie.genre_ids.map((id) => {
      allGenres.map((genre) => {
        if (id === genre.id) {
          getGenres.push(genre.name);
        }
      });
    });
    setMovieGenres(getGenres);
  };

  useEffect(() => {
    getGenresFromIds().then();
  }, []);

  return (
    <Content>
      <View style={{flex: 0}}>
        <CardItem style={{backgroundColor: '#0b0b0e'}}>
          <Left style={{flex: 0.4}}>
            <Image
              style={styles.moviePoster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`,
              }}
            />
          </Left>
          <Body style={styles.body}>
            <Text>
              <Text style={styles.mainText}>{props.movie.title} </Text>
              <Text style={styles.subText}>({props.movie.release_date})</Text>
            </Text>
            <Text>
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
            </Text>
            <Text style={styles.subText}>
              {movieGenres.map((genre) => (
                <Text key={genre.toString()}>{genre}, </Text>
              ))}
            </Text>
          </Body>
        </CardItem>
      </View>
    </Content>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
  },
  moviePoster: {
    width: 86,
    height: 128,
    borderRadius: 8,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  subText: {
    fontWeight: '300',
    fontSize: 15,
    color: '#92919d',
  },
  iconText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ff9e00',
  },
});
