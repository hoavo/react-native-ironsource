//
//  RNIronSource.swift
//  example
//
//  Created by Loi Relia on 3/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(RNIronSource)
class RNIronSource: NSObject {
  
  @objc func initWithAppKey(_ appKey: String, userId: String) {
    print("RNIronSource::initWithAppKey:: initWithAppKey", appKey,userId)
    IronSource.initWithAppKey(appKey)
    IronSource.setUserId(userId)
    ISIntegrationHelper.validateIntegration()
  }
}
