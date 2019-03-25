//
//  RNIronSourceRewardedVideo.swift
//  example
//
//  Created by Loi Relia on 3/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

let kRewardedVideoDidFailToShowWithError = "rewardedVideoDidFailToShowWithError";
let kRewardedVideoHasChangedAvailability = "rewardedVideoHasChangedAvailability";
let kDidReceiveReward = "didReceiveReward";
let kDidClickRewardedVideo = "didClickRewardedVideo";
let kRewardedVideoDidEnd = "rewardedVideoDidEnd";
let kRewardedVideoDidStart = "rewardedVideoDidStart";
let kRewardedVideoDidClose = "rewardedVideoDidClose";
let kRewardedVideoDidOpen = "rewardedVideoDidOpen";

@objc(RNIronSourceRewardedVideo)
class RNIronSourceRewardedVideo: RCTEventEmitter {
  
  @objc public func initializeRewardedVideo() {
    print("RNIronSourceRewardedVideo::showRewardedVideo:: available")
    IronSource.setRewardedVideoDelegate(self)
   
  }
  
  @objc public func showRewardedVideo() {
    if IronSource.hasRewardedVideo() {
      print("RNIronSourceRewardedVideo::showRewardedVideo:: available")
      if let viewController = UIApplication.shared.keyWindow!.rootViewController {
        IronSource.showRewardedVideo(with: viewController)
        sendEvent(withName: kRewardedVideoHasChangedAvailability, body: ["available": true])
      } else {
        print("RNIronSourceRewardedVideo::showRewardedVideo:: rootViewController not available")
      }
      
    } else {
      print("RNIronSourceRewardedVideo::showRewardedVideo:: not available")
      sendEvent(withName: kRewardedVideoHasChangedAvailability, body: ["available": false])
    }
  }
  
  override func supportedEvents() -> [String]! {
    return [
      kRewardedVideoHasChangedAvailability,
      kRewardedVideoDidEnd,
      kRewardedVideoDidStart,
      kRewardedVideoDidClose,
      kRewardedVideoDidOpen,
      kRewardedVideoDidFailToShowWithError,
      kDidReceiveReward,
      kDidClickRewardedVideo
    ]
  }
}

extension RNIronSourceRewardedVideo: ISRewardedVideoDelegate {
  /**
   Called after a rewarded video has changed its availability.
   
   @param available The new rewarded video availability. YES if available and ready to be shown, NO otherwise.
   */
  func rewardedVideoHasChangedAvailability(_ available: Bool) {
    print("RNIronSourceRewardedVideo::rewardedVideoHasChangedAvailability:: available",available)
    sendEvent(withName: kRewardedVideoHasChangedAvailability, body: ["available": available])
  }
  
  public func rewardedVideoDidEnd() {
    print("RNIronSourceRewardedVideo::rewardedVideoDidEnd:: rewardedVideoDidEnd")
    sendEvent(withName: kRewardedVideoDidEnd, body: nil)
  }
  
  /**
   Called after a rewarded video has started playing.
   */
  public func rewardedVideoDidStart() {
    print("RNIronSourceRewardedVideo::rewardedVideoDidEnd:: rewardedVideoDidStart")
    sendEvent(withName: kRewardedVideoDidStart, body: nil)
  }
  
  /**
   Called after a rewarded video has been dismissed.
   */
  public func rewardedVideoDidClose() {
    print("RNIronSourceRewardedVideo::rewardedVideoDidEnd:: rewardedVideoDidClose")
    sendEvent(withName: kRewardedVideoDidClose, body: nil)
  }
  
  /**
   Called after a rewarded video has been opened.
   */
  public func rewardedVideoDidOpen() {
    print("RNIronSourceRewardedVideo::rewardedVideoDidEnd:: rewardedVideoDidOpen")
    sendEvent(withName: kRewardedVideoDidOpen, body: nil)
  }
  
  /**
   Called after a rewarded video has attempted to show but failed.
   
   @param error The reason for the error
   */
  public func rewardedVideoDidFailToShowWithError(_ error: Error!) {
    print("RNIronSourceRewardedVideo::rewardedVideoDidFailToShowWithError:: error",error)
    sendEvent(withName: kRewardedVideoDidFailToShowWithError, body: ["error": error])
  }
  
  /**
   Called after a rewarded video has been viewed completely and the user is eligible for reward.
   
   @param placementInfo An object that contains the placement's reward name and amount.
   */
  public func didReceiveReward(forPlacement placementInfo: ISPlacementInfo!) {
    print("RNIronSourceRewardedVideo::didReceiveReward:: placementInfo",placementInfo)
    sendEvent(withName: kDidReceiveReward, body: ["placementInfo": placementInfo])
  }
  
  /**
   Invoked when the end user clicked on the RewardedVideo ad
   */
  public func didClickRewardedVideo(_ placementInfo: ISPlacementInfo!) {
    print("RNIronSourceRewardedVideo::didClickRewardedVideo:: placementInfo",placementInfo)
    sendEvent(withName: kDidClickRewardedVideo, body: ["placementInfo": placementInfo])
  }
  
}
