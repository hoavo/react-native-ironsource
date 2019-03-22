import { NativeModules } from 'react-native';

const RNIronSource = NativeModules.RNIronSource;

const addEventListener = (type, handler) => {
  switch (type) {
    default:
      console.log(`Event with type ${type} does not exist.`);
  }
}

const removeEventListener = (type, handler) => {
  if (!eventHandlers[type].has(handler)) {
    return;
  }
  eventHandlers[type].get(handler).remove();
  eventHandlers[type].delete(handler);
}

const removeAllListeners = () => {

};

export default {
    ...RNIronSource,
  initWithAppKey: (appKey, adUnits) => RNIronSource.initWithAppKey(appKey, adUnits),
  addEventListener,
  removeEventListener,
  removeAllListeners
};