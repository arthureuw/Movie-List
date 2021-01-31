import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { GetRequestToken, ValidateAuthentication, CreateNewSession, GetUserAccount } from "../../service/Auth";
import { inject, observer, Provider } from 'mobx-react';
import { loginStore } from "../../stores/LoginStore.store"
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
    const stores = { loginStore}

    return (
        <Provider {...stores}>
            <Login navigation={navigation}></Login>
        </Provider>
    )
};



const LoginHandling = (props) => {
    const { loginStore, navigation } = props;
    const [reqToken, setReqToken] = useState('');
    const SignIn = async () => {
        ValidateAuthentication(reqToken, loginStore.user.username, loginStore.user.password)
            .then(r => CreateNewSession(reqToken)
                .then(r => {
                    loginStore.user.session_id = r.data.session_id,
                        GetUserAccount(r.data.session_id)
                            .then(r => { loginStore.signUserInOut(true), navigation.navigate('Home')})
                            .catch(err => console.error(err))
                })
                .catch(err => console.error(err)))
            .catch(err => console.error(err))

    }

    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const value = await AsyncStorage.getItem('user');
                if (value !== null) {
                    loginStore.user = JSON.parse(value)
                }
            } catch (error) {
                console.error(error);
            }
        };

        _retrieveData()
    }, [])

    useEffect(() => {
        GetRequestToken().then(r => setReqToken(r.data.request_token))
    }, [])

    return (
        <View>
            <View>
                <TextInput style={styles.input} maxLength={20} placeholder="Pseudo" value={loginStore.user.username} onChangeText={text => loginStore.user.username = text} />
                <TextInput style={styles.input} maxLength={20} placeholder="Mot de Passe" value={loginStore.user.password} secureTextEntry={true} onChangeText={text => loginStore.user.password = text} />
                <TouchableOpacity activeOpacity={0.75} title="LOGIN" onPress={() => SignIn()}><Text>Se Connecter</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const Login = inject('loginStore')(observer(LoginHandling))

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        backgroundColor: "#292D3E"
    },
    credentialContainer: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        width: 200,
        borderRadius: 10,
        backgroundColor: "#A6ACCD"
    },
    input: {
        fontWeight: 'bold',
        margin: 5,
        fontSize: 18,
        color: '#202331',
        textAlign: "center",
        width: '100%'
    },
    button: {
        backgroundColor: '#ab47bc',
        marginTop: 20,
        zIndex: 5
    },
    buttonText: {
        // color: "white",
        // padding: 10
    }
});

export default LoginScreen;