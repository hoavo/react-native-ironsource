/* eslint-disable react/no-deprecated */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RNIronSource, RNIronSourceRewardedVideo, RNIronSourceInterstitials, RNIronSourceOfferwall, RNIronSourceBanner } from 'react-native-iron-source';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    RNIronSourceRewardedVideo.initializeRewardedVideo();
    RNIronSourceInterstitials.initializeInterstitial();
    RNIronSourceOfferwall.initializeOfferwall();
    RNIronSourceBanner.initializeBanner();

    RNIronSourceRewardedVideo.addEventListener('rewardedVideoDidFailToShowWithError', this.rewardedVideoDidFailToShowWithError);
    RNIronSourceRewardedVideo.addEventListener('rewardedVideoHasChangedAvailability', this.rewardedVideoHasChangedAvailability);
    RNIronSourceRewardedVideo.addEventListener('didReceiveReward', this.didReceiveReward);
    RNIronSourceRewardedVideo.addEventListener('didClickRewardedVideo', this.didClickRewardedVideo);
    RNIronSourceRewardedVideo.addEventListener('rewardedVideoDidEnd', this.rewardedVideoDidEnd);
    RNIronSourceRewardedVideo.addEventListener('rewardedVideoDidStart', this.rewardedVideoDidStart);
    RNIronSourceRewardedVideo.addEventListener('rewardedVideoDidClose', this.rewardedVideoDidClose);
    RNIronSourceRewardedVideo.addEventListener('rewardedVideoDidOpen', this.rewardedVideoDidOpen);

    RNIronSourceInterstitials.addEventListener('didClickInterstitial', this.didClickInterstitial);
    RNIronSourceInterstitials.addEventListener('interstitialDidFailToLoadWithError', this.interstitialDidFailToLoadWithError);
    RNIronSourceInterstitials.addEventListener('interstitialDidFailToShowWithError', this.interstitialDidFailToShowWithError);
    RNIronSourceInterstitials.addEventListener('interstitialDidClose', this.interstitialDidClose);
    RNIronSourceInterstitials.addEventListener('interstitialDidLoad', this.interstitialDidLoad);
    RNIronSourceInterstitials.addEventListener('interstitialDidOpen', this.interstitialDidOpen);
    RNIronSourceInterstitials.addEventListener('interstitialDidShow', this.interstitialDidShow);

    RNIronSourceOfferwall.addEventListener('didFailToReceiveOfferwallCreditsWithError', this.didFailToReceiveOfferwallCreditsWithError);
    RNIronSourceOfferwall.addEventListener('didReceiveOfferwallCredits', this.didReceiveOfferwallCredits);
    RNIronSourceOfferwall.addEventListener('offerwallDidClose', this.offerwallDidClose);
    RNIronSourceOfferwall.addEventListener('offerwallDidFailToShowWithError', this.offerwallDidFailToShowWithError);
    RNIronSourceOfferwall.addEventListener('offerwallDidShow', this.offerwallDidShow);
    RNIronSourceOfferwall.addEventListener('offerwallHasChangedAvailability', this.offerwallHasChangedAvailability);

    RNIronSourceBanner.addEventListener('bannerDidDismissScreen', this.bannerDidDismissScreen);
    RNIronSourceBanner.addEventListener('bannerDidFailToLoadWithError', this.bannerDidFailToLoadWithError);
    RNIronSourceBanner.addEventListener('bannerDidLoad', this.bannerDidLoad);
    RNIronSourceBanner.addEventListener('bannerWillLeaveApplication', this.bannerWillLeaveApplication);
    RNIronSourceBanner.addEventListener('bannerWillPresentScreen', this.bannerWillPresentScreen);
    RNIronSourceBanner.addEventListener('didClickBanner', this.didClickBanner);
  }

  componentWillMount() {
    RNIronSource.initWithAppKey('8c7421e5', '1');
  }

  bannerDidDismissScreen = () => {
    console.log('bannerDidDismissScreen');
  };

  bannerDidFailToLoadWithError = error => {
    console.log('bannerDidFailToLoadWithError', error);
  };

  bannerDidLoad = () => {
    console.log('bannerDidLoad');
  };

  bannerWillLeaveApplication = () => {
    console.log('bannerWillLeaveApplication');
  };

  bannerWillPresentScreen = () => {
    console.log('bannerWillPresentScreen');
  };

  didClickBanner = () => {
    console.log('didClickBanner');
  };

  didFailToReceiveOfferwallCreditsWithError = () => {
    console.log('didFailToReceiveOfferwallCreditsWithError');
  };

  didReceiveOfferwallCredits = () => {
    console.log('didReceiveOfferwallCredits');
  };

  offerwallDidClose = () => {
    console.log('offerwallDidClose');
  };

  offerwallDidFailToShowWithError = () => {
    console.log('offerwallDidFailToShowWithError');
  };

  offerwallDidShow = () => {
    console.log('offerwallDidShow');
  };

  offerwallHasChangedAvailability = data => {
    console.log('offerwallHasChangedAvailability', data);
  };

  didClickInterstitial = () => {
    console.log('didClickInterstitial');
  };

  interstitialDidFailToLoadWithError = error => {
    console.log('interstitialDidFailToLoadWithError', error);
  };

  interstitialDidFailToShowWithError = error => {
    console.log('interstitialDidFailToShowWithError', error);
  };

  interstitialDidClose = () => {
    console.log('interstitialDidClose');
  };

  interstitialDidLoad = () => {
    console.log('interstitialDidLoad');
  };

  interstitialDidOpen = () => {
    console.log('interstitialDidOpen');
  };

  interstitialDidShow = () => {
    console.log('interstitialDidShow');
  };

  rewardedVideoDidFailToShowWithError = error => {
    console.log('rewardedVideoDidFailToShowWithError', error);
  };

  rewardedVideoHasChangedAvailability = available => {
    console.log('rewardedVideoHasChangedAvailability', available);
  };

  didReceiveReward = () => {
    console.log('didReceiveReward');
  };

  didClickRewardedVideo = () => {
    console.log('didClickRewardedVideo');
  };

  rewardedVideoDidEnd = () => {
    console.log('rewardedVideoDidEnd');
  };

  rewardedVideoDidStart = () => {
    console.log('rewardedVideoDidStart');
  };

  rewardedVideoDidClose = () => {
    console.log('didClickRewardedVideo');
  };

  rewardedVideoDidOpen = () => {
    console.log('didClickRewardedVideo');
  };

  componentWillUnmount() {
    RNIronSourceRewardedVideo.removeAllListeners();
  }

  showRewardedVideo() {
    RNIronSourceRewardedVideo.showRewardedVideo();
  }

  showInterstitial() {
    RNIronSourceInterstitials.showInterstitial();
  }

  showOfferwall() {
    RNIronSourceOfferwall.showOfferwall();
  }

  showBanner() {
    RNIronSourceBanner.showBanner('Startup', 'BANNER');
  }

  hideBanner() {
    RNIronSourceBanner.hideBanner();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={() => this.showRewardedVideo()}>
          <Text style={styles.instructions}>Show RewardedVideo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showInterstitial()}>
          <Text style={styles.instructions}>Show Interstitial</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showOfferwall()}>
          <Text style={styles.instructions}>Show Offerwall</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showBanner()}>
          <Text style={styles.instructions}>Show Banner</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.hideBanner()}>
          <Text style={styles.instructions}>Hide Banner</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
  },
});
