/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  PlatformAndroidStatic,
  PlatformIOSStatic,
  PlatformMacOSStatic,
  PlatformWebStatic,
  PlatformWindowsOSStatic,
} from 'react-native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type PlatformTypes =
  | PlatformIOSStatic
  | PlatformAndroidStatic
  | PlatformWindowsOSStatic
  | PlatformMacOSStatic
  | PlatformWebStatic;

export type ResultObject = {
  id: number;
  type: string[];
  artist: string;
  album: string;
  genre: string;
  song: string;
  keywords: string[];
  correctResponse: string[];
  urls: string[];
};

export type Answers = {
  id: number;
  userInput: string;
}[];

export type Profile = {
  firstName: string;
};

export type AuthTypes = {
  email: string;
  setEmail: SetStringState;
  password: string;
  setPassword: SetStringState;
  verifyPassword: string;
  setVerifyPassword: SetStringState;
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  authModalState: boolean;
  setAuthModalState: SetBooleanState;
  register: boolean;
  setRegister: SetBooleanState;
  login: boolean;
  setLogin: SetBooleanState;
};

export type SetBooleanState = React.Dispatch<React.SetStateAction<boolean>>;
export type SetStringState = React.Dispatch<React.SetStateAction<string>>;
