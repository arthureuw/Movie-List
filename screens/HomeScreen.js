import { inject, observer } from 'mobx-react';
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreenHandling = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10, flex: 0.3, justifyContent: 'space-around' }}>
        <View>
          <Text style={styles.label}>Prénom</Text>
          <TextInput
            value={props.loginStore.user?.firstName}
            onChangeText={(value) => {
              props.loginStore.user.firstName = value;
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Nom</Text>
          <TextInput
            value={props.loginStore.user?.lastName}
            onChangeText={(value) => (props.loginStore.user.lastName = value)}
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <Text>{props.loginStore.email}</Text>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Button title="Déconnexion" color="red" onPress={() => props.loginStore.signUserInOut(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 10,
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  rightAction: {
    alignItems: 'center',
    // flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    flex: 1,
    justifyContent: 'center',
  },
});

const HomeScreen = inject('loginStore')(observer(HomeScreenHandling));
export default HomeScreen;
