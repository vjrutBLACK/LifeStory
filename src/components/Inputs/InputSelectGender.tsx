import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import {scaleFont, scaleHeight, scaleSize, width} from '@theme/mixins';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import {Gender} from '@redux/actions_type';

interface TextInputProps {
  onSelect: (option: GenderConfig) => void;
  value: Gender | null;
  label: string;
}

const genders = [
  {
    key: 'Nam',
    value: Gender.MALE,
  },
  {
    key: 'Nữ',
    value: Gender.FEMALE,
  },
  {
    key: 'Khác',
    value: Gender.OTHER,
  },
  {
    key: 'Chọn giới tính',
    value: null,
  },
] as GenderConfig[];

export interface GenderConfig {
  key: string;
  value: Gender | null;
}

export const InputSelectGender = ({value, label, onSelect}: TextInputProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const onSelectHandle = (item: GenderConfig) => {
    onSelect(item);
    setIsVisible(false);
  };

  const renderItem = (item: GenderConfig) => {
    return (
      <TouchableOpacity onPress={() => onSelectHandle(item)}>
        <View style={styles.row}>
          <Text style={[styles.txt, {color: item.value === value ? colors.txtSelect : colors.textBlack}]} numberOfLines={1}>
            {item.key}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.wallpaper}>
          <Text style={[styles.txt, {color: value ? colors.txtInput : colors.placeHolder}]}>
            {genders.find((gender: GenderConfig) => gender.value === value)?.key}
          </Text>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Icon name={'chevron-down'} size={20} color={colors.privacy} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <Modal style={styles.modal} useNativeDriver={true} onBackdropPress={onClose} isVisible={isVisible}>
        <View style={styles.wall}>
          <View style={styles.header}>
            <Text style={[styles.title, {fontWeight: 'bold'}]}>Chọn giới tính</Text>
            <TouchableOpacity style={styles.close} onPress={onClose}>
              <Icon name={'x'} size={20} color={'#757575'} />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: scaleHeight(20)}}>
            <FlatList data={genders.slice(0, 3)} renderItem={({item, index, separators}) => renderItem(item)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputSelectGender;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: scaleHeight(100),
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  close: {
    height: scaleHeight(24),
    width: scaleHeight(24),
    position: 'absolute',
    right: 0,
    alignItems: 'center',
  },
  header: {
    marginTop: scaleHeight(10),
    width: width - 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    zIndex: 3,
  },
  wall: {
    width: width,
    height: scaleHeight(210),
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: scaleHeight(16),
    borderTopRightRadius: scaleHeight(16),
  },
  content: {
    width: width - 40,
  },
  label: {
    fontFamily: fonts.maliMedium,
    color: colors.privacy,
    fontSize: scaleSize(20),
  },
  wallpaper: {
    paddingHorizontal: 16,
    height: scaleHeight(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#8A9DDD',
  },
  txt: {
    fontFamily: 'Mali-Medium',
    fontSize: scaleSize(14),
  },
  title: {
    marginRight: scaleSize(14),
    fontSize: scaleFont(18),
    marginVertical: scaleSize(4),
  },
  row: {
    width: width - 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderBottomColor,
    padding: 4,
    height: scaleHeight(50),
  },
  wallpaperDropdown: {
    height: scaleHeight(28),
    paddingVertical: 4,
    fontSize: scaleSize(14),
  },
  dropdownStyle: {
    height: scaleHeight(150),
    width: width - 40,
  },
  dropdownTextStyle: {
    fontSize: scaleSize(14),
  },
});
