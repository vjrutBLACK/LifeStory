import store from '@redux/store';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Root from '@navigation/app';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContextProvider} from '@components/AppContext';
import {UserDetail} from './screens/Auth/redux/action-types/login';
import BaseAuthService from '@services/authService';

StatusBar.setBarStyle('dark-content', true);

export default function App() {
  const [user, setUser] = React.useState<UserDetail | null | undefined>(null);

  React.useEffect(() => {
    const getUser = async () => {
      const user = await BaseAuthService.getAuthUserAsync();
      if (user?.user?.ID) {
        updateUserProfile(user?.user);
      }
    };
    getUser();
  }, []);

  const updateUserProfile = (data: UserDetail | null | undefined) => {
    setUser(data);
  };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppContextProvider
          value={{
            userProfile: user,
            updateUserProfile: updateUserProfile,
          }}>
          <Root />
        </AppContextProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
