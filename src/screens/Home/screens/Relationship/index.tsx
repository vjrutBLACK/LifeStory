import AppContext, {AppContextInterface} from '@components/AppContext';
import AppList from '@components/FlastList/AppList';
import HeaderComponent from '@components/Headers/HeaderComponent';
import ItemUser from '@components/Items/ItemUser';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import * as colors from '@theme/colors';
import {scaleHeight, width} from '@theme/mixins';
import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RelationShip} from '../../../../shared/types';
import ItemThumbnail from '../../../../components/Items/ItemThumbnail';
import {MaterialIndicator} from 'react-native-indicators';

const users = require('@shared/users') as RelationShip[];

interface Props {}

const RelationshipPage = ({}: Props) => {
  const {userProfile} = React.useContext<AppContextInterface>(AppContext);
  const ref = React.useRef(null);
  const [refreshing, setOnRefresh] = React.useState(false);
  const navigation = useNavigation();

  const onEndReached = () => {};
  const renderItem = (props: {index: number; item: RelationShip}) => {
    let {item, index} = props;
    return (
      <ItemThumbnail
        title={item.groups}
        label={item.users?.length ? item.users?.length + ' contacts' : '0 contacts'}
        thumbnail={item.cover}
        key={index}
        onPress={() => navigation.navigate('RelationshipMembers', {data: item})}
      />
    );
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
    return users.length > 0 ? null : (
      <View style={{justifyContent: 'center', height: 100, backgroundColor: colors.backgroundInApp}}>
        <MaterialIndicator color={colors.backgroundSplash} size={30} />
      </View>
    );
    // return (
    //   <TouchableOpacity onPress={() => navigation.navigate('NewProfile')}>
    //     <View style={styles.containerFooter}>
    //       <Icon name={'plus'} size={30} color={colors.privacy} />
    //     </View>
    //   </TouchableOpacity>
    // );
  };
  return (
    <View style={styles.container}>
      <HeaderComponent
        label={'My circles'}
        colorLabel={colors.privacy}
        colorIcon={colors.privacy}
        lefIcon={'align-left'}
        rightIcon={'search'}
        onPressLeft={() => navigation.dispatch(DrawerActions.openDrawer())}
        onPressRight={() => console.log('aaaa')}
      />
      <AppList
        ref={ref}
        showsVerticalScrollIndicator={false}
        data={users}
        extraData={users}
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
  );
};
export default RelationshipPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
});
