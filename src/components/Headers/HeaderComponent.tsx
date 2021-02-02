import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {width, height, scaleHeight, scaleFont} from '../../theme/mixins';
import Icon from 'react-native-vector-icons/Feather';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HomePageNavigationProp} from '@navigation/drawer';
import {RelationshipPageNavigationProp} from '../../navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import navigationReset from '@helpers/navigationReset';

interface Props {
  onPressLeft: () => void;
  onPressRight: () => void;
  lefIcon: string;
  rightIcon: string;
  label: string;
  colorLabel: string;
  colorIcon: string;
}
const HeaderComponent = ({lefIcon, rightIcon, onPressLeft, onPressRight, label, colorIcon, colorLabel}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLeft}>
        <Icon name={lefIcon} size={24} color={colorIcon} />
      </TouchableOpacity>
      <Text style={[styles.title, {color: colorLabel}]}>{label}</Text>
      <TouchableOpacity onPress={onPressRight}>
        <Icon name={rightIcon} size={24} color={colorIcon} />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderComponent;

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
