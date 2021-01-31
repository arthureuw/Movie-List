import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'mobx-react'
import { loginStore } from './stores/LoginStore.store'
import Login from './component/Login/Login';
import HomePage from './component/HomePage/HomePage';
import MovieDetails from './component/MovieDetails/MovieDetails';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import WatchList from './component/WatchList/WatchList';
import { configure } from 'mobx';

configure({ enforceActions: "never" })
const Stack = createStackNavigator();

export default function App() {
  const stores = { loginStore}
  return (
      <Provider {...stores}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
            <View style={{height: '100%', backgroundColor: '#0b0b0e'}}>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="MovieDetails" component={MovieDetails} />
                <Stack.Screen name="WatchList" component={WatchList} />
              </Stack.Navigator>
            </View>
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
