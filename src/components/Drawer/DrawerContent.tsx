import {Images} from '@assets/index';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {scaleFont, scaleHeight} from '../../theme/mixins';
import navigationReset from '@helpers/navigationReset';
import {useNavigation} from '@react-navigation/native';

interface Props {
  props: any;
}
const DrawerContent = (props: any) => {
  const navigation = useNavigation();
  const renderItem = (icon: string, label: string, name: string) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(name)}>
        <View style={styles.contextItem}>
          <Icon name={icon} size={24} color={colors.white} />
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ProfileStackScreen')}>
        <View style={[styles.contextItem, {marginTop: scaleHeight(40)}]}>
          <FastImage source={Images.AVATAR_DEFAULT} style={styles.avatar} resizeMode={FastImage.resizeMode.contain} />
          <Text style={styles.title}>Nguyễn Anh Tú</Text>
        </View>
      </TouchableOpacity>
      {renderItem('home', 'Trang chủ', 'HomePage')}
      {renderItem('users', 'Mối quan hệ', 'RelationshipPage')}
      {renderItem('airplay', 'Slides', 'SlidersPage')}
      {renderItem('share-2', 'Mạng xã hội', 'NetworkPage')}
      {renderItem('settings', 'Tùy chỉnh', 'ControlPage')}
      {renderItem('help-circle', 'Trợ giúp', 'HelpPage')}
    </View>
  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.privacy,
  },
  title: {
    marginLeft: 20,
    color: colors.white,
    fontFamily: fonts.maliMedium,
    fontSize: scaleFont(18),
  },
  avatar: {
    height: scaleHeight(60),
    width: scaleHeight(60),
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: scaleHeight(30),
  },
  contextItem: {
    marginBottom: scaleHeight(24),
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    marginLeft: 20,
    fontFamily: fonts.maliMedium,
    color: colors.white,
    fontSize: scaleFont(14),
  },
});
