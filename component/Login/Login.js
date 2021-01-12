import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Content} from 'native-base';

const Login = (props) => {
  return (
    <Content>
      <View style={{flex: 0}}>
        <Text style={styles.mainText}>Login Screen</Text>
      </View>
    </Content>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
