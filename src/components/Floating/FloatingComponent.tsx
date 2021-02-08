import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, StyleProp} from 'react-native';
import {scaleHeight, scaleSize, width, scaleFont} from '../../theme/mixins';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import {MaterialIndicator} from 'react-native-indicators';
import {CREATE_FOLDER} from '@redux/actions_type';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

interface Props {}

const buttons = [
  {
    icon: 'folder-plus',
    screen: CREATE_FOLDER,
  },
  {
    icon: 'camera',
    screen: CREATE_FOLDER,
  },
  {
    icon: 'airplay',
    screen: CREATE_FOLDER,
  },
  {
    icon: 'grid',
    screen: 'default',
  },
] as ButtonConfig[];

interface ButtonConfig {
  icon: string;
  screen: string;
}

export const FloatingComponent = ({}: Props) => {
  const navigation = useNavigation();
  const [isShowAll, setIsShowAll] = React.useState(false);
  const onPressHandle = (screen: string) => {
    if (screen === 'default') {
      setIsShowAll(false);
    } else {
      navigation.navigate(screen);
    }
  };
  if (isShowAll) {
    return (
      <View
        style={[
          styles.container,
          styles.shadow,
          {width: isShowAll ? width - 40 : scaleHeight(60), backgroundColor: colors.white, justifyContent: 'space-between', paddingLeft: 20, paddingRight: 4},
        ]}>
        {buttons.map((button: ButtonConfig) => {
          return (
            <TouchableOpacity onPress={() => onPressHandle(button.screen)}>
              <View style={button.screen === 'default' ? styles.contextIcon : {}}>
                <Icon name={button.icon} size={24} color={button.screen === 'default' ? colors.white : colors.privacy} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  } else {
    return (
      <View style={[styles.container, {width: isShowAll ? width - 40 : scaleHeight(60), justifyContent: 'center', backgroundColor: colors.white}]}>
        <TouchableOpacity activeOpacity={1} onPress={() => setIsShowAll(true)}>
          <View style={styles.contextIcon}>
            <Icon name={'grid'} size={30} color={colors.white} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

export default FloatingComponent;

const styles = StyleSheet.create({
  container: {
    bottom: 20,
    right: 20,
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    borderRadius: scaleSize(30),
    height: scaleHeight(60),
  },
  contextIcon: {
    height: scaleHeight(50),
    width: scaleHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.privacy,
    borderRadius: scaleHeight(25),
  },
  shadow: {
    shadowColor: '#8A9DDD',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2.84,
    elevation: 2,
  },
});
