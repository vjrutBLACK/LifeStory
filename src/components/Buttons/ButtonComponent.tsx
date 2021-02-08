import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, StyleProp} from 'react-native';
import {scaleHeight, scaleSize, width, scaleFont} from '../../theme/mixins';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import {MaterialIndicator} from 'react-native-indicators';

interface Props {
  value: string;
  isSignIn: boolean;
  onPress: () => void;
  style: any;
  loading: boolean;
}

export const ButtonComponent = ({value, loading, isSignIn, onPress, style}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btn, style, {backgroundColor: isSignIn ? colors.privacy : colors.white, borderWidth: isSignIn ? 0 : 1}]}>
        {loading ? (
          <MaterialIndicator color={colors.white} size={20} />
        ) : (
          <Text style={[styles.txt, {color: isSignIn ? colors.white : colors.privacy}]}>{value}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  txt: {
    fontSize: scaleFont(16),
    fontFamily: fonts.maliMedium,
  },
  btn: {
    justifyContent: 'center',
    height: scaleHeight(56),
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.privacy,
  },
});
