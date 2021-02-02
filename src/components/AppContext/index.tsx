import * as React from 'react';
import {UserDetail} from '@screens/Auth/redux/action-types';

export interface AppContextInterface {
  userProfile: UserDetail | null | undefined;
  updateUserProfile: (user: UserDetail | null | undefined) => void;
}

const ctxt = React.createContext<AppContextInterface>({
  userProfile: null,
  updateUserProfile: () => {},
});

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;

export default ctxt;

// home
export interface HomeContextInterface {
  // permissionModalDisplay: boolean;
  showRequestPermissionModal: () => void;
  closeRequestPermissionModal: () => void;
}
export const HomeContext = React.createContext<HomeContextInterface>({
  // permissionModalDisplay: false,
  showRequestPermissionModal: () => {},
  closeRequestPermissionModal: () => {},
});
export const HomeContextProvider = HomeContext.Provider;

export const HomeContextConsumer = HomeContext.Consumer;
