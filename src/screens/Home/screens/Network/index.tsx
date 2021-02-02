import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HeaderComponent from '@components/Headers/HeaderComponent';
import * as colors from '@theme/colors';

const NetworkPage = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent
        label={'Control Page'}
        colorLabel={colors.privacy}
        colorIcon={colors.privacy}
        lefIcon={'align-left'}
        rightIcon={'search'}
        onPressLeft={() => console.log('aaaa')}
        onPressRight={() => console.log('aaaa')}
      />
    </View>
  );
};
export default NetworkPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});