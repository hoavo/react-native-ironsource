// @flow
import { NativeModules, NativeEventEmitter } from 'react-native';

type EventTypes =
  | 'rewardedVideoDidFailToShowWithError'
  | 'rewardedVideoHasChangedAvailability'
  | 'didReceiveReward'
  | 'didClickRewardedVideo'
  | 'rewardedVideoDidEnd'
  | 'rewardedVideoDidStart'
  | 'rewardedVideoDidClose'
  | 'rewardedVideoDidOpen';

const { RNIronSourceRewardedVideo } = NativeModules;

const IronSourceRewardedVideoEventEmitter = new NativeEventEmitter(RNIronSourceRewardedVideo);

const eventHandlers = {
  rewardedVideoDidFailToShowWithError: new Map(),
  rewardedVideoHasChangedAvailability: new Map(),
  didReceiveReward: new Map(),
  didClickRewardedVideo: new Map(),
  rewardedVideoDidEnd: new Map(),
  rewardedVideoDidStart: new Map(),
  rewardedVideoDidClose: new Map(),
  rewardedVideoDidOpen: new Map(),
};

const addEventListener = (type: EventTypes, handler) => {
  switch (type) {
    case 'rewardedVideoDidFailToShowWithError':
    case 'rewardedVideoHasChangedAvailability':
    case 'didReceiveReward':
    case 'didClickRewardedVideo':
    case 'rewardedVideoDidEnd':
    case 'rewardedVideoDidStart':
    case 'rewardedVideoDidClose':
    case 'rewardedVideoDidOpen':
      eventHandlers[type].set(handler, IronSourceRewardedVideoEventEmitter.addListener(type, handler));
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
  IronSourceRewardedVideoEventEmitter.removeAllListeners('rewardedVideoDidFailToShowWithError');
  IronSourceRewardedVideoEventEmitter.removeAllListeners('didReceiveReward');
  IronSourceRewardedVideoEventEmitter.removeAllListeners('didClickRewardedVideo');
  IronSourceRewardedVideoEventEmitter.removeAllListeners('rewardedVideoDidEnd');
  IronSourceRewardedVideoEventEmitter.removeAllListeners('rewardedVideoDidStart');
  IronSourceRewardedVideoEventEmitter.removeAllListeners('rewardedVideoDidClose');
  IronSourceRewardedVideoEventEmitter.removeAllListeners('rewardedVideoDidOpen');
};

const initializeRewardedVideo = () => {
  RNIronSourceRewardedVideo.initializeRewardedVideo();
};

const showRewardedVideo = () => {
  RNIronSourceRewardedVideo.showRewardedVideo();
};

export default {
  initializeRewardedVideo,
  showRewardedVideo,
  addEventListener,
  removeEventListener,
  removeAllListeners,
};
