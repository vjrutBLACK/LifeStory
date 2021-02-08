import {Images} from '@assets/index';
import * as colors from '@theme/colors';
import {width} from '@theme/mixins';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {scaleFont, scaleHeight, height} from '../../../../theme/mixins';
import {BarIndicator} from 'react-native-indicators';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import BaseAuthService from '@services/authService';
import navigationReset from '@helpers/navigationReset';

const SplashPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const getTokenAsync = async () => {
      const token = await BaseAuthService.getTokensAsync();
      if (token && token.token) {
        setTimeout(() => {
          navigationReset(navigation, 'MainScreen');
        }, 2000);
      } else {
        setTimeout(() => {
          navigationReset(navigation, 'Login');
        }, 2000);
      }
    };
    getTokenAsync();
  }, []);
  return (
    <FastImage source={Images.LOGIN} style={styles.img} resizeMode={FastImage.resizeMode.contain}>
      <View style={styles.contextLogo}>
        <Text style={styles.logo}>Your</Text>
        <Text style={[styles.logo, {marginTop: scaleHeight(-30)}]}>Life Story</Text>
      </View>
      <View style={styles.context}>
        <BarIndicator color={'#8AC7DD'} count={5} />
      </View>
    </FastImage>
  );
};
export default SplashPage;
const imgHeight = width * 2.1653;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  context: {
    width: width,
    height: 100,
    marginBottom: height / 5,
  },
  img: {
    justifyContent: 'space-between',
    width: width,
    height: imgHeight,
  },
  contextLogo: {
    marginTop: imgHeight / 4.2,
  },
  logo: {
    marginLeft: 24,
    paddingVertical: 0,
    fontFamily: 'Mali-Medium',
    fontSize: scaleFont(36),
    color: colors.white,
  },
});
