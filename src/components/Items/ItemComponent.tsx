import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scaleFont, scaleHeight, width} from '../../theme/mixins';
import Icon from 'react-native-vector-icons/Feather';
interface Props {
  label: string;
  icon: string;
}

const ItemComponent = ({label, icon}: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} color={'#00000050'} size={24} />
      <Text style={styles.txt}>{label}</Text>
    </View>
  );
};

export default ItemComponent;
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

  txt: {
    marginLeft: 10,
    fontFamily: fonts.maliRegular,
    color: '#00000050',
    fontSize: scaleFont(16),
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
