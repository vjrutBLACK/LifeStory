import {Images} from '@assets/index';
import {ButtonComponent} from '@components/Buttons/ButtonComponent';
import InputComponent from '@components/Inputs/InputComponent';
import {useNavigation} from '@react-navigation/native';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import {width} from '@theme/mixins';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';
import {scaleFont, scaleHeight} from '../../../../theme/mixins';
import navigationReset from '@helpers/navigationReset';
import useRegister from '../../hook/useRegister';
import useLogin from '@screens/Auth/hook/useLogin';
import BaseAuthService from '@services/authService';
import {AppContextInterface} from '@components/AppContext';
import AppContext from '@components/AppContext/index';
const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const [password, setPassword] = React.useState('');

  const [fullName, setFullName] = React.useState('');

  const navigation = useNavigation();
  const {onRegister, data, loading} = useRegister();
  const {data: dataLogin, loading: loadingLogin} = useLogin();
  const {updateUserProfile} = React.useContext<AppContextInterface>(AppContext);
  React.useEffect(() => {
    if (dataLogin?.UserToken) {
      const getTokenAsync = async () => {
        await BaseAuthService.saveTokensAsync(dataLogin.UserToken, '');
        await BaseAuthService.saveAuthUserAsync(dataLogin.UserDetail);
        updateUserProfile(dataLogin.UserDetail);
        navigationReset(navigation, 'MainScreen');
      };
      getTokenAsync();
      console.log('data', dataLogin);
    }
  }, [dataLogin]);
  const onPressHandle = () => {
    onRegister({
      Email: 'a',
      Phone: phoneNumber,
      Password: password,
      FullName: fullName,
      TypeOfUserName: 1,
      Avatar: 'sad',
    });
  };
  return (
    <KeyboardAwareScrollView resetScrollToCoords={{x: 0, y: 20}} contentContainerStyle={{height: imgHeight - 40, width}} scrollEnabled={false}>
      <FastImage source={Images.LOGIN} style={styles.img} resizeMode={FastImage.resizeMode.contain}>
        <View style={{paddingHorizontal: 20}}>
          <TouchableOpacity onPress={() => navigationReset(navigation, 'Login')}>
            <View style={{marginTop: scaleHeight(40)}}>
              <Icon name={'arrow-left'} size={32} color={colors.white} />
            </View>
          </TouchableOpacity>
          <View style={styles.contextLogo}>
            <Text style={styles.logo}>Start</Text>
            <Text style={[styles.logo, {marginTop: scaleHeight(-30)}]}>Your Story</Text>
          </View>
          <View style={styles.context}>
            <InputComponent
              icon={'smartphone'}
              value={phoneNumber}
              label={'Phone Number'}
              onChangeText={setPhoneNumber}
              require={false}
              messageRequire={'Đây là trường bắt buộc.'}
              isPassword={false}
              maxLength={256}
            />
            <InputComponent
              icon={'smile'}
              value={fullName}
              label={'Your name'}
              onChangeText={setFullName}
              require={false}
              messageRequire={'Đây là trường bắt buộc.'}
              isPassword={false}
              maxLength={256}
            />
            <InputComponent
              icon={'key'}
              value={password}
              label={'Password'}
              onChangeText={setPassword}
              require={false}
              messageRequire={'Đây là trường bắt buộc.'}
              isPassword={true}
              maxLength={256}
            />
          </View>
          <ButtonComponent loading={loading || loadingLogin} style={styles.btn} onPress={onPressHandle} isSignIn={true} value={'Sign Up'} />
        </View>
      </FastImage>
    </KeyboardAwareScrollView>
  );
};
export default LoginPage;
const imgHeight = width * 2.1653;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  back: {},
  contextLine: {
    marginVertical: scaleHeight(16),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  line: {
    backgroundColor: colors.borderBottomColor,
    height: 1,
    width: (width - 80) / 2,
  },
  context: {
    marginTop: scaleHeight(100),
    alignItems: 'center',
  },
  btn: {
    marginTop: scaleHeight(20),
  },
  txt: {
    textAlign: 'right',
    fontSize: scaleFont(14),
    fontFamily: fonts.maliMedium,
    color: '#1A80BF',
  },
  img: {
    width: width,
    height: imgHeight,
  },
  contextLogo: {
    marginTop: imgHeight / 7,
  },
  logo: {
    paddingVertical: 0,
    // backgroundColor: 'red',
    fontFamily: 'Mali-Medium',
    fontSize: scaleFont(36),
    color: colors.white,
  },
});
