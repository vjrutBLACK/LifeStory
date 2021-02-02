import {Dimensions, PixelRatio} from 'react-native';

export const widthW = Dimensions.get('window').width;
export const heightH = Dimensions.get('window').height;
export const width = widthW < heightH ? widthW : heightH;
export const height = heightH > widthW ? heightH : widthW;
const BASE_WIDTH = 375;
const BASE_HỊGHT = 812;

const scaleW = width / BASE_WIDTH;
const scaleH = height / BASE_HỊGHT;

export const scaleSize = (size: number): number => scaleW * size;

export const scaleFont = (size: number): number => PixelRatio.roundToNearestPixel(scaleW * size);

export const scaleHeight = (size: number): number => scaleH * size;

export const deviceH = Dimensions.get('screen').height;
