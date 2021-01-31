import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { inject, observer, Provider } from 'mobx-react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginStore } from "../../stores/LoginStore.store"
import { GetToken, Authentication, Session, GetAccount } from "../../service/Auth";

const Login = ({navigation}) => {
    const stores = { loginStore}

    return (
        <Provider {...stores}>
            <LoginComponent navigation={navigation}></LoginComponent>
        </Provider>
    )
};

const LoginHandler = (props) => {
    const { loginStore, navigation } = props;
    const [token, setToken] = useState('');
    const SignIn = async () => {
        Authentication(token, loginStore.user.username, loginStore.user.password)
            .then(r => Session(token)
                .then(r => {
                    loginStore.user.session_id = r.data.session_id,
                        GetAccount(r.data.session_id)
                            .then(r => { loginStore.signUserInOut(true), navigation.navigate('Home')})
                            .catch(err => console.error(err))
                })
                .catch(err => console.error(err)))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        const storeData = async () => {
            try {
                const user = await AsyncStorage.getItem('username');
                if (user !== null) {
                    loginStore.user = JSON.parse(user)
                }
            } catch (error) {
                console.error(error);
            }
        };

        storeData()
        GetToken().then(r => setToken(r.data.request_token))
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TextInput style={styles.input} maxLength={30} placeholder="Username" value={loginStore.user.username} onChangeText={text => loginStore.user.username = text} />
                <TextInput style={styles.input} maxLength={15} placeholder="Password" value={loginStore.user.password} secureTextEntry={true} onChangeText={text => loginStore.user.password = text} />
                <TouchableOpacity style={styles.connect} activeOpacity={0.75} title="Login" onPress={() => SignIn()}><Text style={styles.text}>Sign In</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const LoginComponent = inject('loginStore')(observer(LoginHandler))

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#21254E",
        height: "100%"
    },
    box: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D8D8D8",
        height: 250,
        width: 350,
        borderRadius: 15
    },
    input: {
        fontWeight: 'bold',
        margin: 5,
        fontSize: 19,
        color: '#202331',
        textAlign: "center",
    },
    connect: {
        backgroundColor: '#34396b',
        borderRadius: 5,
        marginTop: 25,
        zIndex: 5
    },
    text: {
        color: "#F9F9F9",
        padding: 10,
        fontSize: 15
    }
});

export default Login;