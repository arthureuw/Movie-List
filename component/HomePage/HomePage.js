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
      title: 'Deadpool',
      release: '2016',
      genre: 'Action, Comedy, Sci Fi',
      overview:
        "Deadpool, est l'anti-héros le plus atypique de l'univers Marvel. À l'origine, il s'appelle Wade Wilson : un ancien militaire des Forces Spéciales devenu mercenaire. Après avoir subi une expérimentation hors norme qui va accélérer ses pouvoirs de guérison, il va devenir Deadpool. Armé de ses nouvelles capacités et d'un humour noir survolté, Deadpool va traquer l'homme qui a bien failli anéantir sa vie.",
      actors: [
        {
          name: 'Joaquin Phoenix',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/nXMzvVF6xR3OXOedozfOcoA20xh.jpg',
        },
        {
          name: 'Robert De Niro',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
        },
        {
          name: 'Joaquin Phoenix',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/nXMzvVF6xR3OXOedozfOcoA20xh.jpg',
        },
        {
          name: 'Robert De Niro',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
        },
        {
          name: 'Joaquin Phoenix',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/nXMzvVF6xR3OXOedozfOcoA20xh.jpg',
        },
        {
          name: 'Robert De Niro',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
        },
        {
          name: 'Joaquin Phoenix',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/nXMzvVF6xR3OXOedozfOcoA20xh.jpg',
        },
        {
          name: 'Robert De Niro',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
        },
      ],
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
      actors: [
        {
          name: 'Joaquin Phoenix',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/nXMzvVF6xR3OXOedozfOcoA20xh.jpg',
        },
        {
          name: 'Robert De Niro',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
        },
      ],
      url:
        'https://images-na.ssl-images-amazon.com/images/I/710MAaieKaL._AC_SL1481_.jpg',
    },
    {
      id: 2,
      title: 'Men in Black : International',
      release: '2019',
      genre: 'Comedy, Sci Fi',
      overview:
        'Les Men In Black ont toujours protégé la Terre de la vermine de l’univers. Dans cette nouvelle aventure, ils s’attaquent à la menace la plus importante qu’ils aient rencontrée à ce jour : une taupe au sein de leur organisation.',
      actors: [
        {
          name: 'Joaquin Phoenix',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/nXMzvVF6xR3OXOedozfOcoA20xh.jpg',
        },
        {
          name: 'Robert De Niro',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
        },
      ],
      url:
        'https://www.themoviedb.org/t/p/w1280/p21MKFhq7Y0wdCppKQh5xTXaap0.jpg',
    },
    {
      id: 3,
      title: 'Soul',
      release: '2020',
      genre: 'Animation, Comédie, Drame, Musique, Fantastique',
      overview:
        'Passionné de jazz et professeur de musique dans un collège, Joe Gardner a enfin l’opportunité de réaliser son rêve : jouer dans le meilleur club de jazz de New York. Mais un malencontreux faux pas le précipite dans le « Grand Avant » – un endroit fantastique où les nouvelles âmes acquièrent leur personnalité, leur caractère et leur spécificité avant d’être envoyées sur Terre. Bien décidé à retrouver sa vie, Joe fait équipe avec 22, une âme espiègle et pleine d’esprit, qui n’a jamais saisi l’intérêt de vivre une vie humaine. En essayant désespérément de montrer à 22 à quel point l’existence est formidable, Joe pourrait bien découvrir les réponses aux questions les plus importantes sur le sens de la vie.',
      actors: [
        {
          name: 'Joaquin Phoenix',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/nXMzvVF6xR3OXOedozfOcoA20xh.jpg',
        },
        {
          name: 'Robert De Niro',
          photo:
            'https://www.themoviedb.org/t/p/w276_and_h350_face/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
        },
      ],
      url:
        'https://www.themoviedb.org/t/p/w1280/2NNebYVf8XAbJzVZTM3razRaZKA.jpg',
    },
  ];

  return (
    <Content scrollEnabled={false} style={{backgroundColor: '#0b0b0e'}}>
      <View style={{backgroundColor: '#0b0b0e'}}>
        <TopPick />
        <Text style={styles.mainText}>Suggested for you</Text>
      </View>
      {/*<ScrollView lol*/}
      {/*  style={styles.bottom}*/}
      {/*  contentInsetAdjustmentBehavior="automatic">*/}
      <FlatList
        style={styles.bottom}
        scrollEnabled={true}
        data={movieArray}
        keyExtractor={(item) => item.id}
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
      {/*</ScrollView>*/}
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
