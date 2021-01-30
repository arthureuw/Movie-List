import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'mobx-react'
import { loginStore } from './stores/LoginStore.store'
import LoginScreen from './component/Login/LoginScreen';
import HomePage from './component/HomePage/HomePage';
import MovieDetails from './component/MovieDetails/MovieDetails';
import { configure } from 'mobx';

configure({ enforceActions: "observed" })

const Stack = createStackNavigator();

export default function App() {
  const stores = { loginStore}
  return (
      <Provider {...stores}>
          <NavigationContainer>
              <LoginScreen/>
          </NavigationContainer>
      </Provider>
  );
}

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
