import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import {scaleFont, scaleHeight, scaleSize} from '@theme/mixins';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Feather';
interface Props {
  label: string;
  editing: boolean;
  date: string | number;
  require: boolean;
  value: Date;
  messageRequire?: string;
  onConfirm: (date: Date) => void;
}

const {width} = Dimensions.get('window');

export const DateTimeFormat = ({label, require, messageRequire, value, editing, date, onConfirm}: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateDefault, setDateDefault] = useState(value);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = (date: Date) => {
    onConfirm(date);
    setDateDefault(date);
    setDatePickerVisibility(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <View style={styles.row}>
            <Text numberOfLines={1} style={[styles.txt, {color: date === 0 ? colors.placeHolder : colors.txtInput}]}>
              {date == 0 ? 'mm/dd/yyyy' : date}
            </Text>
            <Icon name={'calendar'} size={scaleSize(20)} color={colors.privacy} />
          </View>
        </TouchableOpacity>
        <DateTimePickerModal
          style={styles.dataTimeModal}
          display={'spinner'}
          maximumDate={new Date()}
          isVisible={isDatePickerVisible}
          mode="date"
          date={dateDefault}
          onConfirm={handleConfirm}
          onCancel={() => setDatePickerVisibility(false)}
        />
      </View>
      {require && !date ? <Text style={styles.error}>{messageRequire}</Text> : null}
    </View>
  );
};

export default DateTimeFormat;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: scaleSize(2),
    marginHorizontal: scaleSize(2),
  },
  wall: {
    width: width,
    paddingVertical: scaleHeight(20),
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: scaleHeight(16),
    borderTopRightRadius: scaleHeight(16),
  },
  dataTimeModal: {
    justifyContent: 'flex-end',
    margin: 0,
    zIndex: 3,
  },
  content: {
    width: width - 40,
  },
  container: {
    width: width,

    height: scaleHeight(100),
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  error: {
    fontSize: scaleSize(10),
    color: 'red',
  },
  row: {
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#8A9DDD',
    height: scaleHeight(50),
    paddingHorizontal: scaleSize(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    padding: scaleSize(4),
    marginRight: scaleSize(10),
  },
  close: {
    height: scaleHeight(24),
    width: scaleHeight(24),
    position: 'absolute',
    right: 0,
    alignItems: 'center',
  },
  title: {
    fontSize: scaleFont(16),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
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

  label: {
    fontFamily: fonts.maliMedium,
    color: colors.privacy,
    fontSize: scaleSize(20),
  },
  txt: {
    marginLeft: 16,
    fontFamily: fonts.maliMedium,
    marginVertical: scaleHeight(8),
    fontSize: scaleSize(16),
  },
  input: {
    fontFamily: fonts.maliMedium,
    marginVertical: scaleHeight(8),
    color: '#000000',
    height: scaleHeight(50),
    fontSize: scaleSize(14),
  },
});
