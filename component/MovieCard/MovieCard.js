import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {Header, Container, Content, Card, CardItem, Left, Body, Icon} from 'native-base';

const MovieCard = () => {
    return (
        <Container style={{flex: 1}}>
            <Header/>
            <Content>
                <Card style={{flex: 0}}>
                    <CardItem style={{backgroundColor: '#0b0b0e'}}>
                        <Left style={{flex: 0}}>
                            <Image
                                style={styles.moviePoster}
                                source={require('../../deadpool.jpg')}/>
                        </Left>
                        <Body style={styles.body}>
                            <Text>
                                <Text style={styles.mainText}>DeadPool </Text>
                                <Text style={styles.subText}>(2016)</Text>
                            </Text>
                            <Text>
                                <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                                <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                                <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                                <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                                <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                            </Text>
                            <Text style={styles.subText}>Action, Comedy, Sci Fi</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

export default MovieCard;

const styles = StyleSheet.create({
    body: {
        marginLeft: 10,
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
