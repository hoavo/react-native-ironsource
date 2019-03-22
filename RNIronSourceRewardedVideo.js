import { NativeModules, NativeEventEmitter } from 'react-native';

const RNIronSourceRewardedVideo = NativeModules.RNIronSourceRewardedVideo;
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

const addEventListener = (type, handler) => {
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

const removeEventListener = (type, handler) => {
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

export default {
//   ...RNIronSourceRewardedVideo,
  initializeRewardedVideo: () => RNIronSourceRewardedVideo.initializeRewardedVideo(),
  showRewardedVideo: () => RNIronSourceRewardedVideo.showRewardedVideo(),
  addEventListener,
  removeEventListener,
  removeAllListeners
};