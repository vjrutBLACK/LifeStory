import * as colors from '@theme/colors';
import React from 'react';
import {Text, TextStyle, View, ViewStyle, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import {Images} from '@assets/index';
import {width, scaleFont, scaleHeight} from '../../theme/mixins';
import * as fonts from '@theme/fonts';
import {borderWarring} from '../../theme/colors';
interface Props {}

const ItemUser = ({}: Props) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <FastImage style={styles.img} source={Images.AVATAR_DEFAULT} resizeMode={FastImage.resizeMode.contain} />
      <View style={styles.context}>
        <Text style={styles.name}>Nguyen Van A</Text>
        <View style={styles.row}>
          <Icon name={'smile'} size={24} color={'#00000050'} />
          <Text style={styles.txt}>Contrai</Text>
        </View>
        <View style={styles.row}>
          <Icon name={'calendar'} size={24} color={'#00000050'} />
          <Text style={styles.txt}>Contrai</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemUser;

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    paddingHorizontal: 16,
    marginBottom: scaleHeight(20),
    width: width - 50,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txt: {
    marginLeft: 10,
    fontFamily: fonts.maliRegular,
    color: '#00000050',
    fontSize: scaleFont(14),
  },
  img: {
    height: scaleHeight(80),
    width: scaleHeight(80),
    borderRadius: scaleHeight(40),
    borderWidth: 1,
    borderColor: colors.privacy,
  },
  context: {
    marginLeft: 24,
    marginVertical: scaleHeight(24),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginBottom: scaleHeight(10),
    fontFamily: fonts.maliRegular,
    color: colors.privacy,
    fontSize: scaleFont(16),
  },
});
