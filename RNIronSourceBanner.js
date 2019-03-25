// @flow
import { NativeModules, NativeEventEmitter } from 'react-native';

type EventTypes =
  | 'bannerDidLoad'
  | 'bannerDidFailToLoadWithError'
  | 'bannerWillPresentScreen'
  | 'bannerDidDismissScreen'
  | 'bannerWillLeaveApplication'
  | 'didClickBanner';

type BannerSizes = 'BANNER' | 'LARGE' | 'RECTANGLE' | 'SMART';

const { RNIronSourceBanner } = NativeModules;

const RNIronSourceBannerEventEmitter = new NativeEventEmitter(RNIronSourceBanner);

const eventHandlers = {
  bannerDidLoad: new Map(),
  bannerDidFailToLoadWithError: new Map(),
  bannerWillPresentScreen: new Map(),
  bannerDidDismissScreen: new Map(),
  bannerWillLeaveApplication: new Map(),
  didClickBanner: new Map(),
};

const addEventListener = (type: EventTypes, handler) => {
  switch (type) {
    case 'bannerDidLoad':
    case 'bannerDidFailToLoadWithError':
    case 'bannerWillPresentScreen':
    case 'bannerDidDismissScreen':
    case 'bannerWillLeaveApplication':
    case 'didClickBanner':
      eventHandlers[type].set(handler, RNIronSourceBannerEventEmitter.addListener(type, handler));
      break;
    default:
      console.log(`Event with type ${type} does not exist.`);
  }
};

const removeEventListener = (type: EventTypes, handler) => {
  if (!eventHandlers[type].has(handler)) {
    return;
  }
  eventHandlers[type].get(handler).remove();
  eventHandlers[type].delete(handler);
};

const removeAllListeners = () => {
  RNIronSourceBannerEventEmitter.removeAllListeners('bannerDidLoad');
  RNIronSourceBannerEventEmitter.removeAllListeners('bannerDidFailToLoadWithError');
  RNIronSourceBannerEventEmitter.removeAllListeners('bannerWillPresentScreen');
  RNIronSourceBannerEventEmitter.removeAllListeners('bannerDidDismissScreen');
  RNIronSourceBannerEventEmitter.removeAllListeners('bannerWillLeaveApplication');
  RNIronSourceBannerEventEmitter.removeAllListeners('didClickBanner');
};

const initializeBanner = () => {
  RNIronSourceBanner.initializeBanner();
};

const showBanner = (placementName: string, bannerSize: BannerSizes) => {
  RNIronSourceBanner.showBanner(placementName, bannerSize);
};

const hideBanner = () => {
  RNIronSourceBanner.hideBanner();
};

export default {
  initializeBanner,
  showBanner,
  hideBanner,
  addEventListener,
  removeEventListener,
  removeAllListeners,
};
