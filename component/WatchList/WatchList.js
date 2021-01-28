import React, {useEffect, useState} from 'react';
import {Button, Icon, Text, SwipeRow, Content} from 'native-base';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import MovieCard from '../MovieCard/MovieCard';

const WatchList = ({route}) => {
  const [toWatchMovie, settoWatchMovie] = useState(route.params.movie);

  return (
    <Content style={{backgroundColor: '#0b0b0e'}}>
      <Text style={styles.mainText}> Welcome To Your WatchList</Text>
      <FlatList
        style={styles.bottom}
        scrollEnabled={true}
        data={toWatch}
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

export default WatchList;

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
