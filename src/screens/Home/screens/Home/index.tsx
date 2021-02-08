import AppContext, {AppContextInterface} from '@components/AppContext';
import FloatingComponent from '@components/Floating/FloatingComponent';
import HeaderComponent from '@components/Headers/HeaderComponent';
import MenuBarComponent from '@components/Menu/MenuBarComponent';
import {HomePageNavigationProp, HomeStackScreenNavigationProp} from '@navigation/drawer';
import * as colors from '@theme/colors';
import {width} from '@theme/mixins';
import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import useGetYearTimelines from '../../hook/useGetYearTimelines';
import {Year} from '../../../../shared/types';
import FastImage from 'react-native-fast-image';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import * as fonts from '@theme/fonts';
import {scaleFont, scaleHeight} from '../../../../theme/mixins';
import {DrawerActions} from '@react-navigation/native';

const years = require('@shared/years') as Year[];
const ALL = {
  id: '0',
  createdAt: new Date(),
  year: 'ALL',
  cover: '',
  months: [],
};

const steps = years.map((year: Year) => {
  return year.id;
});
interface Props {
  navigation: HomePageNavigationProp;
}

const HomePage = ({navigation}: Props) => {
  const {onGetYearTimelines, loading, data} = useGetYearTimelines();
  const [value, setValue] = useState<Year>(ALL);
  const {userProfile} = React.useContext<AppContextInterface>(AppContext);
  React.useEffect(() => {
    if (userProfile?.ID) {
      onGetYearTimelines(userProfile?.ID as string);
    }
  }, []);
  const renderLabel = (args: {position: number; stepStatus: string; label: string; currentPosition: number}) => {
    const item = years.find((year: Year) => year.id === args.label);
    if (item) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailMonth', {data: item})}>
          <View style={styles.labeIndicator}>
            <Text style={styles.txt}>{item.year}</Text>
            <FastImage source={{uri: item.cover}} style={styles.img} resizeMode={FastImage.resizeMode.cover} />
          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        label={'My Stories'}
        colorLabel={colors.privacy}
        colorIcon={colors.privacy}
        lefIcon={'align-left'}
        rightIcon={'search'}
        onPressLeft={() => navigation.dispatch(DrawerActions.openDrawer())}
        onPressRight={() => console.log('aaaa')}
      />
      <MenuBarComponent dataSource={[ALL, ...years]} value={value} label={'Lĩnh vực luật'} onPressItem={setValue} />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, paddingLeft: 40}}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={steps.length}
          direction="vertical"
          currentPosition={steps.length}
          renderLabel={renderLabel}
          labels={steps}
        />
      </ScrollView>
      <FloatingComponent />
    </View>
  );
};
export default HomePage;

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
