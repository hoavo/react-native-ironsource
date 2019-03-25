// @flow
import { NativeModules, NativeEventEmitter } from 'react-native';

type EventTypes =
  | 'didFailToReceiveOfferwallCreditsWithError'
  | 'didReceiveOfferwallCredits'
  | 'offerwallDidClose'
  | 'offerwallDidFailToShowWithError'
  | 'offerwallDidShow'
  | 'offerwallHasChangedAvailability';

const { RNIronSourceOfferwall } = NativeModules;

const RNIronSourceOfferwallEventEmitter = new NativeEventEmitter(RNIronSourceOfferwall);

const eventHandlers = {
  didFailToReceiveOfferwallCreditsWithError: new Map(),
  didReceiveOfferwallCredits: new Map(),
  offerwallDidClose: new Map(),
  offerwallDidFailToShowWithError: new Map(),
  offerwallDidShow: new Map(),
  offerwallHasChangedAvailability: new Map(),
};

const addEventListener = (type: EventTypes, handler) => {
  switch (type) {
    case 'didFailToReceiveOfferwallCreditsWithError':
    case 'didReceiveOfferwallCredits':
    case 'offerwallDidClose':
    case 'offerwallDidFailToShowWithError':
    case 'offerwallDidShow':
    case 'offerwallHasChangedAvailability':
      eventHandlers[type].set(handler, RNIronSourceOfferwallEventEmitter.addListener(type, handler));
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
  RNIronSourceOfferwallEventEmitter.removeAllListeners('didFailToReceiveOfferwallCreditsWithError');
  RNIronSourceOfferwallEventEmitter.removeAllListeners('didReceiveOfferwallCredits');
  RNIronSourceOfferwallEventEmitter.removeAllListeners('offerwallDidClose');
  RNIronSourceOfferwallEventEmitter.removeAllListeners('offerwallDidFailToShowWithError');
  RNIronSourceOfferwallEventEmitter.removeAllListeners('offerwallDidShow');
  RNIronSourceOfferwallEventEmitter.removeAllListeners('offerwallHasChangedAvailability');
};

const initializeOfferwall = () => {
  RNIronSourceOfferwall.initializeOfferwall();
};

const showOfferwall = () => {
  RNIronSourceOfferwall.showOfferwall();
};

export default {
  initializeOfferwall,
  showOfferwall,
  addEventListener,
  removeEventListener,
  removeAllListeners,
};
