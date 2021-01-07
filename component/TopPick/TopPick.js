import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    FlatList,
    TouchableOpacity,
    StatusBar, StyleSheet, Image,
} from 'react-native';
import {
    Button,
    Icon,
    Text,
    Footer,
    FooterTab,
    Right,
    Header,
    Left,
    SwipeRow,
    Container,
    Content,
    List,
    Body, CardItem
} from 'native-base';

const TopPick = () => {
    const topPick = {
        id: 0,
        title: 'Venom',
        release: '2018',
        genre: 'Sci Fi, Action',
        url: 'https://www.themoviedb.org/t/p/w1280/wdcc8n9BB5gO5Y7zIhHLSzxSTc6.jpg'
    };

    return (
        <Content style={{flexDirection: 'row', flex: 1}}>
            <Text style={styles.mainTitle}>Top Pick by your watching list</Text>
            <View style={{flex: 0}}>
                <CardItem style={{backgroundColor: '#0b0b0e'}}>
                    <Left style={{flex: 0.8}}>
                        <Image
                            style={styles.poster}
                            source={{uri: 'https://www.themoviedb.org/t/p/w1280/wdcc8n9BB5gO5Y7zIhHLSzxSTc6.jpg'}}/>
                    </Left>
                    <Body style={styles.body}>
                        <Text style={styles.spacingText}>
                            <Text style={styles.mainText}>{topPick.title} </Text>
                            <Text style={styles.subText}>({topPick.release})</Text>
                        </Text>
                        <Text style={styles.spacingText}>
                            <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                            <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                            <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                            <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                            <Icon style={styles.iconText} type="FontAwesome" name='star'/>
                        </Text>
                        <Text style={styles.subText}>{topPick.genre}</Text>
                    </Body>
                </CardItem>
            </View>
        </Content>
    )
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
