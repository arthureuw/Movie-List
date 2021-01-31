import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Button, Icon, Text, SwipeRow, Content} from 'native-base';
import React, {useEffect, useState} from 'react';

import {getPopularMovieList} from '../../service/movieApi';

import TopPick from '../TopPick/TopPick';
import MovieCard from '../MovieCard/MovieCard';

const HomePage = ({navigation}) => {
  const [popularMovie, setPopularMovie] = useState([{}]);
  const [topPick, setTopPick] = useState({});
  const [watchList, setWatchList] = useState([{}]);

  const addToWatchList = (movie) => {
    let tmpWatchList;
    tmpWatchList = [...watchList, movie];
    setWatchList(tmpWatchList);
    console.log(watchList);
  };

  useEffect(() => {
    getPopularMovieList().then((res) => {
      setTopPick(res.data.results.shift());
      setPopularMovie(res.data.results);
    });
  }, []);

  return (
    <Content scrollEnabled={false} style={{backgroundColor: '#0b0b0e'}}>
      <View style={{backgroundColor: '#0b0b0e'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('WatchList', {watchList: watchList})
          }>
          <Text style={styles.mainText}>Favoris</Text>
        </TouchableOpacity>
        <TopPick topPick={topPick} />
        <Text style={styles.mainText}>Suggested for you</Text>
      </View>
      <FlatList
        style={styles.bottom}
        scrollEnabled={true}
        data={popularMovie}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <SwipeRow
            style={styles.mainColor}
            leftOpenValue={75}
            rightOpenValue={-75}
            disableRightSwipe={true}
            body={
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MovieDetails', {movie: item})
                }
                style={{flex: 1}}>
                <MovieCard movie={item} />
              </TouchableOpacity>
            }
            right={
              <Button style={styles.mainColor}>
                <Icon
                  style={styles.heartIcon}
                  active
                  onPress={() => addToWatchList(item)}
                  type="FontAwesome"
                  name="heart-o"
                />
              </Button>
            }
          />
        )}
      />
    </Content>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0b0b0e',
  },
  bottom: {
    height: 415,
  },
  mainColor: {
    backgroundColor: '#0b0b0e',
    borderColor: 'transparent',
  },
  heartIcon: {
    color: '#e21b38',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    margin: 15,
  },
});
