import * as colors from '@theme/colors';
import React from 'react';
import {Text, TextStyle, View, ViewStyle, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import {Images} from '@assets/index';
import {width, scaleFont, scaleHeight} from '../../theme/mixins';
import * as fonts from '@theme/fonts';
import {RelationShip, User} from '@shared/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface Props {
  thumbnail: string;
  title: string;
  label: string;
  relationship?: string;
  onPress: () => void;
}

const ItemThumbnail = ({thumbnail, title, label, relationship, onPress}: Props) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <FastImage style={styles.img} source={{uri: thumbnail}} resizeMode={FastImage.resizeMode.cover}>
          <View style={styles.context}>
            <Text style={styles.title}>
              {title}
              {<Text style={styles.txt}> - {relationship}</Text>}
            </Text>
            <Text style={styles.txt}>{label}</Text>
          </View>
        </FastImage>
      </TouchableOpacity>
    </View>
  );
};

export default ItemThumbnail;
const imgWidth = width - 40;
const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: scaleHeight(20),
    width: width - 40,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scaleHeight(8),
  },
  relationship: {},
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
    marginTop: -10,
    fontFamily: fonts.maliRegular,
    color: colors.white,
    fontSize: scaleFont(10),
  },
  title: {
    fontFamily: fonts.maliRegular,
    color: colors.white,
    fontSize: scaleFont(18),
  },
  img: {
    height: scaleHeight(imgWidth * 0.583),
    width: scaleHeight(imgWidth),
    borderRadius: scaleHeight(8),
  },
  context: {
    marginTop: (imgWidth * 0.583 * 2) / 2.9,
    marginLeft: 20,
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
