import {Keyboard} from 'react-native';

export const checkKeyboard = () => {
  let isOpenKeyboard: boolean = false;
  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    isOpenKeyboard = true;
  });
  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    isOpenKeyboard = false;
  });
  return () => {
    keyboardDidHideListener.remove();
    keyboardDidShowListener.remove();
  };
};
