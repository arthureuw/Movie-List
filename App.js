import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    FlatList,
    TouchableOpacity,
    StatusBar, StyleSheet,
} from 'react-native';
import {Button, Icon, Text, Footer, FooterTab, Right, Header, Left, SwipeRow, Container, Content, List} from 'native-base';

import TopPick from './component/TopPick/TopPick'
import MovieCard from './component/MovieCard/MovieCard';

const App = () => {

    const movieArray = [
        {
            id: 0,
            title: 'DeadPool',
            release: '2016',
            genre: 'Action, Comedy, Sci Fi',
            url: 'https://global-img.gamergen.com/deadpool-2-affiche-flashdance_0900884776.jpg'
        },
        {
            id: 1,
            title: 'Joker',
            release: '2019',
            genre: 'Crime, Drama, Thriller',
            url: 'https://images-na.ssl-images-amazon.com/images/I/710MAaieKaL._AC_SL1481_.jpg'
        }
    ]

  return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.mainColor}>
        <View style={{ height: '100%', backgroundColor: '#0b0b0e'}}>
            <View style={{flex: 0.8}}>
                <TopPick/>
                <Text style={styles.mainText}>Suggested for you</Text>
            </View>
            <ScrollView style={styles.bottom}
                        contentInsetAdjustmentBehavior="automatic"
            >
                <FlatList scrollEnabled={false}
                          data={movieArray}
                          renderItem={({item}) => <SwipeRow style={styles.mainColor}
                              key={`${item.id}`}
                              leftOpenValue={75}
                              rightOpenValue={-75}
                              disableRightSwipe={true}
                              body={
                                  <TouchableOpacity
                                  // onPress={() => navigation.navigate('MovieDetails', {movie: item})}
                                  style={{flex: 1}}>
                                    <MovieCard movie={movieArray[item.id]}/>
                                  </TouchableOpacity>
                              }
                              right={
                                  <Button style={styles.mainColor}>
                                      <Icon style={styles.heartIcon} active type="FontAwesome" name="heart-o"/>
                                  </Button>
                              }
                          />}
                />
          </ScrollView>
        </View>
        </SafeAreaView>
      </>
  );
};

export default App;

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
