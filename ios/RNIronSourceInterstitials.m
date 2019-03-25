//
//  RNIronSourceInterstitials.m
//  example
//
//  Created by Loi Relia on 3/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNIronSourceInterstitials, NSObject)
+ (BOOL)requiresMainQueueSetup
{
  ; return YES;
}

RCT_EXTERN_METHOD(initializeInterstitial)
RCT_EXTERN_METHOD(showInterstitial:(NSString*) placementName)

@end

