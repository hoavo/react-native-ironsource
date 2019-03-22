////
////  RNIronSourceBanner.swift
////  example
////
////  Created by Loi Relia on 3/21/19.
////  Copyright © 2019 Facebook. All rights reserved.
////
//
//import Foundation
//
//let bannerDidLoad = "bannerDidLoad";
//let bannerDidFailToLoadWithError = "bannerDidFailToLoadWithError";
//let didClickBanner = "didClickBanner";
//let bannerWillPresentScreen = "bannerWillPresentScreen";
//let bannerDidDismissScreen = "bannerDidDismissScreen";
//let bannerWillLeaveApplication = "bannerWillLeaveApplication";
//
//
//@objc(RNIronSourceInterstitials)
//class RNIronSourceBanner: RCTEventEmitter {
//  private var bannerView: ISBannerView!
//
//  @objc public func initializeBanner() {
//    IronSource.setBannerDelegate(self)
//    NotificationCenter.default.addObserver(self, selector: #selector(orientationChanged), name: NSNotification.Name.UIDeviceOrientationDidChange, object: nil)
//  }
//
//  @objc private orientationChanged() {
//
//  }
//
//
//  override func supportedEvents() -> [String]! {
//    return [
//      kRewardedVideoHasChangedAvailability,
//      kRewardedVideoDidEnd,
//      kRewardedVideoDidStart,
//      kRewardedVideoDidClose,
//      kRewardedVideoDidOpen,
//      kRewardedVideoDidFailToShowWithError,
//      kDidReceiveReward,
//      kDidClickRewardedVideo
//    ]
//  }
//}
//
//extension RNIronSourceBanner: ISBannerDelegate {
//  /**
//   Called after a banner ad has been successfully loaded
//   */
//  func bannerDidLoad(_ bannerView: ISBannerView!) {
//
//  }
//
//  /**
//   Called after a banner has attempted to load an ad but failed.
//   @param error The reason for the error
//   */
//  func bannerDidFailToLoadWithError(_ error: Error!) {
//
//  }
//  /**
//   Called after a banner has been clicked.
//   */
//  func didClickBanner() {
//
//  }
//
//  /**
//   Called when a banner is about to present a full screen content.
//   */
//  func bannerWillPresentScreen() {
//
//  }
//  /**
//   Called after a full screen content has been dismissed.
//   */
//  func bannerDidDismissScreen() {
//
//  }
//
//  /**
//   Called when a user would be taken out of the application context.
//   */
//  func bannerWillLeaveApplication() {
//
//  }
//}
