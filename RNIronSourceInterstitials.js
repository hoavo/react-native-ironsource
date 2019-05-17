// @flow
import { NativeModules, NativeEventEmitter } from 'react-native';

type EventTypes =
  | 'didClickInterstitial'
  | 'interstitialDidFailToShowWithError'
  | 'interstitialDidShow'
  | 'interstitialDidClose'
  | 'interstitialDidOpen'
  | 'interstitialDidFailToLoadWithError'
  | 'interstitialDidLoad';

const { RNIronSourceInterstitials } = NativeModules;

const RNIronSourceInterstitialsEventEmitter = new NativeEventEmitter(RNIronSourceInterstitials);

const eventHandlers = {
  didClickInterstitial: new Map(),
  interstitialDidFailToShowWithError: new Map(),
  interstitialDidShow: new Map(),
  interstitialDidClose: new Map(),
  interstitialDidOpen: new Map(),
  interstitialDidFailToLoadWithError: new Map(),
  interstitialDidLoad: new Map(),
};

const addEventListener = (type: EventTypes, handler) => {
  switch (type) {
    case 'didClickInterstitial':
    case 'interstitialDidFailToShowWithError':
    case 'interstitialDidShow':
    case 'interstitialDidClose':
    case 'interstitialDidOpen':
    case 'interstitialDidFailToLoadWithError':
    case 'interstitialDidLoad':
      eventHandlers[type].set(handler, RNIronSourceInterstitialsEventEmitter.addListener(type, handler));
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
  RNIronSourceInterstitialsEventEmitter.removeAllListeners('didClickInterstitial');
  RNIronSourceInterstitialsEventEmitter.removeAllListeners('interstitialDidFailToShowWithError');
  RNIronSourceInterstitialsEventEmitter.removeAllListeners('interstitialDidShow');
  RNIronSourceInterstitialsEventEmitter.removeAllListeners('interstitialDidClose');
  RNIronSourceInterstitialsEventEmitter.removeAllListeners('interstitialDidOpen');
  RNIronSourceInterstitialsEventEmitter.removeAllListeners('interstitialDidFailToLoadWithError');
  RNIronSourceInterstitialsEventEmitter.removeAllListeners('interstitialDidLoad');
};

const initializeInterstitial = () => {
  RNIronSourceInterstitials.initializeInterstitial();
};

const showInterstitial = (placementName: string) => {
  RNIronSourceInterstitials.showInterstitial(placementName);
};

export default {
  initializeInterstitial,
  showInterstitial,
  addEventListener,
  removeEventListener,
  removeAllListeners,
};
