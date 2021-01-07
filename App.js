import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import MovieCard from './component/MovieCard/MovieCard';

const App = () => {
  return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
              contentInsetAdjustmentBehavior="automatic"
          >
            <View>
              <MovieCard/>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
  );
};

export default App;
