/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { RNIronSource, RNIronSourceRewardedVideo } from 'react-native-iron-source';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    RNIronSourceRewardedVideo.initializeRewardedVideo()
    RNIronSourceRewardedVideo.addEventListener("rewardedVideoDidFailToShowWithError",this.rewardedVideoDidFailToShowWithError)
    RNIronSourceRewardedVideo.addEventListener("rewardedVideoHasChangedAvailability",this.rewardedVideoHasChangedAvailability)
    RNIronSourceRewardedVideo.addEventListener("didReceiveReward",this.didReceiveReward)
    RNIronSourceRewardedVideo.addEventListener("didClickRewardedVideo",this.didClickRewardedVideo)
    RNIronSourceRewardedVideo.addEventListener("rewardedVideoDidEnd",this.rewardedVideoDidEnd)
    RNIronSourceRewardedVideo.addEventListener("rewardedVideoDidStart",this.rewardedVideoDidStart)
    RNIronSourceRewardedVideo.addEventListener("rewardedVideoDidClose",this.rewardedVideoDidClose)
    RNIronSourceRewardedVideo.addEventListener("rewardedVideoDidOpen",this.rewardedVideoDidOpen)
  }
  componentWillMount() {
    RNIronSource.initWithAppKey("8c7421e5","1")
    
  }

  rewardedVideoDidFailToShowWithError = (error) => {
    console.log("rewardedVideoDidFailToShowWithError",error)
  }

  rewardedVideoHasChangedAvailability = (available) => {
    console.log("rewardedVideoHasChangedAvailability",available)
  }

  didReceiveReward = () => {
    console.log("didReceiveReward")
  }

  didClickRewardedVideo = () => {
    console.log("didClickRewardedVideo")
  }

  rewardedVideoDidEnd = () => {
    console.log("rewardedVideoDidEnd")
  }

  rewardedVideoDidStart = () => {
    console.log("rewardedVideoDidStart")
  }

  rewardedVideoDidClose = () => {
    console.log("didClickRewardedVideo")
  }

  rewardedVideoDidOpen = () => {
    console.log("didClickRewardedVideo")
  }

  componentWillUnmount() {
    RNIronSourceRewardedVideo.removeAllListeners();
  }


  showRewardedVideo() {
    RNIronSourceRewardedVideo.showRewardedVideo()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={() => this.showRewardedVideo()} >
        <Text style={styles.instructions}>
          Show Ad
          </Text>
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
    marginBottom: 5,
  },
});
