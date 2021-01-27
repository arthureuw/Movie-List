import { flow, makeAutoObservable, makeObservable, observable, reaction } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class User {
  lastName = '';
  firstName = '';
  isSignedIn = false;

  constructor() {
    makeAutoObservable(this);
  }
}

class LoginStore {
  user = new User();

  get email() {
    const mail = `${this.user?.firstName}.${this.user?.lastName}@gmail.com`;
    return mail.toLowerCase();
  }

  signUserInOut = flow(function* (bool) {
    try {
      this.user.isSignedIn = bool;
      yield AsyncStorage.setItem('user', JSON.stringify(this.user));
    } catch (err) {
      console.log(err);
    }
  }).bind(this);

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => [this.user.firstName, this.user.lastName],
      async () => {
        await AsyncStorage.setItem('user', JSON.stringify(this.user));
      }
    );
  }
}

const loginStore = new LoginStore();
export { loginStore };
