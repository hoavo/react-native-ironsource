//
//  RNIronSourceInterstitials.swift
//  example
//
//  Created by Loi Relia on 3/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

let kDidClickInterstitial = "didClickInterstitial";
let kInterstitialDidFailToShowWithError = "interstitialDidFailToShowWithError";
let kInterstitialDidShow = "interstitialDidShow";
let kInterstitialDidClose = "interstitialDidClose";
let kInterstitialDidOpen = "interstitialDidOpen";
let kInterstitialDidFailToLoadWithError = "interstitialDidFailToLoadWithError";
let kInterstitialDidLoad = "interstitialDidLoad";

@objc(RNIronSourceInterstitials)
class RNIronSourceInterstitials: RCTEventEmitter {
  @objc public func initializeInterstitial() {
    print("RNIronSourceInterstitials::initializeInterstitial:: initializeInterstitial")
    IronSource.setInterstitialDelegate(self)
    IronSource.loadInterstitial()
  }
  
    @objc public func showInterstitial(_ placementName: String) {
    if IronSource.hasInterstitial() {
      print("RNIronSourceInterstitials::showInterstitial:: available")
      if let viewController = UIApplication.shared.keyWindow!.rootViewController {
        IronSource.showInterstitial(with: viewController, placement: placementName)
      } else {
        print("RNIronSourceInterstitials::showInterstitial:: rootViewController not available")
      }
      
    } else {
      print("RNIronSourceInterstitials::showInterstitial:: not available")
    
    }
  }
  
  override func supportedEvents() -> [String]! {
    return [
      kDidClickInterstitial,
      kInterstitialDidFailToShowWithError,
      kInterstitialDidShow,
      kInterstitialDidClose,
      kInterstitialDidOpen,
      kInterstitialDidFailToLoadWithError,
      kInterstitialDidLoad,
    ]
  }
}

extension RNIronSourceInterstitials: ISInterstitialDelegate {
  //MARK: ISInterstitialDelegate Functions
  /**
   Called after an interstitial has been clicked.
   */
  public func didClickInterstitial() {
    print("RNIronSourceInterstitials::didClickInterstitial")
    sendEvent(withName: kDidClickInterstitial, body: nil)
  }
  
  /**
   Called after an interstitial has attempted to show but failed.
   
   @param error The reason for the error
   */
  public func interstitialDidFailToShowWithError(_ error: Error!) {
    print("RNIronSourceInterstitials::interstitialDidFailToShowWithError:: error", error)
    sendEvent(withName: kInterstitialDidFailToShowWithError, body: ["error": error])
  }
  
  /**
   Called after an interstitial has been displayed on the screen.
   */
  public func interstitialDidShow() {
    print("RNIronSourceInterstitials::interstitialDidShow")
    sendEvent(withName: kInterstitialDidShow, body: nil)
  }
  
  /**
   Called after an interstitial has been dismissed.
   */
  public func interstitialDidClose() {
    print("RNIronSourceInterstitials::interstitialDidClose")
    sendEvent(withName: kInterstitialDidClose, body: nil)
  }
  
  /**
   Called after an interstitial has been opened.
   */
  public func interstitialDidOpen() {
    print("RNIronSourceInterstitials::interstitialDidOpen")
    sendEvent(withName: kInterstitialDidOpen, body: nil)
  }
  
  /**
   Called after an interstitial has attempted to load but failed.
   
   @param error The reason for the error
   */
  public func interstitialDidFailToLoadWithError(_ error: Error!) {
    print("RNIronSourceInterstitials::interstitialDidFailToLoadWithError:: error", error)
    sendEvent(withName: kInterstitialDidFailToLoadWithError, body: ["error": error])
  }
  
  /**
   Called after an interstitial has been loaded
   */
  public func interstitialDidLoad() {
    print("RNIronSourceInterstitials::interstitialDidLoad")
    sendEvent(withName: kInterstitialDidLoad, body: nil)
  }
}
