import {width, scaleHeight, scaleSize, scaleFont} from '@theme/mixins';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';

interface TextInputProps {
  value: string;
  label: string;
  placeholder: string;
  maxLength: number;
  isPassword: boolean;
  returnKeyType?: KeyType;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
  messageRequire?: string;
  require: boolean;
}

type KeyType =
  | 'none'
  | 'default'
  | 'done'
  | 'go'
  | 'next'
  | 'search'
  | 'send'
  | 'previous'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo'
  | 'emergency-call'
  | undefined;

type KeyboardTypeOptions = 'default' | 'email-address' | 'numeric' | 'phone-pad';
const widthInput = width - 120;

export const InputLabelComponent = ({
  isPassword,
  placeholder,
  keyboardType,
  messageRequire,
  maxLength,
  value,
  require,
  label,
  onChangeText,
}: TextInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wallpaper}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            selectionColor={colors.privacy}
            numberOfLines={1}
            maxLength={maxLength}
            placeholderTextColor={colors.placeHolder}
            style={[styles.input, {color: colors.backgroundSplash}]}
            value={value}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            onChangeText={(text: string) => onChangeText(text)}
            placeholder={placeholder}
          />
        </View>
        {isPassword ? (
          <TouchableOpacity style={{}} onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Icon name={secureTextEntry ? 'eye-off' : 'eye'} size={16} color={'#8A9DDD'} />
          </TouchableOpacity>
        ) : null}
      </View>
      {require ? <Text style={styles.error}>{messageRequire}</Text> : null}
    </View>
  );
};

export default InputLabelComponent;

const styles = StyleSheet.create({
  wallpaper: {
    width: width - 40,
    marginVertical: scaleHeight(10),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#8A9DDD',
    alignItems: 'center',
    flexDirection: 'row',
    height: scaleHeight(50),
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  error: {
    fontSize: scaleSize(10),
    color: 'red',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: scaleFont(14),
    color: '#223f85',
  },
  label: {
    fontFamily: fonts.maliMedium,
    width: widthInput,
    color: colors.privacy,
    fontSize: scaleSize(20),
  },
  input: {
    fontFamily: 'Mali-Medium',
    marginLeft: 4,
    width: widthInput,
    fontSize: scaleSize(14),
  },
});
