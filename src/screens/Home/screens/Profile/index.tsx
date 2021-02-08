import {Images} from '@assets/index';
import {AppContextInterface} from '@components/AppContext';
import AppContext from '@components/AppContext/index';
import AppList from '@components/FlastList/AppList';
import HeaderProfileComponent from '@components/Headers/HeaderProfileComponent';
import ItemUser from '@components/Items/ItemUser';
import * as colors from '@theme/colors';
import * as fonts from '@theme/fonts';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {scaleFont, scaleHeight, width} from '../../../../theme/mixins';
import {useNavigation} from '@react-navigation/native';
import navigationReset from '@helpers/navigationReset';

const ProfilePage = () => {
  const {userProfile} = React.useContext<AppContextInterface>(AppContext);
  const ref = React.useRef(null);
  const [refreshing, setOnRefresh] = React.useState(false);
  const navigation = useNavigation();

  const onEndReached = () => {};
  const renderItem = (props: {index: number; item: any}) => {
    let {item, index} = props;
    return <ItemUser />;
  };

  const onRefresh = () => {
    setOnRefresh(true);
    //  do something
    setOnRefresh(false);
  };

  const checkLoading = () => {
    // return !called || loading;
  };

  const renderListEmptyComponent = () => {
    // if (checkLoading()) return null;
    // return <Empty text="Không có dữ liệu" textStyle={{color: colors.backgroundSplash}} />;
  };

  const renderFooter = () => {
    // return loading ? (
    //   <View style={{justifyContent: 'center', height: 100, backgroundColor: colors.backgroundInApp}}>
    //     <MaterialIndicator color={colors.backgroundSplash} size={30} />
    //   </View>
    // ) : null;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('NewProfile')}>
        <View style={styles.containerFooter}>
          <Icon name={'plus'} size={30} color={colors.privacy} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderProfileComponent label={'My circles'} onPress={() => navigation.goBack()} onPressEdit={() => navigationReset(navigation, 'MyProfile')} />
      <FastImage style={styles.img} source={Images.AVATAR_DEFAULT} resizeMode={FastImage.resizeMode.contain} />
      <Text style={styles.name}>{userProfile?.FullName}</Text>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>120</Text>
          <Text style={styles.txt}>Contacts</Text>
        </View>
        <View>
          <Text style={styles.title}>12K</Text>
          <Text style={styles.txt}>Photos</Text>
        </View>
        <View>
          <Text style={styles.title}>3</Text>
          <Text style={styles.txt}>Profile</Text>
        </View>
      </View>
      <View style={styles.contextList}>
        <Text style={[styles.name, {fontSize: scaleFont(18), width: width - 40, marginVertical: scaleHeight(20)}]}>Profiles</Text>
        <AppList
          ref={ref}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7]}
          extraData={[1, 2, 3, 4, 5, 6, 7]}
          onEndReached={onEndReached}
          onEndReachedThreshold={10}
          scrollEventThrottle={400}
          keyExtractor={(item: any, index: number) => `${item.id}-${index}`}
          renderItem={renderItem}
          refreshing={refreshing}
          onRefresh={onRefresh}
          // ListEmptyComponent={renderListEmptyComponent}
          ListFooterComponent={renderFooter}
          initialNumToRender={10}
        />
      </View>
    </View>
  );
};
export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundProfile,
    alignItems: 'center',
  },
  containerFooter: {
    marginBottom: scaleHeight(20),
    height: scaleHeight(140),
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 50,
    borderRadius: 16,
    borderColor: colors.privacy,
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  contextList: {
    marginTop: scaleHeight(20),
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
