import ButtonComponent from '@components/Buttons/ButtonComponent';
import DateTimeFormat from '@components/DateTime/DateTimeFormat';
import HeaderComponent from '@components/Headers/HeaderComponent';
import {InputLabelComponent} from '@components/Inputs/InputLabelComponent';
import InputSelectGender, {GenderConfig} from '@components/Inputs/InputSelectGender';
import {SHORT_DATE_FORMAT} from '@helpers/date';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {Gender} from '@redux/actions_type';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import moment from 'moment';
import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {scaleFont, scaleHeight, width} from '../../../../theme/mixins';
import useInsertUsers from '../../hook/useInsertUsers';
import {InsertUsersInput} from '../../redux/action-types/InsertUsers';
import {RelationshipStackParamList} from '@navigation/drawer';
import FastImage from 'react-native-fast-image';
import ItemComponent from '../../../../components/Items/ItemComponent';
import {white} from '../../../../theme/colors';

interface Props {
  route: RouteProp<RelationshipStackParamList, 'DetailMember'>;
}

const DetailMember = ({route}: Props) => {
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
        label={route.params.data.name}
        colorLabel={colors.white}
        colorIcon={colors.white}
        lefIcon={'chevron-left'}
        rightIcon={'search'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => console.log('aaaa')}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.contextList}>
          <FastImage style={styles.contextImage} source={{uri: route.params.data.albums[0].thumbnail}} />
          <Text style={styles.title}>{route.params.data.name}</Text>
          <ItemComponent label={route.params.data.phone} icon={'phone'} />
          <ItemComponent label={route.params.data.dateOfBirth} icon={'calendar'} />
          <ItemComponent label={route.params.data.mutualFriends ? route.params.data.mutualFriends + ' mutual friends' : '0 mutual friends'} icon={'users'} />
          <InputSelectGender value={gender} label={'Relationship Type'} onSelect={(gender: GenderConfig) => setGender(gender.value)} />
          <InputSelectGender value={gender} label={'Relationship Name'} onSelect={(gender: GenderConfig) => setGender(gender.value)} />

          <View style={styles.grBtn}>
            <ButtonComponent loading={loading} style={styles.btn} onPress={onInsertUserHandle} isSignIn={true} value={'View Photos'} />
            <ButtonComponent loading={false} style={styles.btn} onPress={() => navigation.goBack()} isSignIn={false} value={'Remove'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default DetailMember;

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
    width: width - 40,
    fontFamily: fonts.maliMedium,
    color: colors.privacy,
    fontSize: scaleFont(24),
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
