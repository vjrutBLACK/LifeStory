import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '@assets/index';
import {width} from '@theme/mixins';
import {scaleFont, scaleHeight} from '../../../../theme/mixins';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import InputComponent from '@components/Inputs/InputComponent';
import {ButtonComponent} from '@components/Buttons/ButtonComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import navigationReset from '@helpers/navigationReset';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useLogin from '../../hook/useLogin';
import {LoginInput} from '../../redux/action-types/login';
import BaseAuthService from '@services/authService';
import {AppContextInterface} from '@components/AppContext';
import AppContext from '@components/AppContext/index';
const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [requiredPhone, setRequiredPhone] = React.useState(false);

  const [password, setPassword] = React.useState('');
  const [requiredPassword, setRequiredPassword] = React.useState(false);

  const navigation = useNavigation();
  const {onLogin, data, loading} = useLogin();
  const {userProfile, updateUserProfile} = React.useContext<AppContextInterface>(AppContext);
  React.useEffect(() => {
    if (data?.UserToken) {
      const getTokenAsync = async () => {
        await BaseAuthService.saveTokensAsync(data.UserToken, '');
        await BaseAuthService.saveAuthUserAsync(data.UserDetail);
        updateUserProfile(data.UserDetail);
        navigationReset(navigation, 'MainScreen');
      };
      getTokenAsync();
    }
  }, [data]);

  const onChangePassword = (data: string) => {
    if (!data) {
      setRequiredPassword(true);
    } else {
      setRequiredPassword(false);
    }
    setPassword(data);
  };
  const onChangePhone = (data: string) => {
    if (!data) {
      setRequiredPhone(true);
    } else {
      setRequiredPhone(false);
    }
    setPhoneNumber(data);
  };

  const onLoginHandle = () => {
    if (!phoneNumber) {
      setRequiredPhone(true);
    } else {
      setRequiredPhone(false);
    }
    if (!password) {
      setRequiredPassword(true);
    } else {
      setRequiredPassword(false);
    }
    if (!requiredPassword && !requiredPhone && password && phoneNumber) {
      onLogin({
        Email: 'a',
        Phone: phoneNumber,
        Password: password,
        TypeOfUserName: 1,
      } as LoginInput);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView resetScrollToCoords={{x: 0, y: 20}} contentContainerStyle={{height: imgHeight, width}} scrollEnabled={false}>
        <FastImage source={Images.LOGIN} style={styles.img} resizeMode={FastImage.resizeMode.contain}>
          <View style={styles.contextLogo}>
            <Text style={styles.logo}>Your</Text>
            <Text style={[styles.logo, {marginTop: scaleHeight(-30)}]}>Life Story</Text>
          </View>
          <View style={styles.context}>
            <InputComponent
              icon={'smartphone'}
              value={phoneNumber}
              label={'Phone Number'}
              onChangeText={onChangePhone}
              require={requiredPhone}
              messageRequire={'Đây là trường bắt buộc.'}
              isPassword={false}
              maxLength={256}
            />
            <InputComponent
              icon={'key'}
              value={password}
              label={'Password'}
              onChangeText={onChangePassword}
              require={requiredPassword}
              messageRequire={'Đây là trường bắt buộc.'}
              isPassword={true}
              maxLength={256}
            />
          </View>
          <TouchableOpacity>
            <Text style={[styles.txt, {marginBottom: scaleHeight(10)}]}>Forgot password?</Text>
          </TouchableOpacity>
          <ButtonComponent loading={loading} style={styles.btn} onPress={onLoginHandle} isSignIn={true} value={'Login'} />
          <View style={styles.contextLine}>
            <View style={styles.line}></View>
            <Text style={[styles.txt, {color: colors.privacy}]}>Or</Text>
            <View style={styles.line}></View>
          </View>
          <ButtonComponent loading={false} style={styles.btn} onPress={() => navigationReset(navigation, 'Register')} isSignIn={false} value={'Sign Up'} />
        </FastImage>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default LoginPage;
const imgHeight = width * 2.1653;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
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
  btn: {},
  txt: {
    textAlign: 'right',
    fontSize: scaleFont(14),
    fontFamily: fonts.maliMedium,
    color: '#1A80BF',
  },
  img: {
    paddingHorizontal: 20,
    width: width,
    height: imgHeight,
  },
  contextLogo: {
    marginTop: imgHeight / 4.5,
  },
  logo: {
    paddingVertical: 0,
    // backgroundColor: 'red',
    fontFamily: 'Mali-Medium',
    fontSize: scaleFont(36),
    color: colors.white,
  },
});
