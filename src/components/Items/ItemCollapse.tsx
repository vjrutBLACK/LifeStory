import * as fonts from '@theme/fonts';
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Album, Month} from '../../shared/types';
import {scaleFont, scaleHeight, width, height} from '../../theme/mixins';
import ImageSize from 'react-native-image-size';
interface Props {
  month: Month;
}
enum Direction {
  COLUMN = 'column',
  ROW = 'row',
}
interface PageSize {
  width: number;
  height: number;
}

interface Photo {
  url: string;
  pageSize: PageSize;
}

const ItemCollapse = ({month}: Props) => {
  const [data, setData] = React.useState([]);

  // const renderPhotos = () => {
  //   const photos = month.albums.map(async (album: Album) => {
  //     // const  = getMeta(album.thumbnail);
  //     const data = await ImageSize.getSize(album?.thumbnail).then((width: number, height: number, rotation?: number) => {
  //       return {
  //         url: album.thumbnail,
  //         pageSize: {
  //           width,
  //           height,
  //         },
  //       };
  //     });
  //     // data.then((width: number, height: number) => {
  //     // });
  //   });
  //   console.log('photos', photos);
  //   setData(photos.length ? photos : []);
  // };

  // const dataSource = React.useMemo(() => {
  //   if (month?.albums.length && month?.albums) {
  //     const data = await ImageSize.getSize(album?.thumbnail).then((width: number, height: number, rotation?: number) => {
  //       return {
  //         url: album.thumbnail,
  //         pageSize: {
  //           width,
  //           height,
  //         },
  //       };
  //     });
  //   }
  // }, []);

  console.log('data', data);

  // React.useEffect(() => {
  //   renderPhotos();
  // }, []);
  const photos = month.albums.map((album: Album) => {
    return album.thumbnail;
  });

  const getPage = async (url: string) => {
    const {width, height} = await ImageSize.getSize(url);
    return {
      width,
      height,
    };
  };

  const renderImage = (direction: Direction[], matrix: number[], images: string[]) => {
    if (direction === [Direction.ROW, Direction.COLUMN] && images.length === 4) {
      return (
        <View style={styles.contextItem}>
          <View style={styles.row}>
            {images[0] ? <FastImage source={{uri: images[0]}} style={styles.image1} resizeMode={FastImage.resizeMode.contain} /> : null}
            <View>
              {images[1] ? <FastImage source={{uri: images[1]}} style={styles.image2} resizeMode={FastImage.resizeMode.contain} /> : null}
              {images[2] ? <FastImage source={{uri: images[2]}} style={styles.image2} resizeMode={FastImage.resizeMode.contain} /> : null}
            </View>
          </View>
          <View>{images[3] ? <FastImage source={{uri: images[3]}} style={styles.image4} resizeMode={FastImage.resizeMode.contain} /> : null}</View>
        </View>
      );
    } else {
      return (
        <View style={styles.contextItem}>
          <View style={styles.row}>
            {images[0] ? <FastImage source={{uri: images[0]}} style={styles.image1} resizeMode={FastImage.resizeMode.contain} /> : null}
            <View style={styles.column}>
              {images[1] ? <FastImage source={{uri: images[1]}} style={styles.image2} resizeMode={FastImage.resizeMode.contain} /> : null}
              {images[2] ? <FastImage source={{uri: images[2]}} style={styles.image2} resizeMode={FastImage.resizeMode.contain} /> : null}
            </View>
          </View>
          <View>{images[3] ? <FastImage source={{uri: images[3]}} style={styles.image4} resizeMode={FastImage.resizeMode.contain} /> : null}</View>
        </View>
      );
    }
  };
  return <View style={[styles.container]}>{renderImage([Direction.ROW, Direction.COLUMN], [1, 2, 1], photos)}</View>;
};

export default ItemCollapse;
const imgWight1 = (width - 20) / 2;
const imgHeight1 = width - 90;
const styles = StyleSheet.create({
  container: {
    width: width - 40,
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  column: {
    height: scaleHeight(imgHeight1),
    justifyContent: 'space-between',
  },
  contextItem: {
    width: width - 40,
    justifyContent: 'space-between',
  },
  txt: {
    fontFamily: fonts.maliRegular,
    color: '#00000050',
    fontSize: scaleFont(14),
  },
  image1: {
    height: scaleHeight(imgHeight1),
    width: scaleHeight(imgWight1),
    borderRadius: 10,
  },
  image2: {
    height: scaleHeight(imgHeight1 / 2),
    width: scaleHeight((imgHeight1 + 14) / 2),
    borderRadius: 10,
  },
  image3: {
    height: scaleHeight(80),
    width: scaleHeight(80),
    borderRadius: 10,
  },
  image4: {
    borderRadius: 10,
    height: scaleHeight(160),
    width: scaleHeight(width - 40),
  },
});
