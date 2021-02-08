import * as colors from '@theme/colors';
import {width} from '@theme/mixins';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scaleFont, scaleHeight, scaleSize} from '../../theme/mixins';
import {Year} from '@shared/types';
import * as fonts from '@theme/fonts';

interface Props {
  label: string;
  value: Year;
  dataSource: Year[];
  onPressItem: (data: Year) => void;
  // onPressAll: () => void;
}

const MenuBarComponent = ({label, value, onPressItem, dataSource}: Props) => {
  const [index, setIndex] = React.useState<number>(0);
  const flatListRef = React.useRef<any>();

  const renderItem = (item: Year, index: number) => {
    return (
      <TouchableOpacity key={index} onPress={() => onPressItem(item)}>
        <View style={[styles.item, {backgroundColor: value?.id === item.id ? colors.privacy : colors.white}]}>
          <Text style={[styles.txtItem, {color: value?.id === item.id ? colors.white : colors.privacy}]}>{item.year}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const scrollToItem = (index: number) => {
    if (dataSource.length !== 0 && flatListRef !== null) {
      flatListRef?.current?.scrollToIndex({index: index, animated: true, viewPosition: 0.5});
    }
  };

  const scrollToOffset = () => {
    flatListRef?.current?.scrollToOffset({offset: 105, animated: false});
  };

  useEffect(() => {
    dataSource?.map((c: any, indexNew: number) => {
      if (value && value.id === c.id) {
        setIndex(indexNew);
        scrollToItem(indexNew);
      }
    });
  }, [value]);

  return (
    <View style={styles.contextFlatList}>
      <FlatList
        ref={flatListRef}
        // getItemLayout={getItemLayout}
        data={dataSource}
        contentContainerStyle={styles.contentContainerStyle}
        initialScrollIndex={index}
        initialNumToRender={index}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onScrollToIndexFailed={(error) => {
          flatListRef.current.scrollToOffset({offset: error.averageItemLength * error.index, animated: false});
          setTimeout(() => {
            if (dataSource?.length !== 0 && flatListRef !== null) {
              flatListRef?.current?.scrollToIndex({index: error.index, animated: true, viewPosition: 0.8});
            }
          }, 200);
        }}
        keyExtractor={(item) => item.id.toString()}
        extraData={dataSource}
        renderItem={({item, index}) => renderItem(item, index)}
        {...dataSource}
      />
    </View>
  );
};
export default MenuBarComponent;

const styles = StyleSheet.create({
  contentContainerStyle: {
    minWidth: 'auto',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  contextFlatList: {
    width: width,
    paddingLeft: 20,
    paddingVertical: scaleHeight(16),
  },
  item: {
    width: scaleHeight(100),
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 8,
  },
  txtItem: {
    fontFamily: fonts.maliMedium,
    fontSize: scaleFont(16),
  },
  content: {
    height: scaleHeight(150),
    backgroundColor: colors.white,
  },
  label: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: scaleFont(14),
    marginTop: scaleHeight(20),
  },
  txt: {
    fontSize: scaleSize(12),
    color: '#197EDE',
    fontWeight: 'bold',
  },
  contextTxt: {
    // backgroundColor: 'red',
    height: scaleHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleHeight(20),
    width: width,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
});
