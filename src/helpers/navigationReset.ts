import {NavigationProp, CommonActions} from '@react-navigation/native';

export default (navigation: any, routerName: string): void => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routerName}],
    }),
  );
};
