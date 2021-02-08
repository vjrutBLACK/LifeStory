import Snackbar, { SnackBarOptions } from 'react-native-snackbar';

export const SnackbarService = {
  displayErrorMessage: (message: string, options?: SnackBarOptions) => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#fc5c65',
      action: {
        text: 'DISMISS',
        textColor: 'white',
        onPress: () => {},
      },
      ...(options || {}),
    });
  },
  displaySuccessMessage: (message: string, options?: SnackBarOptions) => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#26de81',
      action: {
        text: 'DISMISS',
        textColor: 'white',
        onPress: () => {},
      },
      ...(options || {}),
    });
  },
  displayWarningMessage: (message: string, options?: SnackBarOptions) => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#f7b731',
      action: {
        text: 'DISMISS',
        textColor: 'white',
        onPress: () => {},
      },
      ...(options || {}),
    });
  },
};
