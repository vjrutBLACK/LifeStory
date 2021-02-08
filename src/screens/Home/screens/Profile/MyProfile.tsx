import ButtonComponent from '@components/Buttons/ButtonComponent';
import DateTimeFormat from '@components/DateTime/DateTimeFormat';
import HeaderComponent from '@components/Headers/HeaderComponent';
import {InputLabelComponent} from '@components/Inputs/InputLabelComponent';
import InputSelectGender, {GenderConfig} from '@components/Inputs/InputSelectGender';
import navigationReset from '@helpers/navigationReset';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Gender} from '@redux/actions_type';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {scaleFont, scaleHeight, width} from '../../../../theme/mixins';
const MyProfile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);

  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [dateOfBirthShow, setDateOfBirthShow] = useState(0);
  const onConfirm = (date: Date) => {
    // setDateOfBirthShow(moment(date).format(SHORT_DATE_FORMAT));
    // setDateOfBirth(Math.floor(date.getTime() / 1000));
  };
  return (
    <View style={styles.container}>
      <HeaderComponent
        label={'My Profile'}
        colorLabel={colors.white}
        colorIcon={colors.txtInput}
        lefIcon={'chevron-left'}
        rightIcon={'search'}
        onPressLeft={() => console.log('aaaa')}
        onPressRight={() => console.log('aaaa')}
      />
      <ScrollView style={{flex: 1}}>
        <View style={styles.contextList}>
          <View style={styles.contextImage}></View>
          <InputLabelComponent
            placeholder={'Write something here'}
            value={name}
            label={'Name'}
            onChangeText={setName}
            require={false}
            messageRequire={'Đây là trường bắt buộc.'}
            isPassword={false}
            maxLength={256}
          />
          <DateTimeFormat value={dateOfBirth} require={false} editing={true} date={dateOfBirthShow} label={'Ngày sinh'} onConfirm={onConfirm} />
          <InputSelectGender value={gender} label={'Giới tính'} onSelect={(gender: GenderConfig) => setGender(gender.value)} />
          <View style={styles.grBtn}>
            <ButtonComponent loading={false} style={styles.btn} onPress={() => console.log('aa')} isSignIn={true} value={'OK'} />
            <ButtonComponent loading={false} style={styles.btn} onPress={() => navigationReset(navigation, 'Register')} isSignIn={false} value={'Cancel'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AC7DD',
    alignItems: 'center',
  },
  grBtn: {
    marginTop: scaleHeight(100),
    marginBottom: scaleHeight(40),
    flexDirection: 'row',
    width: width - 40,
    justifyContent: 'space-between',
  },
  btn: {
    borderRadius: 30,
    width: (width - 60) / 2,
  },
  contextImage: {
    backgroundColor: colors.txtInput,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width,
    height: width * 0.5813,
  },
  contextList: {
    width: width,
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: (width * 2) / 3,
  },
  name: {
    fontFamily: fonts.maliSemiBold,
    color: colors.privacy,
    fontSize: scaleFont(24),
  },
  title: {
    fontFamily: fonts.maliMedium,
    color: colors.privacy,
    fontSize: scaleFont(18),
  },
  txt: {
    marginTop: scaleHeight(-10),
    fontFamily: fonts.maliRegular,
    color: colors.privacy,
    fontSize: scaleFont(12),
  },
  img: {
    height: scaleHeight(100),
    width: scaleHeight(100),
    borderRadius: scaleHeight(50),
  },
});
