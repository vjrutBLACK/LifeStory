import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {scaleFont, scaleHeight, width} from '../../theme/mixins';

interface Props {
  label: string;
  onPress: () => void;
  onPressEdit: () => void;
}
const HeaderProfileComponent = ({onPress, onPressEdit, label}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={'chevron-left'} size={30} color={colors.privacy} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressEdit}>
        <Icon name={'edit-3'} size={24} color={colors.privacy} />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderProfileComponent;

const styles = StyleSheet.create({
  container: {
    width,
    paddingHorizontal: 20,
    paddingTop: scaleHeight(30),
    flexDirection: 'row',
    height: scaleHeight(100),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.privacy,
    fontFamily: fonts.maliMedium,
    fontSize: scaleFont(24),
  },
});
