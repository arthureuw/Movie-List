import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'mobx-react'
import { loginStore } from './stores/LoginStore.store'
import Login from './component/Login/Login';
import HomePage from './component/HomePage/HomePage';
import MovieDetails from './component/MovieDetails/MovieDetails';
import { configure } from 'mobx';

configure({ enforceActions: "observed" })

const Stack = createStackNavigator();

export default function App() {
  const stores = { loginStore };

  return (
    <NavigationContainer>
      <Provider {...stores}>
        <Login/>
      </Provider>
      {/* <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.mainColor}>
        <View style={{height: '100%', backgroundColor: '#0b0b0e'}}>
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
          </Stack.Navigator>
        </View>
      </SafeAreaView> */}
    </NavigationContainer>
  );
};

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
