import HeaderComponent from '@components/Headers/HeaderComponent';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {scaleFont, scaleHeight, width} from '../../../../theme/mixins';
import {InputLabelComponent} from '@components/Inputs/InputLabelComponent';
import {useState} from 'react';
import InputSelectGender, {GenderConfig} from '@components/Inputs/InputSelectGender';
import {Gender} from '@redux/actions_type';
import DateTimeFormat from '@components/DateTime/DateTimeFormat';
import {SHORT_DATE_FORMAT} from '@helpers/date';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonComponent from '@components/Buttons/ButtonComponent';
import navigationReset from '@helpers/navigationReset';
import useInsertUsers from '../../hook/useInsertUsers';
import {InsertUsersInput} from '../../redux/action-types/InsertUsers';
const NewProfile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);

  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [dateOfBirthShow, setDateOfBirthShow] = useState<string | number>(0);

  const {onInsertUser, data, loading} = useInsertUsers();

  const onConfirm = (date: Date) => {
    setDateOfBirthShow(moment(date).format(SHORT_DATE_FORMAT));
    setDateOfBirth(date);
  };

  const onInsertUserHandle = () => {
    const data = {
      Phone: phoneNumber,
      FullName: name,
      DateOfBirth: dateOfBirth,
      TypeOfUserName: 1,
      Avatar: 'a',
      Gender: gender,
    } as InsertUsersInput;
    onInsertUser(data);
  };
  return (
    <View style={styles.container}>
      <HeaderComponent
        label={'New Profile'}
        colorLabel={colors.white}
        colorIcon={colors.txtInput}
        lefIcon={'chevron-left'}
        rightIcon={'search'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => console.log('aaaa')}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
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
          <InputLabelComponent
            placeholder={'Write phone number'}
            value={phoneNumber}
            label={'Phone Number'}
            onChangeText={setPhoneNumber}
            require={false}
            messageRequire={'Đây là trường bắt buộc.'}
            isPassword={false}
            maxLength={256}
          />
          <InputSelectGender value={gender} label={'Giới tính'} onSelect={(gender: GenderConfig) => setGender(gender.value)} />
          <View style={styles.grBtn}>
            <ButtonComponent loading={loading} style={styles.btn} onPress={onInsertUserHandle} isSignIn={true} value={'OK'} />
            <ButtonComponent loading={false} style={styles.btn} onPress={() => navigation.goBack()} isSignIn={false} value={'Cancel'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default NewProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AC7DD',
    alignItems: 'center',
  },
  grBtn: {
    marginTop: 100,
    marginBottom: 20,
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
