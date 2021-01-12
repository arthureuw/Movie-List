import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './component/HomePage/HomePage';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.mainColor}>
        <View style={{height: '100%', backgroundColor: '#0b0b0e'}}>
          <HomePage />
        </View>
      </SafeAreaView>
    </NavigationContainer>
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
