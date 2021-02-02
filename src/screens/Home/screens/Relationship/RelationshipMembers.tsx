import AppContext, {AppContextInterface} from '@components/AppContext';
import AppList from '@components/FlastList/AppList';
import HeaderComponent from '@components/Headers/HeaderComponent';
import ItemUser from '@components/Items/ItemUser';
import {DrawerActions, useNavigation, RouteProp} from '@react-navigation/native';
import * as colors from '@theme/colors';
import {scaleHeight, width} from '@theme/mixins';
import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RelationShip, User} from '../../../../shared/types';
import ItemThumbnail from '../../../../components/Items/ItemThumbnail';
import {MaterialIndicator} from 'react-native-indicators';
import {RelationshipStackParamList} from '@navigation/drawer';

interface Props {
  route: RouteProp<RelationshipStackParamList, 'RelationshipMembers'>;
}

const RelationshipMembers = ({route}: Props) => {
  const ref = React.useRef(null);
  const [refreshing, setOnRefresh] = React.useState(false);
  const navigation = useNavigation();

  const onEndReached = () => {};
  const renderItem = (props: {index: number; item: User}) => {
    let {item, index} = props;
    return (
      <ItemThumbnail
        title={item.name}
        label={item.albums?.length ? item.albums?.length + ' photos' : '0 photos'}
        thumbnail={item.albums[0].thumbnail}
        relationship={item.relationship}
        key={index}
        onPress={() => navigation.navigate('DetailMember', {data: item})}
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
    return route.params.data.users.length > 0 ? null : (
      <View style={{justifyContent: 'center', height: 100, backgroundColor: colors.backgroundInApp}}>
        <MaterialIndicator color={colors.backgroundSplash} size={30} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderComponent
        label={route.params.data.groups}
        colorLabel={colors.privacy}
        colorIcon={colors.privacy}
        lefIcon={'chevron-left'}
        rightIcon={'search'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => console.log('aaaa')}
      />
      <AppList
        ref={ref}
        showsVerticalScrollIndicator={false}
        data={route.params.data.users}
        extraData={route.params.data.users}
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
export default RelationshipMembers;

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
