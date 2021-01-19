import {
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Button, Icon, Text, SwipeRow, Content} from 'native-base';
import React from 'react';

import TopPick from '../TopPick/TopPick';
import MovieCard from '../MovieCard/MovieCard';

const HomePage = ({navigation}) => {
  const movieArray = [
    {
      id: 0,
      title: 'Men In Black: International',
      release: '2016',
      genre: 'Action, Comedy, Sci Fi',
      overview:
        "Deadpool, est l'anti-héros le plus atypique de l'univers Marvel. À l'origine, il s'appelle Wade Wilson : un ancien militaire des Forces Spéciales devenu mercenaire. Après avoir subi une expérimentation hors norme qui va accélérer ses pouvoirs de guérison, il va devenir Deadpool. Armé de ses nouvelles capacités et d'un humour noir survolté, Deadpool va traquer l'homme qui a bien failli anéantir sa vie.",
      url:
        'https://global-img.gamergen.com/deadpool-2-affiche-flashdance_0900884776.jpg',
    },
    {
      id: 1,
      title: 'Joker',
      release: '2019',
      genre: 'Crime, Drama, Thriller',
      overview:
        'Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.',
      url:
        'https://images-na.ssl-images-amazon.com/images/I/710MAaieKaL._AC_SL1481_.jpg',
    },
  ];

  return (
    <Content scrollEnabled={false} style={{backgroundColor: '#0b0b0e'}}>
      <View style={{backgroundColor: '#0b0b0e'}}>
        <TopPick />
        <Text style={styles.mainText}>Suggested for you</Text>
      </View>
      <ScrollView
        style={styles.bottom}
        contentInsetAdjustmentBehavior="automatic">
        <FlatList
          scrollEnabled={false}
          data={movieArray}
          renderItem={({item}) => (
            <SwipeRow
              style={styles.mainColor}
              key={`${item.id} - ${item.title}`}
              leftOpenValue={75}
              rightOpenValue={-75}
              disableRightSwipe={true}
              body={
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MovieDetails', {movie: item})
                  }
                  style={{flex: 1}}>
                  <MovieCard movie={movieArray[item.id]} />
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
      </ScrollView>
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
    flex: 1,
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
