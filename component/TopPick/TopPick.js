import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Icon, Text, Left, Content, Body, CardItem} from 'native-base';

const TopPick = (props) => {
  return (
    <Content style={{flexDirection: 'row', flex: 1}} scrollEnabled={false}>
      <Text style={styles.mainTitle}>Top Pick Of The Week</Text>
      <View style={{flex: 0}}>
        <CardItem style={{backgroundColor: '#0b0b0e'}}>
          <Left style={{flex: 0.8}}>
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${props.topPick.poster_path}`,
              }}
            />
          </Left>
          <Body style={styles.body}>
            <Text style={styles.spacingText}>
              <Text style={styles.mainText}>{props.topPick.title} </Text>
              <Text style={styles.subText}>({props.topPick.release_date})</Text>
            </Text>
            <Text style={styles.spacingText}>
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
              <Icon style={styles.iconText} type="FontAwesome" name="star" />
            </Text>
            <Text style={styles.subText}>{props.topPick.genre_ids}</Text>
          </Body>
        </CardItem>
      </View>
    </Content>
  );
};

export default TopPick;

const styles = StyleSheet.create({
  body: {
    margin: 15,
    justifyContent: 'center',
  },
  poster: {
    width: 172,
    height: 256,
    borderRadius: 8,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    margin: 15,
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
  spacingText: {
    paddingBottom: 8,
  },
});
