import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Content, CardItem, Left, Body, Icon} from 'native-base';

const MovieCard = (props) => {
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
              <Text style={styles.subText}>
                ({props.movie.release_date.slice(0, 4)})
              </Text>
            </Text>
            <Text>
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
            </Text>
            <Text style={styles.subText}>{props.movie.genre_ids}</Text>
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
