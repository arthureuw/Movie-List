import { inject, observer } from 'mobx-react';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignInScreenHandle = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Prénom"
        style={styles.input}
        onChangeText={(text) => (props.loginStore.user.firstName = text)}
      />
      <TextInput
        placeholder="Nom"
        style={styles.input}
        onChangeText={(text) => (props.loginStore.user.lastName = text)}
      />
      <TouchableOpacity
        onPress={() => props.loginStore.signUserInOut(true)}
        style={{ ...styles.input, backgroundColor: 'skyblue', borderWidth: 0 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 8,
    marginVertical: 3,
    // marginHorizontal: 10,
    width: '95%',
  },
});

const SignInScreen = inject('loginStore')(observer(SignInScreenHandle));
export default SignInScreen;
