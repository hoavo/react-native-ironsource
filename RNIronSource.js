// @flow
import { NativeModules } from 'react-native';

const { RNIronSource } = NativeModules;

const initWithAppKey = (appKey: string, userId: string) => RNIronSource.initWithAppKey(appKey, userId);

export default {
  initWithAppKey,
};
