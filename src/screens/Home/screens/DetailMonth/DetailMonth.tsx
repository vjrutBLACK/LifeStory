import AppContext, {AppContextInterface} from '@components/AppContext';
import FloatingComponent from '@components/Floating/FloatingComponent';
import HeaderComponent from '@components/Headers/HeaderComponent';
import MenuBarComponent from '@components/Menu/MenuBarComponent';
import {DetailMonthNavigationProp, HomeStackParamList} from '@navigation/drawer';
import * as colors from '@theme/colors';
import {width} from '@theme/mixins';
import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import useGetYearTimelines from '../../hook/useGetYearTimelines';
import {Year, Month} from '../../../../shared/types';
import FastImage from 'react-native-fast-image';
import {ScrollView, TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import * as fonts from '@theme/fonts';
import {scaleFont, scaleHeight} from '../../../../theme/mixins';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import ItemCollapse from '../../../../components/Items/ItemCollapse';
interface Props {
  route: RouteProp<HomeStackParamList, 'DetailMonth'>;
}

const DetailMonth = ({route}: Props) => {
  const navigation = useNavigation();

  console.log('route', route);

  const renderItem = (props: {index: number; item: Month}) => {
    let {item, index} = props;
    return <ItemCollapse key={index} month={item} />;
  };
  return (
    <View style={styles.container}>
      <HeaderComponent
        label={route.params.data?.year}
        colorLabel={colors.privacy}
        colorIcon={colors.privacy}
        lefIcon={'align-left'}
        rightIcon={'search'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => console.log('aaaa')}
      />
      <FlatList data={route.params.data.months} renderItem={renderItem} />
      <FloatingComponent />
    </View>
  );
};
export default DetailMonth;

const imgWidth = (width * 2) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  txt: {
    fontFamily: fonts.maliMedium,
    fontSize: scaleFont(18),
    color: colors.privacy,
    marginBottom: 10,
  },
  img: {
    borderRadius: 20,
    width: scaleHeight(imgWidth),
    height: scaleHeight((imgWidth * 2) / 3),
  },
  labeIndicator: {
    marginLeft: 36,
    marginBottom: 20,
    width: width - 80,
  },
});

const stepIndicatorStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 20,
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#82B1FF80',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#82B1FF',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  currentStepLabelColor: '#7eaec4',
};
