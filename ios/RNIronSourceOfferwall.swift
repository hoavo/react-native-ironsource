//
//  RNIronSourceOfferwall.swift
//  example
//
//  Created by Loi Relia on 3/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

let kDidFailToReceiveOfferwallCreditsWithError = "didFailToReceiveOfferwallCreditsWithError";
let kDidReceiveOfferwallCredits = "didReceiveOfferwallCredits";
let kOfferwallDidClose = "offerwallDidClose";
let kOfferwallDidFailToShowWithError = "offerwallDidFailToShowWithError";
let kOfferwallDidShow = "offerwallDidShow";
let kOfferwallHasChangedAvailability = "offerwallHasChangedAvailability";

@objc(RNIronSourceOfferwall)
class RNIronSourceOfferwall: RCTEventEmitter {
  
  @objc public func initializeOfferwall() {
    print("RNIronSourceOfferwall::initializeOfferwall:: initializeOfferwall")
    IronSource.setOfferwallDelegate(self)
    
  }
  
  @objc public func showOfferwall() {
    if IronSource.hasOfferwall() {
      print("RNIronSourceOfferwall::showOfferwall:: available")
      if let viewController = UIApplication.shared.keyWindow!.rootViewController {
        IronSource.showOfferwall(with: viewController)
        sendEvent(withName: kOfferwallHasChangedAvailability, body: ["available": true])
      } else {
        print("RNIronSourceOfferwall::showOfferwall:: rootViewController not available")
      }
      
    } else {
      print("RNIronSourceOfferwall::showOfferwall:: not available")
      sendEvent(withName: kOfferwallHasChangedAvailability, body: ["available": false])
    }
  }
  
  override func supportedEvents() -> [String]! {
    return [
      kDidFailToReceiveOfferwallCreditsWithError,
      kDidReceiveOfferwallCredits,
      kOfferwallDidClose,
      kOfferwallDidFailToShowWithError,
      kOfferwallDidShow,
      kOfferwallHasChangedAvailability
    ]
  }
  
}

extension RNIronSourceOfferwall: ISOfferwallDelegate {
  /**
   Called after the 'offerwallCredits' method has attempted to retrieve user's credits info but failed.
   
   @param error The reason for the error.
   */
  public func didFailToReceiveOfferwallCreditsWithError(_ error: Error!) {
    print("RNIronSourceOfferwall::didFailToReceiveOfferwallCreditsWithError:: error", error)
    sendEvent(withName: kDidFailToReceiveOfferwallCreditsWithError, body: ["error": error])
  }
  
  /**
   @abstract Called each time the user completes an offer.
   @discussion creditInfo is a dictionary with the following key-value pairs:
   
   "credits" - (int) The number of credits the user has Earned since the last didReceiveOfferwallCredits event that returned YES. Note that the credits may represent multiple completions (see return parameter).
   
   "totalCredits" - (int) The total number of credits ever earned by the user.
   
   "totalCreditsFlag" - (BOOL) In some cases, we won’t be able to provide the exact amount of credits since the last event (specifically if the user clears the app’s data). In this case the ‘credits’ will be equal to the "totalCredits", and this flag will be YES.
   
   @param creditInfo Offerwall credit info.
   
   @return The publisher should return a BOOL stating if he handled this call (notified the user for example). if the return value is NO, the 'credits' value will be added to the next call.
   */
  public func didReceiveOfferwallCredits(_ creditInfo: [AnyHashable : Any]!) -> Bool {
    print("RNIronSourceOfferwall::didReceiveOfferwallCredits:: creditInfo", creditInfo)
    sendEvent(withName: kDidReceiveOfferwallCredits, body: ["creditInfo": creditInfo])
    
    return true;
  }
  
  /**
   Called after the offerwall has been dismissed.
   */
  public func offerwallDidClose() {
    print("RNIronSourceOfferwall::offerwallDidClose")
    sendEvent(withName: kOfferwallDidClose, body: nil)
  }
  
  /**
   Called after the offerwall has attempted to show but failed.
   
   @param error The reason for the error.
   */
  public func offerwallDidFailToShowWithError(_ error: Error!) {
    print("RNIronSourceOfferwall::offerwallDidFailToShowWithError:: error", error)
    sendEvent(withName: kOfferwallDidFailToShowWithError, body: ["error": error])
  }
  
  /**
   Called after the offerwall has been displayed on the screen.
   */
  public func offerwallDidShow() {
    print("RNIronSourceOfferwall::offerwallDidShow")
    sendEvent(withName: kOfferwallDidShow, body: nil)
  }
  
  /**
   Called after the offerwall has changed its availability.
   
   @param available The new offerwall availability. YES if available and ready to be shown, NO otherwise.
   */
  public func offerwallHasChangedAvailability(_ available: Bool) {
    print("RNIronSourceOfferwall::offerwallHasChangedAvailability::: available", available)
    sendEvent(withName: kOfferwallHasChangedAvailability, body: nil)
  }
}
