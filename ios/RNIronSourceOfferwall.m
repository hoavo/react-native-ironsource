//
//  RNIronSourceOfferwall.m
//  example
//
//  Created by Loi Relia on 3/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//


#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNIronSourceOfferwall, NSObject)
+ (BOOL)requiresMainQueueSetup
{
  ; return YES;
}

RCT_EXTERN_METHOD(initializeOfferwall)
RCT_EXTERN_METHOD(showOfferwall)

@end

